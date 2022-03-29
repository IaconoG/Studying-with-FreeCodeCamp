//! Comprueba la presencia de un elemento con indexOf()

// Ya que los arreglos pueden mutarse, no se puede garantizar dónde estará un dato concreto en un arreglo determinado, o si ese elemento sigue existiendo.
//todo- El metodo indexOf(), que nos permite comprobar rápida y fácilmente la presencia de un elemento en un arreglo

//* indexOf() toma un elemento como parámetro, y cuando lo llama, devuelve:
  //* La posición, o índice, de ese elemento
  //* O -1 si el elemento no existe en el arreglo.

//* Utiliza dos parametros 
  //* searchElement = Elemento a encontrar en el array.
  //* fromIndex (Optional) = Indica el índice por el que se comienza la búsqueda. 
    // Por defecto es 0, por lo que se busca en todo el array. 
    // Si el índice es mayor o igual a la longitud del array, devuelve -1, ya que no se buscaría en el array. 
    // Si el valor es negativo, se toma restando posiciones desde el final del array. 

  
//?Ejemplo 

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // -1
fruits.indexOf('oranges'); // 2
fruits.indexOf('pears'); // 1


//? Ejercicio

// Hemos definido una función, quickCheck, que toma un arreglo y un elemento como argumentos.
// Modifica la función usando indexOf() para que devuelva true si el elemento pasado existe en el arreglo, y false si no existe.


function quickCheck(arr, elem) {
  // Cambia solo el código debajo de esta línea
  return (arr.indexOf(elem) !== -1)
    // if arr.indexOf(elem) === -1 return false
    // arr.indexOf(elem) !=== - 1 return true

  // Cambia solo el código encima de esta línea
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


