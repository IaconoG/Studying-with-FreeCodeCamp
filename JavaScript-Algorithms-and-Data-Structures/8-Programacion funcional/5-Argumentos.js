//! Pasa argumentos para evitar la dependencia externa en una función

//todo/ Otro principio de programacion funcional es declarar siempre sus dependencias de forma explicita. 

//Esto significa si un funcion depende de que una variable u objeto este presente, despues pasa esa variable u objeto directamente a la funcion como arguemtneo

/*
 * Consecuencias positivas:
  * La funcion es mas facil de probar, se sabe exactamente lo que necesita, y no  dependera de nada mas en tu programa.
    / Esto nos permite, saber que se puede o no se puede cambiar y, encontrar las posibles trampas o errores.

  * La funcion siempre producira el mismo resultado para el mismo conjunto de entradas, sin importar que parte del codigo la ejecute.
  
  *   
 */


//? Ejercicio

// Actualicemos la función incrementer para declarar claramente sus dependencias.

// Escribe la función incrementer para que reciba un argumento, y luego devuelva un resultado después de aumentar el valor en uno.


// La variable global
let fixedValue = 4;

// Cambia solo el código debajo de esta línea
function incrementer(value) {
  return value + 1 
  // Cambia solo el código encima de esta línea
}

console.log(fixedValue, incrementer(fixedValue))