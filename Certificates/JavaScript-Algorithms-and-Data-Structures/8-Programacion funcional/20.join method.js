//! Combina un arreglo en una cadena utilizando el método "join"

//todo/ El método join se utiliza para unir los elementos de un arreglo creando una cadena de texto. 

//todo/ Se necesita un argumento para especificar el delimitador a utilizar para separar los elementos del arreglo en la cadena.


//? Ejermplo

const arr = ['Hello', "World"];
const str = arr.join(' ');
// 'Hello World'



//? Ejercicio

/*
 * Utiliza el método join (entre otros) dentro de la función sentensify para hacer una oración a partir de las palabras en la cadena str. 
 * La función debe devolver una cadena. 
 * Por ejemplo, I-like-Star-Wars se convertiría en I like Star Wars. 
 * Para este desafío, no utilices el método replace.
 */


function sentensify(str) {
  // Cambia solo el código debajo de esta línea
	return str.split(/\W/).join(' ');
    //* \W/ = [^A-Za-z0-9] = atajo q NO conincide con abecedario y numeros 


  // Cambia solo el código encima de esta línea
}

sentensify("May-the-force-be-with-you");