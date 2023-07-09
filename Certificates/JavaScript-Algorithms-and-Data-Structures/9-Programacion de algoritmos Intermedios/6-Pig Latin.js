//! Pig Latin (Latin de los cerdos)

/*
 * Pig Latin (latin de los cerdos) es una manera de alterar las palabras en inglés. Las normas son las siguientes:
  * Si una palabra comienza con una consonante, toma la primer consonante o grupo de consonantes, muévela al final de la palabra, y añade ay a ella.
  * Si una palabra comienza con una vocal, solo añade way al final.
 */


// Traduce la cadena proporcionada a Pig Latin. Las cadenas de entrada están garantizadas como palabras en inglés en minúsculas.



function translatePigLatin(str) {
 
	let consonantesRegex  = /^[^aeiou]+/i;  
  	// ^ = comienza con
    // [^aeiou] = grupo a comparar /  no tine que ser vocal
  	// + = 1 o mas coincidencias
    // i = obvia el echo de ser mayuscula o minuscula
  
  let consonantes = str.match(consonantesRegex); // Capturamos las consonantes
  
  return consonantes === null // comprobamos si existen las consonantes 
  	? str.concat('way') // Si no tiene consonantes concatenamos 'way' a la apalabra
  	: str.replace(consonantesRegex, '').concat(consonantes,'ay') // Si posee consonantes remplasamos las primeras con '' y luego las concatenamos al final ademas de concatenar 'ay'
  
}



translatePigLatin("california")
// debe devolver la cadena aliforniacay.

 translatePigLatin("algorithm")
// debe devolver la cadena algorithmway



// --------- LINDAAAA

function translatePigLatin2(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// test here
translatePigLatin("consonant");