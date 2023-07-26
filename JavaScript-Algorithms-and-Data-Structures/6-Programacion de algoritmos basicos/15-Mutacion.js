//! Mutaciones

// Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.

function mutation(arr) {
  return arr[1]
    .toLowerCase() // Convierte todas las letras en minuscula
    .split('') // Divide un string en un array (letra por letra)
    .every((letra) => { // Determina si todos los items del array satisfacen una condicion
      return arr[0] // Devuelve booleano dependiendo si se cumple la condicion
        .toLowerCase() 
        .indexOf(letra) // Retorna el primer indice en el que se puede encontrar el elemento  
        !== -1; // Si indexOf retorna -1 (no encontro la letra) evert no se cumple
    });
}

mutation(['heLlo', 'Hey']);