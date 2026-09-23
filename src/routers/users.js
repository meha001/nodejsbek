import { Router } from 'express';
import User from '../models/Users.js';

const router = Router();

router.get('/search', (req, res) => {
  const { q } = req.query;
  if (q === undefined || q === '') {
    return res.status(400).json({ error: 'query parameter "q" is required' });
  }
  res.json({ q });
});

router.get('/', (req, res) => res.json(User.all()));

router.get('/:id', (req, res) => {
  const item = User.find(req.params.id);
  item ? res.json(item) : res.status(404).json({ error: 'not found' });
});

export default router;