//! Remueve elementos de un arreglo usando slice en lugar de splice

//todo/ El metodo splice sirve para eliminar elemetno y coneservar el resto del arreglo.

/*
 * Toma argumentos dos arguemtnos
  * 1. EL indice, el cualdo indica de donde comenzar a eliminar elementos.
  * 2. La cantidad, de elementos para eliminar.
  * 
  * Si no se proporciona el segundo arguemtno, el valor predeterminado es eliminar elementos hasta el final.
  * El metodo splice muta el arrelgo original en el que se llama.
 */

//? Ejemplo

// Aquí splice devluelve la "string" London y la elimina del arreglo cities. cities tendrá el valor de ["Chicago", "Delhi", "Islamabad", "Berlin"]

const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); // [ 'London' ]

// cities = ["Chicago", "Delhi", "Islamabad", "Berlin"]


//* Usar el método slice en lugar de splice ayuda a prevenir cualquier efecto colateral de mutar un arreglo.



//? Ejercicio

// Reescribe la función nonMutatingSplice usando slice en lugar de splice. Debe limitar el arreglo proporcionado cities a una longitud de 3 y devolver un nuevo arreglo con solo los primeros tres elementos.

// No modifiques el arreglo original proporcionado en la función.


function nonMutatingSplice(cities) {
  // Cambia solo el código debajo de esta línea
  return cities.slice(0, 3) 
  /* return cities.splice(3); */
  // Cambia solo el código encima de esta línea
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

nonMutatingSplice(inputCities);
// [ 'Chicago', 'Delhi', 'Islamabad' ]

console.log(inputCities)
// [ 'Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin' ]