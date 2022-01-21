// Haz coincidir caracteres individuales no especificados   ^ = negacion

// Crea una sola expresión regular que coincida con todos los caracteres que no son un número o una vocal. Recuerda incluir las banderas apropiadas en la expresión regular.

let quoteSample = '3 blind mice.';

let myRegex = /[^aeiou1-9]/ig;

let result = quoteSample.match(myRegex);

// [ ' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.' ]


