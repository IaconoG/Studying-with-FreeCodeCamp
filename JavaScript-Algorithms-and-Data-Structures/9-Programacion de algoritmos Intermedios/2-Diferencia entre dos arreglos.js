//! Diferencia entre dos arreglos

/*
 * Compara dos arreglos y devuelve un nuevo arreglo con los elementos que sólo se encuentran en uno de los dos arreglos dados, pero no en ambos. En otras palabras, devuelve la diferencia simétrica de los dos arreglos.
 * **Nota:** Puedes devolver el arreglo con sus elementos en cualquier orden.
 */

// function diffArray(arr1, arr2) {
//   const newArr = [];
//   return arr1.filter((elem) => elem !== arr1.array.forEach(element => {
//     element
//   }));
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// function diffArray(arr1, arr2) {
//   const newArr = [];

//   arr2.array.forEach(element => {

//   });
//   return
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2) 
    // Unimos los elementos de los arrays en uno
    .filter((elem) => !arr1.includes(elem) || !arr2.includes(elem));
    // filter nos permite crear un nuevo array con los elementos que cumplan sierta condicion
    // includes determina si un array incluye determinado elemetnos (devuvelve true o false)
    // condicion:
        // devolver elemento, si arr1 NO incluye elemento 
        // o devolver elemtno, si arr2 NO incluye el elemtno
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// [4]

diffArray(
  ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
// [ 'pink wool', 'diorite' ]
