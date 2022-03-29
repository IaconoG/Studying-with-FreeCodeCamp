// Haz coincidir patrones de cadena final

// $ = buscar el final de las cadenas usando el carácter del signo de dólar $ al final de la expresión regular

let theEnding = 'This is a never ending story';

let storyRegex = /story$/;

storyRegex.test(theEnding); // true
// ['story']




