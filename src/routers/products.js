import { Router } from 'express';
import Product from '../models/Products.js';

const router = Router();

router.get('/search', (req, res) => {
  const { q } = req.query;
  if (q === undefined || q === '') {
    return res.status(400).json({ error: 'query parameter "q" is required' });
  }
  res.json({ q });
});

router.get('/', (req, res) => res.json(Product.all()));

router.get('/:id', (req, res) => {
  const item = Product.find(req.params.id);
  item ? res.json(item) : res.status(404).json({ error: 'not found' });
});



export default router;