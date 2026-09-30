import * as productsService from '../services/productsService.js';

export const getAll = (res) => {
    res.json(productsService.getAllProducts());
};

export const getById = (req, res) => {
    const product = productsService.getProductById(req.params.id);
    
    res.json(product);
};

export const search = (req, res) => {
    const q = req.query.q || '';
    res.json(productsService.searchProducts(q));
};

export const create = (req, res) => {
    res.status(201).json(productsService.createProduct(req.body));
};

export const update = (req, res) => {
    const product = productsService.updateProduct(req.params.id, req.body);
    res.json(product);
};

export const remove = (req, res) => {
    const product = productsService.deleteProduct(req.params.id);
    
    res.json(product);
};