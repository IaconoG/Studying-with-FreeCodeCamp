//! Buscadores guardianes

// Crea una función que recorra un arreglo arr y devuelva el primer elemento que pase un "detector de verdad".
// Esto significa que dado un elemento x, el "detector de verdad" es pasado si func(x) es true. 
// Si ningún elemento pasa la prueba. la función debería devolver undefined.


function findElement(arr, func) {
  return arr.find(func);
}

findElement([1, 2, 3, 4], num => num % 2 === 0);