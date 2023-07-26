//! Evita mutaciones y efectos secundarios utilizando programación funcional

//todo/ Uno de los principios fundamentales de la programación funcional es no cambiar las cosas. Los cambios conducen a errores.
// todo/ Es mas facil evitar errores sabiendo que las funciones no cambian nada, incluyendo los argumentos de la funcion o cualquier variable global.


/*
 * En la programacion funcional, cambiar o alterar cosas se denomina MUTACION, y el resultado es concido como EFECTO SECUNDARIO.

 * Una funcion, idealmente, debe ser una funcino PURA, lo que significa que no provoca ningun efecto secundario.
 
 */


//? Ejercicio

// Completa el codigo de la funcion incrementar para que devuelve el valor de la variable global fixedValue incrementada en uno


/*
 * Utilizar ++ en fixedValue mutario la variable.
 */

let fixedValue = 4;

function incrementada() {
  // Cambia solo el codigo debajo de esta linea
  return fixedValue + 1;
  // Cambia solo el codigo enciam de esta linea
}


console.log(fixedValue, incrementada()) // 4, 5