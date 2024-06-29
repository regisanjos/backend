const express = require('express');
const cors = require('cors');

require('dotenv/config');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(cors());

app.use(routes);

const PORT = process.env.APP_PORT || 3333;
app.listen(PORT, () => console.log(`Server is runing on Port ${PORT}`));