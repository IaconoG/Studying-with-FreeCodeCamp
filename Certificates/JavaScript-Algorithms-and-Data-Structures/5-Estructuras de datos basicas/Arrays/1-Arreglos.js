//! Utiliza un arreglo para almacenar una colección de datos

// Arreglo Unidimensional, significa que sólo tiene un nivel, o que no tiene otros arreglos anidados dentro de él.
// Observa que el siguiente ejemplo contiene booleanos, cadenas y números, entre otros tipos de datos válidos de JavaScript:

//? Ejemplo

let simpleArray = ["one", 2, "three", true, false, undefined, null];
console.log(simpleArray.length); // 7


// Todos los arreglos tienen una propiedad de longitud, que como se muestra arriba, se puede acceder muy fácilmente con la sintaxis Array.length
// Todos los arreglos son capaces de almacenar objetos complejos


// Arreglo Multidemensional, significa que contiene mas de un nivle, y que contiene otros arreglos anidados dento de el.

//? Ejemplo 2

let complexArray = [
  [
    {
      one: 1,
      two: 2,
    },
    {
      three: 3,
      four: 4,
    },
  ],
  [
    {
      a: "a",
      b: "b",
    },
  ],
];



//? Ejercicio

// Hemos definido una variable llamada yourArray. Completa la sentencia asignando un arreglo de al menos 5 elementos de longitud a la variable yourArray. Tu arreglo debe contener al menos una cadena (string), un número (number) y un booleano (boolean).

let yourArray = ['string', 0, true, {persona: 1, nombre: 'gian'}, 'a']; // Cambia esta línea