const express = require("express");
const router = express.Router();

const webhookController = require("../controladores/webhookController");

// Verificar el webhook
router.get("/", webhookController.verificarWebhook);

// Recibir mensajes de Messenger
router.post("/", webhookController.recibirMensaje);

module.exports = router;