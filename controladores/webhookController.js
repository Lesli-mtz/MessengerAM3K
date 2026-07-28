const responder = require("../respuestas/resAutomaticas");
const enviarMensaje = require("../servicios/chatbot");

// Verificar el Webhook
function verificarWebhook(req, res) {

    const token = process.env.VERIFY_TOKEN;

    const mode = req.query["hub.mode"];
    const verifyToken = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode && verifyToken === token) {

        console.log("Webhook verificado correctamente.");
        res.status(200).send(challenge);

    } else {

        res.sendStatus(403);

    }

}

// Recibir mensajes
async function recibirMensaje(req, res) {

    const body = req.body;
    
    console.log("Mensaje recibido de Meta:");
    console.log(JSON.stringify(body, null, 2));

    if (body.object === "page") {

        body.entry.forEach(function(entry) {

            const evento = entry.messaging[0];

            const idUsuario = evento.sender.id;

            if (evento.message) {

                const mensaje = evento.message.text;

                const respuesta = responder(mensaje);

                enviarMensaje(idUsuario, respuesta);

            }

        });

        res.status(200).send("EVENT_RECEIVED");

    } else {

        res.sendStatus(404);

    }

}

module.exports = {

    verificarWebhook,
    recibirMensaje

};