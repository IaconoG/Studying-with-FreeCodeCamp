//! Déjalo caer

/*
 * Dado el arreglo arr, itera y elimina cada elemento comenzando desde el primer elemento (el índice 0) hasta que la función func devuelva true cuando el elemento iterado se pasa a través de él.
 *
 * Luego devuelve el resto del arreglo una vez que se cumpla la condición, de lo contrario, arr debe devolverse como un arreglo vacío.
 */

function dropElements(arr, func) {
  while (!func(arr[0])) {
    arr.splice(0, 1);
  }

  return arr;
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});

dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});
// debe devolver [3, 4]

dropElements([0, 1, 0, 1], function (n) {
  return n === 1;
});
// debe devolver [1, 0, 1]
