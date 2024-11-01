const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/UserRoutes'); // Verifique se o caminho está correto

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRoutes); // Monta as rotas de usuário

module.exports = app;
