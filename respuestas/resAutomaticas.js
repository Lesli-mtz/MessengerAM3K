function mostrarRespuesta(opcion) {

    if (opcion == "1") {
        return "Contamos con una amplia variedad de productos como:\n\n• Electrodomésticos\n• Cuidado personal\n• Jardinería\n• Perfumería\n• Juguetes\n• Artículos para el hogar\n\n Y mucho más.\n Indícanos el producto que buscas y con gusto te ayudaremos.";
    }

    else if (opcion == "2") {
        return "Para elaborar una cotización, por favor indícanos:\n\n• Nombre del producto.\n• Cantidad que necesitas.\n\nUn asesor revisará tu solicitud y te proporcionará la información correspondiente.";
    }

    else if (opcion == "3") {
        return "Nuestro horario de atención es:\n\nLunes a viernes\n9:00 a.m. a 6:00 p.m.";
    }

    else if (opcion == "4") {
        return "Nos encontramos en:\n\nAv. Maravatío No. 3\nCol. Juan Xocotla\nTultepec, Estado de México\nC.P. 54960";
    }

    else if (opcion == "5") {
        return "Realizamos envíos dependiendo de la zona y del producto solicitado.\n\nIndícanos tu ubicación para brindarte más información.";
    }

    else if (opcion == "6") {
        return "En unos momentos un asesor continuará con tu atención.\n\nGracias por tu paciencia.";
    }

    else {
        return "La opción que ingresaste no es válida.\nPor favor selecciona una opción del menú.";
    }

}

module.exports = mostrarRespuesta;