//! Unión ordenada


/*
 * Escribe una función que tome dos o más arreglos y devuelve un nuevo arreglo de valores únicos manteniendo el orden original de los arreglos proporcionados.
 *
 * En otras palabras, todos los valores presentes de todos los arreglos deben incluirse en su orden original, pero sin duplicados en el arreglo final.
 * 
 * Los números únicos deben ser ordenados según su orden original, pero el arreglo final no debe ordenarse según el orden numérico.
 *
 * Revisa las pruebas de afirmación para ver ejemplos.
 */

function uniteUnique(...arr) {
  return [...new Set([].concat(...arr))];
   // new Set = el objeto set permite almacenar valores unicos de cualquier tipo (elimina los numeros repetidos)
  // .concat() = nos permite unir dos o mas arrays
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) 
// debe devolver [1, 3, 2, 5, 4]

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
// debe devolver [1, 2, 3, 5, 4, 6, 7, 8].

uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) 
// debe devolver [1, 3, 2, 5, 4].


////////////////////////


function uniteUnique(...arr) {
  let a = [] // Creamos un nuevo array que contenga la union de sub-arrays del parametro
  return Array.from(new Set(a.concat(...arr)));
  	// Array.from = permite crear una nueva instancia de Array a partir de un objeto iterable
    // new Set = el objeto set permite almacenar valores unicos de cualquier tipo (elimina los numeros repetidos)
    // .concat() = nos permite unir dos o mas arrays
}


////////////////////////


function uniteUnique(...arr) {
  return [...new Set(arr.flat())]
    // El método flat() crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.
}


////////////////////////



const uniteUnique = (...arr) => [...new Set(arr.flat())]