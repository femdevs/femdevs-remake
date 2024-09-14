class WhoisContact {
	constructor(data) {
		const safeSetter = (k, inp, def = 'Unknown') => this[k] = (inp[k]) ? inp[k] : def;
		const keys = ['name', 'organization', 'street', 'city', 'state', 'postalCode', 'country', 'phone', 'fax', 'email'];
		keys.forEach(k => safeSetter(k, data));
	}
}

class WhoisData {
	constructor(data) {
		const safeSetter = (k, inp, def = 'Unknown') => this[k] = (inp[k]) ? inp[k] : def;
		const keys = ['domainName', 'registrar', 'creationDate', 'expirationDate', 'updatedDate'];
		keys.forEach(k => safeSetter(k, data));
		this.registrant = new WhoisContact(data.registrant);
		this.admin = new WhoisContact(data.admin);
		this.tech = new WhoisContact(data.tech);
		this.billing = new WhoisContact(data.billing);
		this.status = [];
		const statusMap = new Map()
			.set('clienthold', 'Client Hold')
			.set('serverhold', 'Server Hold')
			.set('clientrenewprohibited', 'Client Renew Prohibited')
			.set('serverrenewprohibited', 'Server Renew Prohibited')
			.set('clientupdateprohibited', 'Client Update Prohibited')
			.set('serverupdateprohibited', 'Server Update Prohibited')
			.set('clientdeleteprohibited', 'Client Delete Prohibited')
			.set('serverdeleteprohibited', 'Server Delete Prohibited')
			.set('clienttransferprohibited', 'Client Transfer Prohibited')
			.set('servertransferprohibited', 'Server Transfer Prohibited');
		Array.from(data.status)
			.forEach(status => this.status.push(statusMap.get(status.split(' ')[0].toLowerCase()) || `Unknown Declaration: ${status}`));
	}
}

class Domain {
	constructor(baseDomain) {
		const tempDomain = new URL(`https://${baseDomain}/`).hostname.split('.');
		if (tempDomain.length < 2) throw 'Invalid domain';
		const tempCoreDomain = tempDomain.slice(-2);
		if (tempCoreDomain.some(v => v.length < 2)) throw 'Invalid domain';
		this.baseDomain = tempCoreDomain.join('.');
		this.requestedDomain = baseDomain;
		this.subdomain = this.baseDomain !== this.requestedDomain;
	}
}

class DNS {
	constructor() {
		// eslint-disable-next-line id-length
		this.A = "";
		this.AAAA = "";
		this.CAA = [];
		this.CNAME = "";
		this.MX = [];
		this.NS = [];
		this.PTR = [];
		this.SOA = {};
		this.SRV = [];
		this.TXT = [];
	}
	newRecord(type, data) {
		switch (type) {
			// eslint-disable-next-line id-length
			case 'A': return this.A = data;
			case 'AAAA': return this.AAAA = data;
			case 'CAA': return this.CAA.push(data);
			case 'CNAME': return this.CNAME = data;
			case 'MX': return this.MX.push(data);
			case 'NS': return this.NS.push(data);
			case 'PTR': return this.PTR.push(data);
			case 'SOA': return this.SOA = data;
			case 'SRV': return this.SRV.push(data);
			case 'TXT': return this.TXT.push(data);
			default: return;
		}
	}
}

export { DNS, Domain, WhoisContact, WhoisData };
