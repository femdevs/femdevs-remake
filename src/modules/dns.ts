const safeSetter = (
	main: any,
	k: string,
	inp: Record<string, any>,
	def: string = 'Unknown'
) => main[k] = (inp[k]) ? inp[k] : def;

class WhoisContact {
	constructor(data: Record<string, any>) {
		const keys = ['name', 'organization', 'street', 'city', 'state', 'postalCode', 'country', 'phone', 'fax', 'email'];
		keys.forEach(k => safeSetter(this, k, data));
	}
}

class WhoisData {
	registrant: WhoisContact;
	admin: WhoisContact;
	tech: WhoisContact;
	billing: WhoisContact;
	status: string[];
	constructor(data: Record<string, any>) {
		const keys = ['domainName', 'registrar', 'creationDate', 'expirationDate', 'updatedDate'];
		keys.forEach(k => safeSetter(this, k, data));
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
		Array.from(data.status as string[])
			.forEach(status => this.status.push(statusMap.get(status.split(' ')[0].toLowerCase()) || `Unknown Declaration: ${status}`));
	}
}

class Domain {
	baseDomain: string;
	requestedDomain: string;
	subdomain: boolean;
	constructor(baseDomain: string) {
		const tempDomain = new URL(`https://${baseDomain}/`).hostname.split('.');
		if (tempDomain.length < 2) throw 'Invalid domain';
		const tempCoreDomain = tempDomain.slice(-2);
		if (tempCoreDomain.some(v => v.length < 2)) throw 'Invalid domain';
		this.baseDomain = tempCoreDomain.join('.');
		this.requestedDomain = baseDomain;
		this.subdomain = this.baseDomain !== this.requestedDomain;
	}
}

type DNSRecordType = 'A' | 'AAAA' | 'CAA' | 'CNAME' | 'MX' | 'NS' | 'PTR' | 'SOA' | 'SRV' | 'TXT';

class DNS {
	// eslint-disable-next-line id-length
	A: string;
	AAAA: string;
	CAA: string[];
	CNAME: string;
	MX: string[];
	NS: string[];
	PTR: string[];
	SOA: Record<string, string>;
	SRV: string[];
	TXT: string[];
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
	newRecord(type: Omit<DNSRecordType, 'SOA'>, data: string): void;
	newRecord(type: 'SOA', data: Record<string, string>): void;
	newRecord(type: DNSRecordType, data: any): void {
		switch (type) {
			// eslint-disable-next-line id-length
			case 'A': return this.A = data;
			case 'AAAA': return this.AAAA = data;
			case 'CAA': return void this.CAA.push(data);
			case 'CNAME': return this.CNAME = data;
			case 'MX': return void this.MX.push(data);
			case 'NS': return void this.NS.push(data);
			case 'PTR': return void this.PTR.push(data);
			case 'SOA': return this.SOA = data;
			case 'SRV': return void this.SRV.push(data);
			case 'TXT': return void this.TXT.push(data);
			default: return;
		}
	}
}

export { DNS, Domain, WhoisContact, WhoisData };
