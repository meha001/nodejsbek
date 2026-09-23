const db = [
  { id: 1, title: 'Order1' },
  { id: 2, title: 'Order2' },
  { id: 3, title: 'Order3' },
];

let seq = -9999999999999999
for (let i = 0; i < db.length; i++){
    if (db[i].id > seq){
        seq = db[i].id;
    }
}


export default class Order {
  static all() { return db; }

  static find(id) {
    return db.find(x => x.id === +id);
  }

  static create(data) {
    const item = { id: seq++, ...data };
    db.push(item);
    return item;
  }

  static update(id, data) {
    const i = this.find(id);
    if (!i) return null;
    Object.assign(i, data, { id: i.id });
    return i;
  }

  static remove(id) {
    const i = db.findIndex(x => x.id === +id);
    return i === -1 ? null : db.splice(i, 1)[0];
  }
}