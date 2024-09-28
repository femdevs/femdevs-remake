import { Axios } from 'axios';

import Cache from 'node-cache';

const cache = new Cache({ stdTTL: 60, checkperiod: 120 });

class ResourceData {
    constructor(data) {
        this.uptime = data.availability;
        this.status = data.status;
    }
}

class UptimeClient {
    constructor(token) {
        this.token = token;
        this.axios = new Axios({
            headers: {
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
                Expires: '0',
                Authorization: `Bearer ${this.token}`,
            },
            responseType: 'json',
        });
    }
    async status() {
        const axios = new Axios({
            headers: {
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
                Expires: '0',
                Authorization: `Bearer ${this.token}`,
            },
            responseType: 'json',
        });
        const base = 'api/v2/status-pages/195665/resources';
        const response = cache.get('base') || await axios.get(`https://betteruptime.com/${base}`)
            .then(res => JSON.parse(res.data));
        if (!cache.has('base')) cache.set('base', response);
        const resourceIDs = response.data.map(obj => obj.id);
        const resources = [];
        for (const id of resourceIDs) {
            if (cache.has(id)) {
                resources.push(cache.get(id));
                continue;
            }
            const { data: { attributes: attr } } = await axios.get(`https://uptime.betterstack.com/${base}/${id}`)
                .then(res => JSON.parse(res.data));
            const resData = new ResourceData(attr);
            cache.set(id, resData);
            resources.push(resData);
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
