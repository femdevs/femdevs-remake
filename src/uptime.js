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
        const response = await fetch('https://betteruptime.com/api/v2/status-pages/195665/resources', {
            headers: {
                'Authorization': `Bearer ${this.token}`,
            },
        });
        const { data } = await response.json();
        const formattedData = [];
        for (const resource of data) {
            const resourceData = new ResourceData(resource.attributes);
            formattedData.push(resourceData);
        }
        const keyMap = { 'operational': 1, 'downtime': 2, 'degraded': 3, 'maintenance': 4 };
        return {
            agrStatus: formattedData.reduce((prev, { status }) => (prev !== 1 && keyMap[status] > prev) ? prev : keyMap[status], 1),
            uptime: formattedData.reduce((prev, { uptime }) => prev + uptime, 0) / formattedData.length,
            resources: formattedData,
        };
    }
}

export default UptimeClient;
export { ResourceData };
