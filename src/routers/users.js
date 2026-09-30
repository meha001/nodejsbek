import { Router } from 'express';
import * as usersController from '../controllers/usersController.js';

const router = Router();

router.get('/search', usersController.search);
router.get('/', usersController.getAll);
router.get('/:id', usersController.getById);
router.post('/', usersController.create);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.remove);

export default router;