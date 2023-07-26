//! Captura paréntesis, corchetes, llaves y comillas sin cerrar

// Otro error de sintaxis a tener en cuenta es que todos los paréntesis de apertura, corchetes, llaves y comillas tienen un par de cierre.

//  También hay que tener cuidado al anidar bloques de código dentro de otros, como agregar una función de callback como argumento de un método.

//? Ejercicio

// Corrige los dos errores de par en el código.

let myArray1 = [1, 2, 3/*]*/;

let arraySum1 = myArray1.reduce((previous, current/*)*/ =>  previous + current);

console.log(`Sum of array values is: ${arraySum1}`);


