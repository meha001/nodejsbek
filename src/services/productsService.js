import Product from '../models/Products.js';

export function getAllProducts() {
    return Product.all();
}

export function getProductById(id) {
    return Product.find(id);
}

export function searchProducts(q) {
    const list = Product.all();
    const lower = q.toLowerCase();
    return list.filter((product) => product.name.toLowerCase().includes(lower));
}

export function createProduct(data) {
    return Product.create(data);
}

export function updateProduct(id, data) {
    return Product.update(id, data);
}

export function deleteProduct(id) {
    return Product.remove(id);
}