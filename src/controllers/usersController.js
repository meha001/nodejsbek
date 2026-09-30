import * as usersService from '../services/usersService.js';
import { validateUser } from '../utils/validators.js';

export const getAll = (req, res) => {
    res.json(usersService.getAllUsers());
};

export const getById = (req, res) => {
    const user = usersService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Пользователя нету' });
    res.json(user);
};

export const search = (req, res) => {
    const q = req.query.q || '';
    res.json(usersService.searchUsers(q));
};

export const create = (req, res) => {
    const errors = validateUser(req.body);
    if (errors.length > 0) return res.status(400).json({ errors });
    res.status(201).json(usersService.createUser(req.body));
};

export const update = (req, res) => {
    const user = usersService.updateUser(req.params.id, req.body);
    if (!user) return res.status(404).json({ error: 'Пользователя нету' });
    res.json(user);
};

export const remove = (req, res) => {
    const user = usersService.deleteUser(req.params.id);
    if (!user) return res.status(404).json({ error: 'Пользователя нету' });
    res.json(user);
};