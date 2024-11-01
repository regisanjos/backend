const app = require('./src/Server');
const PORT = process.env.APP_PORT || 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
