//! Introducción a la currificación y a la aplicación de funciones parciales

//todo/ La 'aridad' de una funcion es el numero de argumentos que requiere.

//todo/ 'Currificar' una funcion significa convertir una funcion de N aridades a N funcioens de 1 aridad.

//* Osea, restrgucturar una funcion, por lo que toma un arguemtno, luego devolvera otra funcion que tome el siguiente y asi sucesivamente.


//? Ejemplo

function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)

// curried(1)(2) devolverá 3.

//* Esto es util si no se puede proporcionar todos los argumetno a una funcio al mismo tiempo.
//* Se puede guardar la llamada a cada funcion en una variable, la cual mantendra la referencia de la funcion devuelta que toma el siguietne argumento cuando este disponible.

//? Ejemplo

const funcForY = curried(1);
console.log(funcForY(2)); // 3


function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13



//? Ejercicio

//* Completa el cuerpo de la función add para que use currificación para añadir parámetros x, y, y z.

function add(x) {
  // Cambia solo el código debajo de esta línea
	return function(y) {
    return function(z) {
      return x + y + z
    }
  }
  // Cambia solo el código encima de esta línea
}

add(10)(20)(30); // 60


// ------- short 


function add(x) {
  // Cambia solo el código debajo de esta línea
	return (y) => (z) => x + y + z
    
  // Cambia solo el código encima de esta línea
}

add(10)(20)(30); // 60


