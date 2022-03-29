//! Dónde pertenezco

// Devuelve el índice mas bajo en el que un valor (segundo argumento) debe ser insertado en un arreglo (primer argumento) una vez que éste haya sido ordenado. 
// El valor devuelto debe ser un número.


// Buscamos el indice de donde iria el elemento 
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b) // Ordenamos de menor a mayor el array (por si no esta ordenado)
  return (arr.findIndex((el) => el >= num) === -1)
    ? arr.length
    : arr.findIndex((el) => el >= num)
}
getIndexToIns([10, 20, 30, 40, 50], 35); // 3 


// Busamos el indice con el elemento dentor del array
function getIndexToIns2(arr, num) {
  return arr
    .concat(num) // Ingresamo el item al array
    .sort((a, b) => a - b) // Ordenamos el array
    .indexOf(num); // Buscamos y devolvemos el indice del item
}

getIndexToIns2([1, 3, 4], 2); // 1


// Damos la longitud de un unevo elemento que posee de ultimo item el elemento num

function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length
    // .filter() = devulve un nuevo array coin todos los elementos que cumplan la condicion
      // num > val = si el numero es menor a val entra al nuevo array
        //  [1] = el nuevo array solo posee un elemento
      // arr.length = nos otorga el tamanio del array, en este caso el valor devuelto es el indice donde iria num
}

getIndexToIns([1, 3, 4], 2); // 1