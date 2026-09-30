import * as ordersService from '../services/ordersService.js';
import { validateOrder } from '../utils/validators.js';

export const getAll = (req, res) => {
    res.json(ordersService.getAllOrders());
};

export const getById = (req, res) => {
    const order = ordersService.getOrderById(req.params.id);
    res.json(order);
};

export const search = (req, res) => {
    const q = req.query.q || '';
    res.json(ordersService.searchOrders(q));
};

export const create = (req, res) => {
    const errors = validateOrder(req.body);
    res.status(201).json(ordersService.createOrder(req.body));
};

export const update = (req, res) => {
    const order = ordersService.updateOrder(req.params.id, req.body);
    res.json(order);
};

export const remove = (req, res) => {
    const order = ordersService.deleteOrder(req.params.id);
    res.json(order);
};