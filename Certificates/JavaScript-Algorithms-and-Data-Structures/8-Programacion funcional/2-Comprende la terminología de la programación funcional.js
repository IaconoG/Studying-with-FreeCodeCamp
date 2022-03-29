//! Comprende la terminología de la programación funcional

//todo/ primero, cubramos alguna terminología de la programación funcional:

//todo/ Callbacks son las funciones que se deslizan o pasan a otra función para decidir la invocación de esa función.

/*
  * Funciones de Primera Clase: Las funciones pueden ser asignadas a una variable, pasadas a otra funcion o devueltas desde otra funcion como cualquier otro valor normal. (En JS todas las funciones osn funciones de primera clase)

  * Funciones de Orden Superior: Son las funciones que toman una funcion como arguemtno o devuelven una funcion como valor de retorno.
  
  * 
*/



//?Ejercicio

//Prepara 27 tazas de té verde (green tea) y 13 tazas de té negro (black tea) y almacénalas en las variables tea4GreenTeamFCC y tea4BlackTeamFCC, respectivamente. Ten en cuenta que la función getTea ha sido modificada por lo que ahora recibe una función como primer argumento.
//Nota: Los datos (el número de tazas de té) son suministrados como el último argumento. Discutiremos más sobre esto en lecciones posteriores.




// Función que retorna una cadena de texto representando una taza de té verde
const prepareGreenTea = () => 'greenTea';

// Función que retorna una cadena de texto representando una taza de té negro
const prepareBlackTea = () => 'blackTea';

/*
  Dada una función (representando el tipo de té) y el número de tazas necesarias, la 
  siguiente función retorna un arreglo de cadenas de texto (cada una representando un tipo específico de té).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Cambia solo el código debajo de esta línea
const cantTeVerde = 27;
const cantTeNegro = 13;
const tea4GreenTeamFCC = getTea(prepareGreenTea, cantTeVerde);
const tea4BlackTeamFCC = getTea(prepareBlackTea, cantTeNegro);
// Cambia solo el código encima de esta línea

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);