const app = require('./app');
const PUERTO = process.env.PORT || 3000;

require('dotenv').config();

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});