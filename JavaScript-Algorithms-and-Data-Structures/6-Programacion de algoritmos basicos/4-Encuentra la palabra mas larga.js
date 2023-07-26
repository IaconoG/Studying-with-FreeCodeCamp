//! Encuentra la palabra más larga en una cadena

// Devuelve la longitud de la palabra más larga en la oración proporcionada.

// Tu respuesta debe ser un número.

function findLongestWordLength(str) {
  return Math.max(...str.split(' ').map((el) => el.length));
    /*
     * Math.max() = devuelve el mayor de 0 o mas numeros
     * ...str = expandiomos el array
     * .split(' ') = separamos por palabras el string y lo convertirnos a un array
     * .map() = mapeamos el array modificando cada uno de sus elemenos por la longitud de los mismos
     * el.length = nos permite saber la longitud del elemento del array
     */ 
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");