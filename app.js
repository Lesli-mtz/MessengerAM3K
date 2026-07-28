// Importar librerías
const express = require("express");
const dotenv = require("dotenv");

// Importar las rutas
const webhook = require("./rutas/webhook");

// Cargar las variables del archivo .env
dotenv.config();

// Crear la aplicación
const app = express();

// Puerto del servidor
const PUERTO = process.env.PORT || 3000;

// Permitir recibir datos en formato JSON
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.send("Servidor de Messenger AM3K funcionando correctamente.");
});

// Ruta del webhook
app.use("/webhook", webhook);

// Iniciar servidor
app.listen(PUERTO, () => {
    console.log("Servidor iniciado correctamente");
    console.log("Puerto: " + PUERTO);
});