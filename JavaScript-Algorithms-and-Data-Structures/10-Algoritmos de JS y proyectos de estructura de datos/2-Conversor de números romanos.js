//! Conversor de números romanos

//* Convierte el número proporcionado en un número romano.

//* Todos los números romanos deben proporcionarse en mayusculas.


function convertToRoman(num) {
  const numerosRomanos = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  }
  if (Object.keys(numerosRomanos).some(key => key == num)) {
    return numerosRomanos[num]
  }
  if (num >= 4000) { return 'A partir del numero 4000 la forma de representar las cifras del sistema se debe añadir una barra que indica por encima de las letras que indica una multiplicacion por mil.'}
  return JSON.stringify(num).split('').reverse().map((num, indice) => {
    let numeroRomano = [];
    num = JSON.parse(num);    
    if (indice !== 0) num *= Math.pow(10, indice);
    while( num !== 0 ) { 
      if (num < 0 ) {
        	numeroRomano.unshift( numerosRomanos[(1 * Math.pow(10, indice))] )
        	num += 1 * Math.pow(10, indice)
      } else if ( num < (4 * Math.pow(10, indice)) ) {
        	numeroRomano.push( numerosRomanos[(1 * Math.pow(10, indice))] )
        	num -= 1 * Math.pow(10, indice);
      } else if ( num < (9 * Math.pow(10, indice)) ) {
        	numeroRomano.push( numerosRomanos[(5 * Math.pow(10, indice))] )  	
        	num -= 5 * Math.pow(10, indice);
      } else {
    			numeroRomano.push( numerosRomanos[(10 * Math.pow(10, indice))] )  	
        	num -= 10 * Math.pow(10, indice);
  	  }
    }
    return numeroRomano.join('')
  }).reverse().join('')
};
 
 
convertToRoman(4000) // debe devolver la cadena V.                                                                                                              
convertToRoman(83) // debe devolver la cadena LXXXIII

convertToRoman(99) // debe devolver la cadena XCIX

convertToRoman(794) // 794 debe devolver la cadena DCCXCVIII

convertToRoman(3999) // debe devolver la cadena MMMCMXCIX