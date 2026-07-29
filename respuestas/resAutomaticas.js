function mostrarRespuesta(mensaje) {

    const texto = mensaje.toLowerCase().trim();

    const menu = "👋 ¡Hola! Bienvenido(a) a Distribuidora AM3K.\n\n¿En qué podemos ayudarte?\n\n1️⃣ Productos\n2️⃣ Solicitar una cotización\n3️⃣ Horario de atención\n4️⃣ Ubicación\n5️⃣ Envíos\n6️⃣ Hablar con un asesor\n\nPuedes escribir el número o simplemente decirnos qué necesitas.";

    // Saludos
    if (
        texto.includes("hola") ||
        texto.includes("holi") ||
        texto.includes("buenos días") ||
        texto.includes("buenos dias") ||
        texto.includes("buen día") ||
        texto.includes("buen dia") ||
        texto.includes("buenas tardes") ||
        texto.includes("buenas noches") ||
        texto.includes("qué tal") ||
        texto.includes("que tal") ||
        texto === "menu" ||
        texto === "menú"
    ) {
        return menu;
    }

    // Productos
    if (
        texto === "1" ||
        texto.includes("producto") ||
        texto.includes("productos") ||
        texto.includes("venden") ||
        texto.includes("catálogo") ||
        texto.includes("catalogo")
    ) {
        return "📦 Contamos con una amplia variedad de productos como:\n\n• Electrodomésticos\n• Cuidado personal\n• Jardinería\n• Perfumería\n• Juguetes\n• Artículos para el hogar\n\nY mucho más.\nIndícanos el producto que buscas y con gusto te ayudaremos.\n\n¿Deseas realizar otra consulta?\n\nEscribe *Menú* para volver al menú principal o *Salir* para finalizar la conversación.";
    }

    // Cotización
    if (
        texto === "2" ||
        texto.includes("cotización") ||
        texto.includes("cotizacion") ||
        texto.includes("cotizar") ||
        texto.includes("precio") ||
        texto.includes("coste") ||
        texto.includes("costo")
    ) {
        return "📝 Para elaborar una cotización, por favor indícanos:\n\n• Nombre del producto.\n• Cantidad que necesitas.\n\nUn asesor revisará tu solicitud y te proporcionará la información correspondiente.\n\n¿Deseas realizar otra consulta?\n\nEscribe *Menú* para volver al menú principal o *Salir* para finalizar la conversación.";
    }

    // Horario
    if (
        texto === "3" ||
        texto.includes("horario") ||
        texto.includes("hora") ||
        texto.includes("abren") ||
        texto.includes("cierran")
    ) {
        return "🕘 Nuestro horario de atención es:\n\nLunes a viernes\n9:00 a.m. a 6:00 p.m.\n\n¿Deseas realizar otra consulta?\n\nEscribe *Menú* para volver al menú principal o *Salir* para finalizar la conversación.";
    }

    // Ubicación
    if (
        texto === "4" ||
        texto.includes("ubicación") ||
        texto.includes("ubicacion") ||
        texto.includes("dirección") ||
        texto.includes("direccion") ||
        texto.includes("dónde") ||
        texto.includes("donde")
    ) {
        return "📍 Nos encontramos en:\n\nAv. Maravatío No. 3\nCol. Juan Xocotla\nTultepec, Estado de México\nC.P. 54960\n\n¿Deseas realizar otra consulta?\n\nEscribe *Menú* para volver al menú principal o *Salir* para finalizar la conversación.";
    }

    // Envíos
    if (
        texto === "5" ||
        texto.includes("envío") ||
        texto.includes("envio") ||
        texto.includes("envíos") ||
        texto.includes("envios")
    ) {
        return "🚚 Realizamos envíos dependiendo de la zona y del producto solicitado.\n\nIndícanos tu ubicación para brindarte más información.\n\n¿Deseas realizar otra consulta?\n\nEscribe *Menú* para volver al menú principal o *Salir* para finalizar la conversación.";
    }

    // Asesor
    if (
        texto === "6" ||
        texto.includes("asesor") ||
        texto.includes("asesora") ||
        texto.includes("humano") ||
        texto.includes("persona") ||
        texto.includes("agente")
    ) {
        return "👨‍💼 En unos momentos un asesor continuará con tu atención.\n\nGracias por tu paciencia.\n\n¿Deseas realizar otra consulta?\n\nEscribe *Menú* para volver al menú principal o *Salir* para finalizar la conversación.";
    }

    // Salir
    if (
        texto.includes("salir") ||
        texto.includes("adiós") ||
        texto.includes("adios") ||
        texto === "gracias"
    ) {
        return "👋 Gracias por comunicarte con Distribuidora AM3K.\n\nHa sido un gusto atenderte.\n¡Que tengas un excelente día!";
    }

    return "Lo siento, no entendí tu mensaje. 😊\n\nEscribe *Hola* o *Menú* para ver las opciones disponibles.";

}

module.exports = mostrarRespuesta;