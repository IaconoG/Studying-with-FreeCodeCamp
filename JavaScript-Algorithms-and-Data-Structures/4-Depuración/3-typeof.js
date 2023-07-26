//! Utiliza typeof para comprobar el tipo de una variable

/*
 * Puedes utilizar typeof para comprobar la estructura de datos, o tipo, de una variable. 
 * Esto es útil en la depuración cuando se trabaja con múltiples tipos de datos
 */


//? Ejemplos

console.log(typeof ""); // 'string'
console.log(typeof 0);  // 'number'
console.log(typeof []); // 'object'
console.log(typeof {}); // 'object'


//! Tipos de datos primitivos (inmutables)
/*
 * Boolean
 * Null
 * Undefined
 * Number
 * String
 * Symbol
 */
//! Tipos de elementos (mutables)
/*
 * Object
 */


//? Ejercicio

// Agrega dos sentencias console.log() para comprobar el typeof de cada una de las dos variables seven y three en el código.

let seven = 7;
let three = "3";
console.log(seven + three);
// Cambia solo el código debajo de esta línea

console.log(typeof seven) // number
console.log(typeof three) // string