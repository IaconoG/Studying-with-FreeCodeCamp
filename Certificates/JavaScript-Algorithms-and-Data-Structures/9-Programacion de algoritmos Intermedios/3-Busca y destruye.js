//! Busca y destruye

/*
 * Se proporcionará un arreglo inicial (el primer argumento en la función destroyer), seguido de uno o más argumentos. Elimina todos los elementos del arreglo inicial que tengan el mismo valor que estos argumentos.
 *
 * Nota: Tienes que utilizar el objeto arguments.
 */



// ...elementsToRemove = La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos como un array.
function destroyer(arr, ...elementsToRemove) {
  return arr.filter((elem) => !elementsToRemove.includes(elem));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// [1, 1]

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
// [1, 5, 1]

destroyer(["tree", "hamburger", 53], "tree", 53);
// ["hamburger"]

destroyer(
  [
    "possum",
    "trollo",
    12,
    "safari",
    "hotdog",
    92,
    65,
    "grandma",
    "bugati",
    "trojan",
    "yacht",
  ],
  "yacht",
  "possum",
  "trollo",
  "safari",
  "hotdog",
  "grandma",
  "bugati",
  "trojan"
);

// [12,92,65]
