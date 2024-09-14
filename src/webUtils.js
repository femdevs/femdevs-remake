const crypto = require('crypto');
const { Buffer } = require('buffer');
const assert = require('assert/strict');

class Index {
    static Headers = (req, res, next) => [
        ['X-OS', process.platform],
        ['X-Frame-Options', 'SAMEORIGIN'],
        ['Referrer-Policy', 'same-origin'],
        ['X-Content-Type-Options', 'nosniff'],
    ];
    static Crypt = class {
        static cd = {
            ha: 'RSA-RIPEMD160',
            crypt: crypto.getCipherInfo("chacha20-poly1305"),
            encoding: 'base64url',
        };
        static CryptographyData = class {
            constructor() {
                this.iv = '';
                this.key = '';
                this.prehash = '';
                this.posthash = '';
                this.data = '';
            }
        };
        static Auto = class {
            static encrypt(inputData) {
                const data = new Index.Crypt.CryptographyData();
                data.prehash = crypto.createHash(Index.Crypt.cd.ha).update(Buffer.from(inputData)).digest(Index.Crypt.cd.encoding);
                data.iv = crypto.randomBytes(Index.Crypt.cd.crypt.ivLength).toString(Index.Crypt.cd.encoding);
                data.key = crypto.randomBytes(Index.Crypt.cd.crypt.keyLength).toString(Index.Crypt.cd.encoding);
                const encdata = crypto.createCipheriv(Index.Crypt.cd.crypt.name, Buffer.from(data.key, Index.Crypt.cd.encoding), Buffer.from(data.iv, Index.Crypt.cd.encoding)).update(Buffer.from(inputData));
                data.posthash = crypto.createHash(Index.Crypt.cd.ha).update(encdata).digest(Index.Crypt.cd.encoding);
                data.data = encdata.toString(Index.Crypt.cd.encoding);
                return Buffer.from(JSON.stringify(data), 'utf8').toString(Index.Crypt.cd.encoding);
            }
            static verify(inputData) {
                const data = JSON.parse(Buffer.from(inputData, Index.Crypt.cd.encoding).toString('utf-8'));
                Object.keys(new Index.Crypt.CryptographyData()).forEach(key => assert(Object.hasOwn(data, key), `Missing ${key} value`));
                const obj = new Index.Crypt.CryptographyData();
                for (const key of Object.keys(obj)) {
                    assert(Object.hasOwn(data, key), `Missing ${key} value`);
                    Object.assign(obj[key], data[key]);
                }
                try {
                    Array.of([obj.posthash, crypto.createHash(Index.Crypt.cd.ha).update(Buffer.from(obj.data, Index.Crypt.cd.encoding)).digest(Index.Crypt.cd.encoding)], [data.prehash, crypto.createHash(Index.Crypt.cd.ha).update(crypto.createDecipheriv(Index.Crypt.cd.crypt.name, Buffer.from(obj.key, Index.Crypt.cd.encoding), Buffer.from(obj.iv, Index.Crypt.cd.encoding)).update(Buffer.from(obj.data, Index.Crypt.cd.encoding))).digest(Index.Crypt.cd.encoding)]).forEach(v => assert.equal(...v));
                } catch (err) {
                    return false;
                }
                return true;
            }
            static decrypt(inputData) {
                const data = JSON.parse(Buffer.from(inputData, Index.Crypt.cd.encoding).toString('utf-8'));
                Object.keys(new Index.Crypt.CryptographyData()).forEach(key => assert(Object.hasOwn(data, key), `Missing ${key} value`));
                const obj = new Index.Crypt.CryptographyData();
                for (const key of Object.keys(obj)) {
                    assert(Object.hasOwn(data, key), `Missing ${key} value`);
                    Object.assign(obj[key], data[key]);
                };
                const outData = crypto.createDecipheriv(Index.Crypt.cd.crypt.name, Buffer.from(obj.key, Index.Crypt.cd.encoding), Buffer.from(obj.iv, Index.Crypt.cd.encoding)).update(Buffer.from(obj.data, Index.Crypt.cd.encoding));
                return outData.toString('utf-8');
            };
        };
        static Manual = class {
            static encrypt = (id, key, iv) => {
                const { ha, encoding } = Index.Crypt.cd;
                const ed = crypto.createCipheriv(Index.Crypt.cd.crypt.name, key, iv).update(id);
                return `${ed.toString(encoding)}.${crypto.createHash(ha).update(ed).digest(encoding)}`;
            };
            static verify = (token, key, iv) => {
                const [data, hash] = token.split('.');
                const { ha, encoding } = Index.Crypt.cd;
                try {
                    assert.equal(hash, crypto.createHash(ha).update(Buffer.from(data, encoding)).digest(encoding));
                    crypto.createDecipheriv(Index.Crypt.cd.crypt.name, key, iv).update(Buffer.from(data, encoding)).toString('utf-8');
                } catch (err) {
                    return false;
                }
                return true;
            };
            static decrypt = (token, key, iv) => {
                const st = token.split('.');
                const { ha, encoding } = Index.Crypt.cd;
                const fd = Buffer.from(st[0], encoding);
                const vh = crypto.createHash(ha).update(fd).digest(encoding);
                assert.equal(st[1], vh instanceof Buffer ? vh.toString(encoding) : vh);
                return crypto.createDecipheriv(Index.Crypt.cd.crypt.name, key, iv).update(fd).toString('utf-8');
            };
        };
        static completeHash = (data, fa = 'id-rsassa-pkcs1-v1_5-with-sha3-512') => {
            const hash = crypto.createHash(fa).update(crypto.getHashes().reduce((data, algo) => crypto.createHash(algo).update(data).digest(), data)).digest(Index.Crypt.cd.encoding);
            return hash instanceof Buffer ? hash.toString(Index.Crypt.cd.encoding) : hash;
        };
    };
}

export default Index;
