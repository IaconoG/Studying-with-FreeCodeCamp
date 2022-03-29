//! Monito Trocitos

// Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.


function chunkArrayInGroups(arr, size) {
  let arrLenght = arr.length
  for (let i = 0; i < Math.floor(arrLenght/size); i++) {
    arr.push(arr.splice(0, size))
  }
  if(typeof(arr[0]) !== 'object') { // Pushear los ultimos numros que no cumplen con el size
    arr.push(arr.splice(0, arr.findIndex(el => typeof(el) === 'object')))
  }
  return arr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7], 3); // [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7 ] ]

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // [ [ 0, 1, 2 ], [ 3, 4, 5 ] ]

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) // [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8 ] ]



function chunkArrayInGroups2(arr, size) {
  let newArr = []
  for (let i = 0; i < arr.length; i+= size) {
    newArr.push(arr.slice(i, i + size))
  }
  return newArr;
}

chunkArrayInGroups2(['a', 'b', 'c', 'd'], 2); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]

chunkArrayInGroups2([0, 1, 2, 3, 4, 5, 6, 7], 3); // [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7 ] ]

chunkArrayInGroups2([0, 1, 2, 3, 4, 5], 3); // [ [ 0, 1, 2 ], [ 3, 4, 5 ] ]
