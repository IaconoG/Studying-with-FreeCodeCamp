//! Agregar elementos usando splice()

//todo- Se puede utilizar el tercer parámetro, compuesto por uno o varios elementos, para agregarlo al agregar items.

//? Ejemplo 1

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14); // replace 13 for 12 on index 3 and push 14 next to index 3
console.log(numbers); // [10, 11, 12, 13, 14, 15]


//? Ejercicio

// Hemos definido una función, htmlColorNames, que toma un arreglo de colores HTML como argumento.
// Modifica la función usando splice() para eliminar los dos primeros elementos del arreglo y agrega 'DarkSalmon' y 'BlanchedAlmond' en sus respectivos lugares.


function htmlColorNames(arr) {
  // Cambia solo el código debajo de esta línea
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    // 0 = start del splice
    // 2 = eliminamos 2 elemntos
    // items = Items a remplazar los elemtnos eliminados

  // Cambia solo el código encima de esta línea
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));