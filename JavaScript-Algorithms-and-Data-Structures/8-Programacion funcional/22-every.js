//! Usa el método "every" para comprobar que cada elemento de un arreglo atienda un criterio

//todo/ El método every funciona con arreglos para comprobar si every element pasa una prueba en particular. 

//todo/ Devuelve un valor booleano - true si todos los valores cumplen los criterios, false si no.


//? Ejemplo

const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});

// devuleve false, debido a que existe el elemento de valor 11 



//? Ejercio

/*
 * Utiliza el método every dentro de la función checkPositive para comprobar si cada elemento en arr es positivo.
 * La función debe devolver un valor booleano.
 */


function checkPositive(arr) {
  // Cambia solo el código debajo de esta línea
	return arr.every((elem) => elem >= 0)

  // Cambia solo el código encima de esta línea
}

checkPositive([1, 2, 3, -4, 5]);