//! Comprobador de palíndromos

/*
 * Devuelve true si la cadena proporcionada es un palíndromo. De lo contrario, devuelve false.
 *
 * Un palíndromo es una palabra o frase que se escribe de la misma manera hacia adelante y hacia atrás, ignorando la puntuación, mayúsculas, minúsculas y espaciado.
 *
 * Nota: Tendrás que eliminar todos los caracteres no alfanuméricos (puntuación, espacios y símbolos) y convertir todo en mayúsculas o minúsculas para comprobar si hay palíndromos.
 *
 * Pasaremos cadenas con formatos variables, como racecar, RaceCar y race CAR entre otros.
 *
 * También pasaremos cadenas con símbolos especiales, como 2A3*3a2, 2A3 3a2 y 2_A3*3#A2.
 * 
 */



function palindrome(str) {
  const strCorrect = str.replace(/[^\w]|_/g,'').toLowerCase();
  	// .replace = remplazamos los elemtnos que no sean alfanumericos
  		// [] = juego de caracteres, permite coincidir con cualquiera de los caractreres incluidos
  		// ^\w = todo caracter que no esa alfanumerico
  		// |_ = o guion bajo
  	// .toLoweCase = nos permite poner en minuscula el string
  const strReverse = strCorrect.split('').reverse().join('')
  	// .split = convertimos el caracter en un array lleno de caracteres
  	// .reverse = damos vuelta el array
    // .join = unimos todos los elementos del array en un string
  
  return strCorrect.split(' ').every(str => str === strReverse);
  	// .every = comprobamos si el elemento del array cumple con la condicion
  	
}
palindrome("eye") // debe devolver true.

palindrome("_eye") // debe devolver true.

palindrome("race car") // debe devolver true.

palindrome("not a palindrome") // debe devolver false.