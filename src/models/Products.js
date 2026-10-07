const db = [];
let seq = 0;

export default class Product {
    static all() {
        return db;
    }

    static find(id) {
        return db.find(x => x.id === +id);
    }

    static create(data) {
        const item = { id: ++seq, ...data };
        db.push(item);
        return item;
    }

    static update(id, data) {
        const item = this.find(id);
        if (!item) return null;
        Object.assign(item, data, { id: item.id });
        return item;
    }


    
    static remove(id) {
        const i = db.findIndex(x => x.id === +id);
        return i === -1 ? null : db.splice(i, 1)[0];
    }
}