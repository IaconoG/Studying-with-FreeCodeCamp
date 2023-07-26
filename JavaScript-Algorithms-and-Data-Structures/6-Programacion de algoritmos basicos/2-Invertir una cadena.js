//! Invierte una cadena

// Invierte la cadena proporcionada.

// Es posible que necesites convertir la cadena en un arreglo antes de poder invertirla.

// Tu resultado debe ser una cadena.


function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString('hello')