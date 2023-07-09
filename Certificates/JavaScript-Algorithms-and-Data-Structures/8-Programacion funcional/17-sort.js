//! Ordena un arreglo alfabéticamente con el método sort

//todo/ El método sort ordena los elementos de un arreglo de acuerdo a la función callback.

/*
 * Por defecto, JavaScript ordena basándose en el valor "Unicode" de la cadena de caracteres, lo cual puede dar resultados inesperados
 * Se recomienda proporcionar una función callback para especificar como se deben ordenar los elementos del arreglo
 * Cuando se proporciona dicha función callback, normalmente llamada compareFunction, los elementos del arreglo se ordenan de acuerdo al valor que devuelve la función
 */

//? Ejemplo

function ascendingOrder(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);

// Esto devolvería el valor de [1, 2, 3, 4, 5].

function reverseAlpha(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(["l", "h", "z", "b", "s"]);

// Esto devolvería el valor de ['z', 's', 'l', 'h', 'b']

//? Ejerciico

/*
 * Utiliza el método sort en la función alphabeticalOrder para ordenar los elementos de arr en orden alfabético.
 * La función debe devolver el arreglo ordenado.
 */

function alphabeticalOrder(arr) {
  // Cambia solo el código debajo de esta línea

  return arr.sort( (a, b) => 
    // trabajamos con Unicode (como ascii)
    a === 0
      ? 0 // no de modifica
      : a > b 
        ? 1 // b debe ir antes q a
        : -1 // a debe ir antes q b
  )
  // Cambia solo el código encima de esta línea
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


//! Unicode es un estándar de codificación de caracteres