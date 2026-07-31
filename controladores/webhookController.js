const responder = require("../respuestas/resAutomaticas");
const enviarMensaje = require("../servicios/chatbot");

// Memoria de conversaciones
const conversaciones = {};

// Categorías válidas
const categorias = [
    "electrodomésticos",
    "electrodomesticos",
    "cuidado personal",
    "jardinería",
    "jardineria",
    "jardín",
    "jardin",
    "perfumería",
    "perfumeria",
    "juguetes",
    "artículos para el hogar",
    "articulos para el hogar",
    "hogar"
];

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

        body.entry.forEach(async function(entry) {

            const evento = entry.messaging[0];

            const idUsuario = evento.sender.id;

            if (evento.message) {

                const mensaje = evento.message.text.trim();
const texto = mensaje.toLowerCase();

// Crear conversación si no existe
if (!conversaciones[idUsuario]) {

    conversaciones[idUsuario] = {
        estado: "normal"
    };

}

const conversacion = conversaciones[idUsuario];

// Menú
if (texto === "menu" || texto === "menú") {

    conversaciones[idUsuario].estado = "normal";

    await enviarMensaje(idUsuario, responder("hola"));

    return;

}

// Salir
if (
    texto === "salir" ||
    texto === "adiós" ||
    texto === "adios"
) {

    delete conversaciones[idUsuario];

    await enviarMensaje(idUsuario, responder("salir"));

    return;

}

// ESPERANDO CATEGORÍA
if (conversacion.estado === "esperandoCategoria") {

    if (!categorias.includes(texto)) {

        await enviarMensaje(
            idUsuario,
            "❌ La categoría no es válida.\nSelecciona una de las siguientes:\n\n• Electrodomésticos\n• Cuidado personal\n• Jardinería\n• Perfumería\n• Juguetes\n• Artículos para el hogar"
        );

        return;

    }

    conversacion.categoria = mensaje;
    conversacion.estado = "esperandoProducto";

    await enviarMensaje(
        idUsuario,
        "Excelente. 😊\n¿Qué producto de " +
        mensaje +
        " estás buscando?"
    );
    return;
}

// ESPERANDO PRODUCTO
if (conversacion.estado === "esperandoProducto") {

    conversacion.producto = mensaje;

    await enviarMensaje(
        idUsuario,
        "✅ Gracias por tu consulta.\n\n" +
        "Categoría: " + conversacion.categoria +
        "\nProducto solicitado: " + conversacion.producto +
        "\n\nUn asesor verificará la disponibilidad del producto y se pondrá en contacto contigo a la brevedad.\nTambién te invitamos a que visites nuestra página oficial, donde conocerás todo lo que tenemos para ti 👀" + document.getElementById("https://electrozoneshop.com/") +
        "¿Deseas realizar otra consulta?\nEscribe *Menú* para volver al menú principal o *Salir* para finalizar la conversación."
    );

    delete conversaciones[idUsuario];

    return;

}

// ESPERANDO PRODUCTO PARA COTIZACIÓN
if (conversacion.estado === "esperandoProductoCotizacion") {

    conversacion.producto = mensaje;
    conversacion.estado = "esperandoCantidadCotizacion";

    await enviarMensaje(
        idUsuario,
        "Perfecto. 👍\n¿Cuántas piezas de " +
        mensaje +
        " deseas cotizar?"
    );

    return;
}

// ESPERANDO CANTIDAD PARA COTIZACIÓN
if (conversacion.estado === "esperandoCantidadCotizacion") {

    conversacion.cantidad = mensaje;

    await enviarMensaje(
        idUsuario,
        "📝 Tu solicitud de cotización ha sido registrada.\n\n" +
        "Producto: " + conversacion.producto +
        "\nCantidad: " + conversacion.cantidad + " piezas\n\n" +
        "Un asesor elaborará tu cotización y se pondrá en contacto contigo lo antes posible.\n\n" +
        "¿Deseas realizar otra consulta?\nEscribe *Menú* para volver al menú principal o *Salir* para finalizar la conversación."
    );

    delete conversaciones[idUsuario];

    return;
}

// ACTIVAR COTIZACIÓN
if (
    texto === "2" ||
    texto.includes("cotizacion") ||
    texto.includes("cotización") ||
    texto.includes("cotizar")
) {

    conversaciones[idUsuario].estado = "esperandoProductoCotizacion";

    const respuesta = responder(mensaje);

    await enviarMensaje(idUsuario, respuesta);

    return;
}

// ACTIVAR PRODUCTOS
if (
    texto === "1" ||
    texto.includes("producto")
) {

    conversaciones[idUsuario].estado = "esperandoCategoria";

    const respuesta = responder(mensaje);
    await enviarMensaje(idUsuario, respuesta);

    return;
}
// RESPUESTA NORMAL
const respuesta = responder(mensaje);
    await enviarMensaje(idUsuario, respuesta);

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