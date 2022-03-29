//! Devuleve los numeros mayores en los arreglos

// Devuelve un arreglo que consista en el mayor número de cada sub-arreglo proporcionado. Por simplicidad, el arreglo dado contendrá exactamente 4 sub-arreglos.

// Recuerda, puedes iterar a través de un arreglo utilizando un simple bucle for, y acceder a cada miembro del arreglo con la sintaxis arr[i].


function largestOfFour(arr) {
  return arr.map((el) => {
    return Math.max(...el)
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// [ 5, 27, 39, 1001 ]



// Devuleve el numero mas grande entre todos los subs arreglos
function biggestNumber(arr) {
  return Math.max(...arr.map((el) => { // Math.max([5, 27, 39, 1001])
    return Math.max(...el) // Math.max([4, 5, 1, 3])
  }));
}

biggestNumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// 1001
