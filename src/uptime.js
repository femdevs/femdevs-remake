class ResourceData {
    constructor(data) {
        this.uptime = data.availability;
        this.status = data.status;
    }
}

class UptimeClient {
    constructor(token) {
        this.token = token;
    }
    async status() {
        const init = {
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        };
        const response = await fetch(`https://betteruptime.com/api/v2/status-pages/195665/resources`, init)
            .then(res => res.json());
        const resourceIDs = response.data.map(obj => obj.id);
        const resources = [];
        for (const id of resourceIDs) {
            const { data: {attributes: attr } } = await fetch(`https://uptime.betterstack.com/api/v2/status-pages/195665/resources/${id}`, init)
                .then(res => res.json());
            resources.push(new ResourceData(attr));
        }
        const keyMap = { 'up': 1, 'down': 2, 'degraded': 3, 'maintenance': 4 };
        return {
            agrStatus: resources.reduce((prev, dat) => {
                if (prev === 2 || keyMap[dat.status] === 2) return 2;
                if (prev === 3 || keyMap[dat.status] === 3) return 3;
                if (prev === 4 || keyMap[dat.status] === 4) return 4;
                return 1;
            }, 1),
            uptime: resources.reduce((prev, { uptime }) => prev + uptime, 0) / resources.length,
            resources: resources,
        };
    }
}

export default UptimeClient;
export { ResourceData };
