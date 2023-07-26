//! Combina dos arreglos utilizando el método "concat

//todo/ Concatenation significa unir elementos de extremo a extremo.
//todo/ JavaScript ofrece el método concat para cadenas y arreglos, que funciona de la misma manera

/*
 * Para arreglos, el metodo es llamdo desde un arreglo, un seugno arreglo es proporcionado como argumento de concat.
 * Devuelve un nuevo arreglo, sin mutar ninguno de los arreglos originales.
 */


//? Ejemplo

[1, 2, 3].concat([4, 5, 6]);
// [1, 2, 3, 4, 5, 6]


//? Ejercicio

// Usa el método concat en la función nonMutatingConcat para concatenar 'attach' al final de original. La función deber devolver el arreglo concatenado.


function nonMutatingConcat(original, attach) {
  // Cambia solo el código debajo de esta línea
  return original.concat(attach)

  // Cambia solo el código encima de esta línea
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);
// [1, 2, 3, 4, 5]