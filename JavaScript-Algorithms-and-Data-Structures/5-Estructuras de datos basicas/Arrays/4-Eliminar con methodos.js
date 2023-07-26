//! Elimina elementos de un arreglo con pop() y shift()

// todo- pop() elimina un elemento al final de un arreglo
// todo- shift() elimina un elemento al principio.

//* Ninguno de los dos métodos toma parámetros, y cada uno sólo permite modificar un arreglo por un solo elemento a la vez.


//?Ejemplo

let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop(); // ['whats up?', 'hello']

greetings.shift();// ['hello']

// También podemos devolver el valor del elemento eliminado con cualquiera de los dos métodos

let popped = greetings.pop() 
// greetings = []
// popped = 'hello'


//? Ejercicio

// Hemos definido una función, popShift, el cual toma un arreglo como argumento y devuelve un nuevo arreglo. Modifica la función, usando pop() y shift(), para eliminar el primer y el último elemento del arreglo, y asignar los elementos eliminados a sus correspondientes variables, de modo que el arreglo que se devuelva contenga sus valores.


function popShift(arr) {
  let popped = arr.pop(); // Cambia esta línea
  let shifted = arr.shift()// Cambia esta línea
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete'])); //  ['challenge', 'complete' ]