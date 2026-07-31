function mostrarRespuesta(mensaje) {

    const texto = mensaje.toLowerCase().trim();

    const menu = "¡Hola!👋 Bienvenido(a) a Distribuidora AM3K.\nSoy tu asistente virtual 🤖 ¿En qué puedo ayudarte hoy?\n\n1️⃣ Productos\n2️⃣ Solicitar una cotización\n3️⃣ Horario de atención\n4️⃣ Ubicación\n5️⃣ Envíos\n6️⃣ Hablar con un asesor\n\nPuedes escribir el número de la opción o simplemente escribir lo que necesitas.";

    // Saludos
    if (
        texto.includes("hola") ||
        texto.includes("holi") ||
        texto.includes("hey") ||
        texto.includes("hi") ||
        texto.includes("buenos dias") ||
        texto.includes("buenos días") ||
        texto.includes("buen dia") ||
        texto.includes("buen día") ||
        texto.includes("buenas tardes") ||
        texto.includes("buenas noches") ||
        texto === "menu" ||
        texto === "menú"
    ) {
        return menu;
    }

    // Productos (menú)
    if (
        texto === "1" ||
        texto.includes("producto") ||
        texto.includes("productos") ||
        texto.includes("catalogo") ||
        texto.includes("catálogo") ||
        texto.includes("que venden") ||
        texto.includes("qué venden")
    ) {
        return "📦 Manejamos las siguientes categorías de productos:\n\n• Electrodomésticos\n• Cuidado personal\n• Jardinería\n• Perfumería\n• Juguetes\n• Artículos para el hogar\n\nEscribe la categoría que te interesa.";
    }

    // Cotización
    if (
        texto === "2" ||
        texto.includes("cotizacion") ||
        texto.includes("cotización") ||
        texto.includes("cotizar") ||
        texto.includes("precio") ||
        texto.includes("precios")
    ) {
        return "📝 Con gusto elaboraremos una cotización.\nPor favor indícanos el nombre del producto que deseas cotizar.";
    }

    // Horario
    if (
        texto === "3" ||
        texto.includes("horario") ||
        texto.includes("abren") ||
        texto.includes("cierran")
    ) {
        return "🕘 Nuestro horario de atención es:\n\nLunes a viernes\n9:00 a.m. a 6:00 p.m.\n\n¿Deseas realizar otra consulta?\n\nEscribe *Menú* para volver al menú principal o *Salir* para finalizar la conversación.";
    }

    // Ubicación
    if (
        texto === "4" ||
        texto.includes("ubicacion") ||
        texto.includes("ubicación") ||
        texto.includes("direccion") ||
        texto.includes("dirección") ||
        texto.includes("donde") ||
        texto.includes("dónde")
    ) {
        return "📍 Nos encontramos en:\n\nAv. Maravatío No. 3\nCol. Juan Xocotla\nTultepec, Estado de México\nC.P. 54960\n\n¿Deseas realizar otra consulta?\n\nEscribe *Menú* para volver al menú principal o *Salir* para finalizar la conversación.";
    }

    // Envíos
    if (
        texto === "5" ||
        texto.includes("envio") ||
        texto.includes("envío") ||
        texto.includes("envios") ||
        texto.includes("envíos")
    ) {
        return "🚚 Realizamos envíos dependiendo de la zona y del producto solicitado.\n\nCompártenos tu ubicación para brindarte más información.\n\n¿Deseas realizar otra consulta?\n\nEscribe *Menú* para volver al menú principal o *Salir* para finalizar la conversación.";
    }

    // Asesor
    if (
        texto === "6" ||
        texto.includes("asesor") ||
        texto.includes("humano") ||
        texto.includes("persona")
    ) {
        return "👨‍💼 En unos momentos un asesor continuará con tu atención.\n\nGracias por tu paciencia.\n\n¿Deseas realizar otra consulta?\n\nEscribe *Menú* para volver al menú principal o *Salir* para finalizar la conversación.";
    }

    // Salir
    if (
        texto.includes("salir") ||
        texto.includes("adios") ||
        texto.includes("adiós") ||
        texto === "gracias"
    ) {
        return "👋 Gracias por comunicarte con Distribuidora AM3K.\n\nHa sido un gusto atenderte.\n¡Que tengas un excelente día!";
    }

    return "Lo siento, no entendí tu mensaje. 😊\n\nEscribe *Hola* o *Menú* para ver las opciones disponibles.";

}

module.exports = mostrarRespuesta;