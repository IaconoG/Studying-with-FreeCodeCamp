// Usa el metodo 'test'

// Las Expresiones regulares se utilizan en lenguiajes de programacion para conicidir con partes de cadenas.
// Creas patrones para ayudar a hacer esa coincidencia

/// Ejemplo

// Si quieres encontrar la palabra the en la cadena The dog chased the cat, puedes utilizar la siguiente expresión regular: /the/.


// Una forma de probar una expresion regular es usando el metodo ' .test() '
// Este metodo toma la expresion regular, la aplica a una cadena y devuelve true o false si tu patro encuentra algo o no.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
let result = testRegex.test(testStr); // true

