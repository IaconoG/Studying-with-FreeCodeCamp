//! Devuelve un arreglo ordenado sin cambiar el arreglo original

//todo/ Un efecto secundario del método sort es que cambia el orden de los elementos en el arreglo original. En otras palabras, muta el arreglo en su sitio. 

//todo/ Una forma de evitar esto es concatenar primero un arreglo vacío al que está siendo ordenado (recuerda que slice y concat devuelven un nuevo arreglo), luego ejecutar el método sort.


let arr = [1,3,2]

console.log(arr) // [1,3,2]

// Concatemas el array en uno nuevo vacio para poder trabajarlo con sort y q el array origianl no sea modificado.
let newArr = [].concat(arr).sort() 

console.log(newArr) // [1,2,3]

console.log(arr) // [1,2,3]

// De esta maner el sort no nos modifica el array original



//? Ejercicio 

// Utiliza el método sort en la función nonMutatingSort para ordenar los elementos de un arreglo en orden 'ascendente'. La función debe devolver un nuevo arreglo y no mutar la variable globalArray.


const globalArray = [5, 6, 3, 2, 9, 15];

function nonMutatingSort(arr) {
  // Cambia solo el código debajo de esta línea
  return [].concat(arr).sort((a, b) => a - b)

  // Cambia solo el código encima de esta línea
}

nonMutatingSort(globalArray);
// [ 2, 3, 5, 6, 9, 15 ]