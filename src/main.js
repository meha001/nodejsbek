import express from 'express';
import usersRouter from './routers/users.js';
import productsRouter from './routers/products.js';
import ordersRouter from './routers/orders.js';

const app = express();

app.use((req, res, next) => {
    console.log(`INFO: ${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});

app.use(express.json());

app.post('/echo', (req, res) => {
    res.json(req.body);
});

function requireAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).json({ error: 'Ошибка авторизации' });
    }
    next();
}

app.get('/admin', requireAuth, (req, res) => {
    res.json({ message: 'Welcome, admin!' });
});

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);


process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT:', err);
});

process.on('unhandledRejection', (err) => {
    console.error('UNHANDLED:', err);
});

app.listen(3000, () => console.log('http://localhost:3000'));