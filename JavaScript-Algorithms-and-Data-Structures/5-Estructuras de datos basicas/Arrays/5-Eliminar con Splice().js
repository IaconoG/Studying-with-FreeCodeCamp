//! Elimina elementos usando splice()

// todo- A diferencia de los methodos shift() y pop(), splice() nos permite eliminar cualquier número de elementos consecutivos de cualquier parte de un arreglo.

//* splice(start, deleteCount, item1, item2) puede tomar hasta tres parametros
  //* start = Indice donde s ecomenzara a cambiar el array
    // si es mayor q arr.length, start = arr.length.
    // si es negativo, empezara es cantidae de elementos contando desde el final.
  //* deleteCount = Numero entero indicando el nuemro de elementos a eliminar del array
    // si su valor es mayor que (arr.length - start) todos los elementos desde start hasta el final se eliminan.
    // si es igual a 0 o negtivo, no se eliminara nigun elemento. Pero se debe especificar un nuevo elemento.
  //* itemN = Los elementos que se agregar al array, empezando en el indice de start
    // si no se especifica ningun elemento, splice() solamente eliminara elementos del array

  //* Valor devuelto
    // Un array que contiene los elementos eliminados.
    // Si no se ha eliminado ningun elemnto, devuelve un array vacio.


//? Ejemplo 1

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2); // [ 'not', 'so' ]

console.log(array); // ['today', 'was', 'great']

// splice() no sólo modifica el arreglo que llama, sino que también devuelve un nuevo arreglo que contiene el valor de los elementos eliminados:

//? Ejemplo 2

let array2 = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array2.splice(3, 2); // ['really', 'happy']

console.log(array2) // [ 'I', 'am', 'feeling' ]


//? Ejercicio 

// Hemos inicializado un arreglo arr. Usa splice() para eliminar elementos de arr, de forma que sólo contenga elementos que sumen el valor de 10.

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// only change code below this line
arr.splice(1, 4);
// only change code above this line
console.log(arr);

//? Otra solucion

const arr2 = [2, 4, 5, 1, 7, 5, 2, 1];

arr.splice(0, arr2.length+1, 10)
  // 0 = comienzo del splice
  // arr.length+1 = al ser mayor q arr.length elimina todos los elementos del arr
  // 10 anexamos el elemento en el array

console.log(arr2); // [10]


