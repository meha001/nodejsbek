import { Router } from 'express';
import * as productsController from '../controllers/productsController.js';

const router = Router();

router.get('/search', productsController.search);

router.get('/', productsController.getAll);

router.get('/:id', productsController.getById);

router.post('/', productsController.create);
router.put('/:id', productsController.update);
router.delete('/:id', productsController.remove);

export default router;