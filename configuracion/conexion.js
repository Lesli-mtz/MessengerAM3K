const dotenv = require("dotenv");

// Cargar las variables del archivo .env
dotenv.config();

// Exportar la configuración
module.exports = {
    puerto: process.env.PORT,
    verifyToken: process.env.VERIFY_TOKEN,
    pageAccessToken: process.env.PAGE_ACCESS_TOKEN
};