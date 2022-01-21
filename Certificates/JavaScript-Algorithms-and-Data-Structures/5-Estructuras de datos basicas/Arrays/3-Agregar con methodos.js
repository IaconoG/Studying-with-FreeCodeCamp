//! Agrega elementos a un arreglo con push() y unshift()

// todo- La longitud de un arreglo, así como los tipos de datos que puede contener, no es fija.

//* Los arreglos son mutables

//* Métodos con los que podemos modificar un arreglo: 
  //* Array.push()
  //* Array.unshift().

// Ambos métodos toman uno o más elementos como parámetros y los agregan al arreglo que hizo la llamada
  // El método push() agrega los elementos al final del arreglo
  // El método unshift() los agrega al inicio


//? Ejemplo

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX'); // ['XIX', 'XX', "XXI", "XXII"].

romanNumerals.push(twentyThree); // ["XIX", "XX", "XXI", "XXII", 'XXIII']

// También podemos pasar variables, que nos permiten una mayor flexibilidad en la modificación dinámica de los datos de nuestro arreglo.


//? Ejercicio

// Hemos definido una función, mixedNumbers, a la cual le estamos pasando un arreglo como argumento. Modifica la función utilizando push() y unshift() para agregar 'I', 2, 'three' al principio del arreglo y 7, 'VIII', 9 al final, de tal modo que el arreglo devuelto contenga las representaciones de los números del 1 al 9 en orden

function mixedNumbers(arr) {
  // Cambia solo el código debajo de esta línea
  arr.unshift('I', 2, 'three')
  arr.push(7, 'VIII', 9)
  // Cambia solo el código encima de esta línea
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));