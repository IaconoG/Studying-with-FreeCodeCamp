//! Copia un arreglo con el operador de propagación

//todo- El nuevo Operador de Propagación nos permite (Spread Operator) copiar fácilmente todos los elementos de una arreglo, en orden, con una sintaxis simple y altamente legible
//todo- La sintaxis de propagacion es: ' ... '

//? Ejemplo

// En la práctica, podemos utilizar el operador de propagación para copiar un arreglo de esta manera:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray] // [true, true, undefined, false, null]


//? Ejercicio 

// Hemos definido una función, copyMachine que toma arr (un arreglo) y num (un número) como argumentos. 
// Se supone que la función devuelve un nuevo arreglo compuesto por num copias de arr

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Cambia solo el código debajo de esta línea
    newArr.push([...arr])
    // Cambia solo el código encima de esta línea
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2)); 

// [ [ true, false, true ], [ true, false, true ] ]
