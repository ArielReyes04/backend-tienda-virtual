const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const autenticacionRoutes = require('./rutas/autenticacionRoutes');
const usuarioRoutes = require('./rutas/usuarioRoutes');
const productoRoutes = require('./rutas/productoRoutes');
const carritoRoutes = require('./rutas/carritoRoutes');
const pedidoRoutes = require('./rutas/pedidoRoutes');
const adminRoutes = require('./rutas/adminRoutes'); // Nueva importación
require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'https://frontend-tienda-virtual.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(cors());
app.options('*', cors());  // Responder a solicitudes OPTIONS
app.use(bodyParser.json());

app.use('/api/auth', autenticacionRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/carrito', carritoRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/admin', adminRoutes); // Nueva línea

module.exports = app;