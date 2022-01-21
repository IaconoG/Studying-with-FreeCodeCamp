// Extrae coincidencias match()

//  También puedes extraer las coincidencias encontradas con el método .match().

// Para utilizar el método .match(), aplica el método a una cadena y pasa la expresión regular dentro de los paréntesis.

"Hello, World!".match(/Hello/);
// [ 'Hello', index: 0, input: 'Hello, World!', groups: undefined ]

let ourStr = "Regular expressions";
let ourRegex = /expressions/;

// string.metodo(regExp)
let result = ourStr.match(ourRegex);
// [ 'expressions', index: 8, input: 'Regular expressions', groups: undefined ]

