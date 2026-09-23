import { Router } from 'express';
import Order from '../models/Orders.js';

const router = Router();

router.get('/', (req, res) => res.json(Order.all()));

router.get('/search', (req, res) => {
  const { q } = req.query;
  if (q === undefined || q === '') {
    return res.status(400).json({ error: 'query parameter "q" is required' });
  }
  res.json({ q });
});


router.get('/:id', (req, res) => {
  const item = Order.find(req.params.id);
  item ? res.json(item) : res.status(404).json({ error: 'not found' });
});


export default router;