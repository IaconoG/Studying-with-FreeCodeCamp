//! Captura el uso del operador de asignación en lugar del operador de igualdad


// Los programas de bifurcación (branching), es decir, los que hacen cosas diferentes si se cumplen ciertas condiciones, se basan en las sentencias if, else if y else de JavaScript.

// El operador de asignación (=) en JavaScript asigna un valor a una variable. 
// Y los operadores == y === comprueban la igualdad (el triple === comprueba la igualdad estricta, lo que significa que tanto el valor como el tipo son iguales).


//? Ejemplo

// El código siguiente asigna a x el valor de 2, que se evalúa como true. 
// Casi todos los valores por sí solos en JavaScript se evalúan como true, excepto lo que se conoce como valores "falsos" (falsy values): 
    // false, 0, "" (una cadena vacía), NaN, undefined, y null.

let xx = 1;
let yy = 2;
if (xx = yy) {

} else {

}

// El bloque de código dentro de la sentencia if se ejecutará para cualquier valor de y, a menos que y sea algún valor falsy. 
// El bloque else no se ejecutará realmente.


//? Ejercicio

// Corrige la condición para que el programa ejecute la rama correcta y se asigne el valor adecuado a result.

let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);