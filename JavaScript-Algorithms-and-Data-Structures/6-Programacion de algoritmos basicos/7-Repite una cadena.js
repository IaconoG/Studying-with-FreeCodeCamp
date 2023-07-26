//! Repite una cadena repite una cadena

// Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). 
// Devuelve una cadena vacía si num no es un número positivo. 

// Para este desafío, no utilices el método incorporado .repeat().


function repeatStringNumTimes(str, num) {
  return (num < 1) 
    ? ''
    : str + repeatStringNumTimes(str, num - 1)
}

repeatStringNumTimes('abc', 3);
