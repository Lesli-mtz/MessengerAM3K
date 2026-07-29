const axios = require("axios");

// Función para enviar un mensaje
async function enviarMensaje(idUsuario, mensaje) {

    const token = process.env.PAGE_ACCESS_TOKEN;

    console.log("TOKEN:", token);

    try {

        await axios.post(
            "https://graph.facebook.com/v23.0/me/messages",
            {
                recipient: {
                    id: idUsuario
                },
                message: {
                    text: mensaje
                }
            },
            {
                params: {
                    access_token: token
                }
            }
        );

        console.log("Mensaje enviado correctamente.");

    } catch (error) {

        console.log("Error al enviar el mensaje.");
        console.log(error.response ? error.response.data : error.message);

    }

}

module.exports = enviarMensaje;