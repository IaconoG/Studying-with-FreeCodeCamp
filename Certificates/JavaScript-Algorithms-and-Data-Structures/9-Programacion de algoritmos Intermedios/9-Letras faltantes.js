//! Letras faltantes

/*
 * Encuentra la letra que falta en la siguiente cadena de letras y devuélvela.
 *
 * Si todas las letras están presentes en la cadena, devuelve undefined.
 */

function fearNotLetter(str) {
  // Creamos un string con las letras del abcedearios en orden
  let abc = "abcdefghijklmnopqrstuvwxyz";
  // Obtenmos el inicio del abecedario a traves de la primer letra del str
  let inicio = abc.indexOf(str[0]);
  // Obtenemos el final del abecedario a traves de la ultima letra del str
  let cantLetras = str.length;
  // Realizamos un slice desde inicio a cantLetras, para optener una parte del abecedario para comparar con str
  abc = abc.slice(inicio).slice(0, cantLetras);

  if (str.includes(abc)) {
    // si la str incluye abc significa que todas las letras estan presentes en la cadena
    return undefined;
  } else {
    // buscamos la letra erronea dentro de str comparando con abc, el cual posee la cadeana correcto
    str.split("").forEach((el) => {
      // si las letras entre str y abc coinciden entones vamos descartandolas hasta encontrar la letra erronea
      if (el === abc[0]) abc = abc.slice(1);
    });
    // realizamos un slice a 'abc' para retornar solo la primera letra, la cual es la letra a modificar de la cadena
    return abc.slice(0, 1);
  }
}

fearNotLetter("abce");
// debe devolver la cadena d.

fearNotLetter("bcdf");
// debe devolver la cadena e.

fearNotLetter("abcdefghjklmno");
// debe devolver la cadena i.

fearNotLetter("abcdefghijklmnopqrstuvwxyz");
// debe devolver undefined.




//todo: OTRA FORMA DE HACERLO



function fearNotLetter(str) {
	let inicioCadenaABC = str.charCodeAt(0);
	let letraErronea = undefined;
  
  str
  	.split('')
  	.forEach(letra => {
    	(letra.charCodeAt(0) === inicioCadenaABC) 
    		? inicioCadenaABC++ // Siguiente letra del abcedario
      	: letraErronea = String.fromCharCode(inicioCadenaABC); // Encontramos la letra erronea
  	});
    
	return letraErronea
}



fearNotLetter("abce")
// debe devolver la cadena d.

fearNotLetter("bcdf")
// debe devolver la cadena e.

fearNotLetter("abcdefghjklmno")
// debe devolver la cadena i.

fearNotLetter("abcdefghijklmnopqrstuvwxyz")
// debe devolver undefined.