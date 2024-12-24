class Response {
    type: string;
    data: any[];
    constructor(type: string) {
        this.type = type;
        this.data = [];
    }
    add(obj: ExtendedObj | SimpleObj) {
        this.data.push(obj.XML);
        return this;
    }
    get XML() {
        return {
            res: [
                {
                    header: [
                        new SimpleObj('Created', new Date().toISOString()).XML,
                        new SimpleObj('Type', this.type).XML,
                    ],
                },
                {
                    data: this.data,
                },
            ],
        };
    }
}

class Obj {
    type: string;
    key: string;
    value: any;
    constructor(type: string, key: string, value: any) {
        this.type = type;
        this.key = key;
        this.value = value;
    }
}

class ExtendedObj extends Obj {
    constructor(key: string) {
        super('extended', key, []);
    }
    add(obj: ExtendedObj | SimpleObj) {
        this.value.push(obj.XML);
        return this;
    }
    get XML() {
        return {
            object: [
                { _attr: { type: 'extended' } },
                { key: this.key },
                { value: this.value },
            ],
        };
    }
}

class SimpleObj extends Obj {
    constructor(key: string, value: string | number | boolean) {
        super('simple', key, value);
    }
    get XML() {
        return {
            object: {
                _attr: {
                    type: 'simple',
                    key: this.key,
                    value: this.value,
                },
            },
        };
    }
}

const def = {
    Response,
    SimpleObj,
    ExtendedObj,
    Obj,
};

export default def;

