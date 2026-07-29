function mostrarRespuesta(mensaje) {

    const texto = mensaje.toLowerCase().trim();

    // Saludo inicial
    if (
        texto === "hola" ||
        texto === "buenos dias" ||
        texto === "buenos días" ||
        texto === "buen dia" ||
        texto === "buen día" ||
        texto === "buenas tardes" ||
        texto === "buenas noches" ||
        texto === "hey" ||
        texto === "qué tal" ||
        texto === "que tal"
    ) {

        return "¡Hola! 👋 Bienvenido(a) a Distribuidora AM3K.\n\nSoy tu asistente virtual 🤖 ¿En qué podemos ayudarte?\n\n1️⃣ Productos\n2️⃣ Solicitar una cotización\n3️⃣ Horario de atención\n4️⃣ Ubicación\n5️⃣ Envíos\n6️⃣ Hablar con un asesor\n\nEscribe el número de la opción que deseas.";

    }

    else if (texto === "1") {
        return "Contamos con una amplia variedad de productos como:\n\n• Electrodomésticos\n• Cuidado personal\n• Jardinería\n• Perfumería\n• Juguetes\n• Artículos para el hogar\n\nY mucho más.\nIndícanos el producto que buscas y con gusto te ayudaremos.";
    }

    else if (texto === "2") {
        return "Para elaborar una cotización, por favor indícanos:\n\n• Nombre del producto.\n• Cantidad que necesitas.\n\nUn asesor revisará tu solicitud y te proporcionará la información correspondiente.";
    }

    else if (texto === "3") {
        return "🕘 Nuestro horario de atención es:\n\nLunes a viernes\n9:00 a.m. a 6:00 p.m.";
    }

    else if (texto === "4") {
        return "📍 Nos encontramos en:\n\nAv. Maravatío No. 3\nCol. Juan Xocotla\nTultepec, Estado de México\nC.P. 54960";
    }

    else if (texto === "5") {
        return "🚚 Realizamos envíos dependiendo de la zona y del producto solicitado.\n\nIndícanos tu ubicación para brindarte más información.";
    }

    else if (texto === "6") {
        return "👨‍💼 En unos momentos un asesor continuará con tu atención.\n\nGracias por tu paciencia.";
    }

    else {

        return "No reconocí tu mensaje. 😊\n\nEscribe *Hola* para ver el menú principal o selecciona una opción:\n\n1️⃣ Productos\n2️⃣ Cotizaciones\n3️⃣ Horario\n4️⃣ Ubicación\n5️⃣ Envíos\n6️⃣ Hablar con un asesor.";

    }

}

module.exports = mostrarRespuesta;