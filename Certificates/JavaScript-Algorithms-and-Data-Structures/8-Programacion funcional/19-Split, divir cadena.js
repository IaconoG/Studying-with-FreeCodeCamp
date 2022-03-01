//! Divide una cadena en un arreglo utilizando el método "split"

//todo/ El método split divide una cadena (string) en un arreglo de cadenas (array)

//todo/ Se necesita un argumento para el delimitador, el cual puede ser un carácter para separar la cadena o una expresión regular.

/*
 * Si el delimitador es una espacio, se obtiene un arreglo de palabras
 * Si el delimitador es una cadena vacia, se obtiene un arreglo de cada caracter en la cadena

 */


//? Ejemplos

const str = "Hello World";

console.log(str.split(''));
// [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]

console.log(str.split(' '));
// [ 'Hello', 'World' ]


console.log(str.split(/\s/)) // Tambien se puede utilizar Regex
// [ 'Hello', 'World' ]


//? Ejercicio

/*
 * Utiliza el método split dentro de la función splitify para dividir str en un arreglo de palabras.
 * La función debe devolver un arreglo. 
 * Ten en cuenta que las palabras no siempre están separadas por espacios y que el arreglo no debe contener signos de puntuación.
 */


function splitify(str) {
  // Cambia solo el código debajo de esta línea
  return str.split(/\W/)
    //* \W/ = [^A-Za-z0-9] = atajo q NO conincide con abecedario y numeros 

  // Cambia solo el código encima de esta línea
}

splitify("Hello World,I-am code");


