//! Aplanadora

//* Aplana un arreglo anidado. Debes tener en cuenta los diferentes niveles de anidación.

//!!!!!! NO SE PUEDE USAR FLAT O FLATMAP

// Forma facil
function steamrollArray(arr) {
  typeof arr[0];
  return arr.flat(arr.reduce((contador) => contador + 1, 0));
}

function steamrollArray(arr) {
  arr = [].concat(...arr);
  // ...arr = el spread operator, nos permite expandir los elementos iterables que contenga el arr
  // [].concat = concatenamos el nuevo array semi aplanado en un nuevo array
  // este array semi-aplanado lo utilizamos para superponer el valor del arr pasado por parametro
  return arr.some(Array.isArray) ? steamrollArray(arr) : arr;
  // Por ulitmo queda verificar que no quede algun elemento contenga mas de 1 dimension en su elemento
  // Array.isArray =  determina si ele valor pasado es un array
  // si es verdadero: utilizamos la recursividad llamando denuevo a la funcion pasando como parametro el array semi-aplanado, y devolvemos valor
  // si es falso: significa que no queda elementos con mas de una diemnsion en el array, por lo tanto devolvemos el valor de arr
}

// Forma aaaaaaaaaaaaaaaaaaa

steamrollArray([1, [2], [3, [[4]]]]); // debe devolver [1, 2, 3, 4].

steamrollArray([[["a"]], [["b"]]]); // debe devolver ["a", "b"]

steamrollArray([1, {}, [3, [[4]]]]); // debe devolver [1, {}, 3, 4].
