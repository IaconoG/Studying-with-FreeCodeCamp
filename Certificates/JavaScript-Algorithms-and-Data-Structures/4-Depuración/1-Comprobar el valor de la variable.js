//! Usa la consola de JavaScript para comprobar el valor de una variable 

//!                             DevTools


// Tanto Chrome como Firefox tienen excelentes consolas de JavaScript, también conocidas como DevTools, para depurar tu JavaScript.


// El método console.log(), "imprime" la salida de lo que está dentro de sus paréntesis a la consola
// Colocarlo en puntos estratégicos de tu código puede mostrarte los valores intermedios de las variables
// Tener puntos de control para ver el estado de tus cálculos a lo largo de tu código ayudará a acotar dónde está el problema.

//? Ejemplo

console.log('Hello world!');


//? Ejercicio

// Utiliza el método console.log() para imprimir el valor de la variable a donde se indica en el código.

let a = 5;
let b = 1;
a++;
// Cambia solo el código debajo de esta línea
console.log(a) // 6


let sumAB = a + b;
console.log(sumAB);