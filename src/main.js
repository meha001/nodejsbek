import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import usersRouter from './routers/users.js';
import productsRouter from './routers/products.js';
import ordersRouter from './routers/orders.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use((req, res, next) => {
    console.log(`INFO: ${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

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

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Порт ${PORT} уже занят. Закройте другой сервер или: $env:PORT=3001; npm start`);
        process.exit(1);
    }
    throw err;
});