//! Cifrado César

/*
 * Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como cifrado por desplazamiento. En un cifrado por desplazamiento los significados de las letras se desplazan por una cantidad determinada.
 *
 * Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados por 13 lugares. Así que A ↔ N, B ↔ O y así sucesivamente.
 *
 * Escribe una función que reciba una cadena codificada en ROT13 como entrada y devuelva una cadena decodificada.
 *
 * Todas las letras estarán en mayúsculas. No transformes ningún carácter no alfabético (espacios, puntuación, por ejemplo), pero si transmítelos.
 */

function rot13(str) {
  const cifradoROT13 = 13; // Constante de desplazamietno de letra
  const expReg_EsLetraONumero = /(?=\w)(?=[^_])/ // Expresion regular que nos devuleve si y solo si es alfanumerico pero no un guion bajo
  	// (?=\w) = grupo de captura que conicide si y solo si es un alfanumerico
  	// (?=[^_]) = grupo de captuara que concide si y solo si no es un guio bajo
  
  return str
    .split("") // Obtenemos una array de caracteres
    .map((char) => { // Comprobamos y modificamos cada uno de los caracteres
      if (expReg_EsLetraONumero.test(char)) { // Si el caracter es un alfanumerico y no es ' _ ' se modifica
        char = char.charCodeAt(0); // Convertimos el caracter a su representacion en codigo ASCII
        return char < 78 
          ? String.fromCharCode(char + cifradoROT13) // Si el caracter es menor a N sumar el desplazamiento
          : String.fromCharCode(char - cifradoROT13); // Si el caracter es mayor a N restar el desplazamiento
      }
      return char;
    })
    .join(""); // Unimos todos los caracteres del array
}
rot13("SERR PBQR PNZC"); // debe decodificarse en la cadena FREE CODE CAMP

rot13("SERR YBIR?"); // debe decodificarse en la cadena FREE LOVE?

rot13("SERR CVMMN!"); // debe decodificarse en la cadena FREE PIZZA!
