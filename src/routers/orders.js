import { Router } from 'express';
import * as ordersController from '../controllers/ordersController.js';

const router = Router();

router.get('/search', ordersController.search);
router.get('/', ordersController.getAll);
router.get('/:id', ordersController.getById);
router.post('/', ordersController.create);
router.put('/:id', ordersController.update);
router.delete('/:id', ordersController.remove);

export default router;