const responder = require("../respuestas/resAutomaticas");
const enviarMensaje = require("../servicios/chatbot");
const conversaciones = {};

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

// Si el usuario ya está en una conversación
if (conversaciones[idUsuario]) {

    const estado = conversaciones[idUsuario].estado;

    // Esperando categoría
    if (estado === "esperandoCategoria") {

        conversaciones[idUsuario] = {
            estado: "esperandoProducto",
            categoria: mensaje
        };

        enviarMensaje(
            idUsuario,
            "Perfecto. 😊\n\n¿Qué producto de " + mensaje + " estás buscando?"
        );

    }

    // Esperando nombre del producto
    else if (estado === "esperandoProducto") {

        conversaciones[idUsuario].estado = "esperandoCantidad";
        conversaciones[idUsuario].producto = mensaje;

        enviarMensaje(
            idUsuario,
            "Muy bien.\n\n¿Cuántas piezas de " + mensaje + " necesitas?"
        );

    }

    // Esperando cantidad
    else if (estado === "esperandoCantidad") {

        const producto = conversaciones[idUsuario].producto;

        enviarMensaje(
            idUsuario,
            "✅ Gracias.\n\nTu solicitud quedó registrada:\n\nProducto: " +
            producto +
            "\nCantidad: " +
            mensaje +
            "\n\nEn unos momentos un asesor continuará con tu atención."
        );

        delete conversaciones[idUsuario];

    }

}
else {

    const respuesta = responder(mensaje);

    enviarMensaje(idUsuario, respuesta);

    // Si el usuario pidió productos
    if (
        mensaje.toLowerCase() === "1" ||
        mensaje.toLowerCase().includes("producto")
    ) {

        conversaciones[idUsuario] = {
            estado: "esperandoCategoria"
        };

    }

}

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