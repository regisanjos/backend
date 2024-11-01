const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/UserRoutes'); 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRoutes); 

module.exports = app;
