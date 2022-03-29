//! Devolver parte de un arreglo mediante el método slice

//todo/ El metodo slice devuelve una copia de ciertos elemtos de un arreglo.

   /*
    * Puede tomar dos arguemntos:
      * El primero da el indice de donde comenzar el corte.
      * EL segundo es el indice de donde termina e corte (no se incluye)
      * Si no se dan argumnetos, el valor predeterminado es comenzar desde el principio hasta el final. (Copiar arreglo) 
      * No muta el arreglo original, pero devulve uno nuevo
    */

//? Ejemplo

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);

// ["Dog", "Tiger"]



//? Ejercicio

// Utiliza el método slice en la función sliceArray para retornar parte del arreglo 'anim' dados los índices 'beginSlice' y 'endSlice'. La función debe devolver un arreglo.


function sliceArray(anim, beginSlice, endSlice) {
  // Cambia solo el código debajo de esta línea
  return anim.slice(beginSlice, endSlice)
  // Cambia solo el código encima de esta línea
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
// [ 'Dog', 'Tiger' ]

sliceArray(inputAnim, 0, 1);
// [ 'Cat' ]

sliceArray(inputAnim, 1, 4);
// [ 'Dog', 'Tiger', 'Zebra' ]
