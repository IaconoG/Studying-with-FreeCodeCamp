//! Itera a través de todos los elementos de un arreglo utilizando bucles "for"

//todo- JavaScript ofrece varios métodos incorporados que iteran sobre arreglos de formas ligeramente diferentes para conseguir distintos resultados

//todo- every(), forEach(), map(), etc

//todo- la técnica que es más flexible y nos ofrece la mayor cantidad de control es un simple bucle for.


//? Ejercicio

// Hemos definido una función, filteredArray, que toma arr, un arreglo anidado, y elem como argumentos, y devuelve un nuevo arreglo. 

// elem representa un elemento que puede o no estar presente en uno o más de los arreglos anidados dentro de arr

// Modifica la función, usando un bucle for, para que devuelva una versión filtrada del arreglo pasado de forma que cualquier arreglo anidado dentro de arr que contenga elem haya sido eliminado.


function filteredArray(arr, elem) {
  let newArr = [];
  // Cambia solo el código debajo de esta línea
  for (let i = 0; i > arr.length; i++){
    console.log('ghola')
    for (let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === elem) {
        arr.splice(i,1)
        break;
      }
    }
  }
  newArr = arr;
  // Cambia solo el código encima de esta línea
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));