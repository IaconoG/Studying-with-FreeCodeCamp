//! Aprende sobre programacion funcinal

//todo/ La programacion funcnoial es un estilo de programacion donde las soluciones son simples, funciones aisladas, sin ningun efecto secundario fuera del ambito de la funcion.

//todo/ INPUT -> PROCCES -> OUTPUT

/*
 * La programaicon funcional se refiere a
 *  1. Funciones aisladas: Sin dependencia alguna del estado del programa, el cual incluye variables globales sujetas a cambios.
 
 *  2. Funciones puras: Una misma entrada siempre da la misma salida. 
 
 *  3. Funciones con efectos secundarios limitados: Cualquier cambio o mutacion en el estado del programa fuera de la funcion son cuidadosamente controlados.
*/


//? Ejercico

// En el editor de código, las funciones prepareTea y getTea ya están definidas. Llama a la función getTea para obtener 40 tazas de té para el equipo y guárdalas en la variable tea4TeamFCC.


// Función que retorna una cadena de texto representando una taza de té verde
const prepareTea = () => 'greenTea';

/*
Dada una función (representando el tipo de té) y el número de tazas necesarias, la 
    siguiente función retorna un arreglo de cadenas de texto (cada una representando un tipo específico de té).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Cambia solo el código debajo de esta línea
const tazasAPreparar = 40;
const tea4TeamFCC = getTea(tazasAPreparar);
// Cambia solo el código encima de esta línea