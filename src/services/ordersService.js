import Order from '../models/Orders.js';

export function getAllOrders() {
    return Order.all();
}

export function getOrderById(id) {
    return Order.find(id);
}

export function searchOrders(q) {
    const list = Order.all();
    const lower = q.toLowerCase();
    return list.filter((order) => String(order.userId).includes(lower));
}

export function createOrder(data) {
    return Order.create(data);
}

export function updateOrder(id, data) {
    return Order.update(id, data);
}

export function deleteOrder(id) {
    return Order.remove(id);
}