//! Crea arreglos complejos multidimensionales

//todo-  De esta manera, un arreglo puede convertirse rápidamente en una estructura de datos muy compleja, conocido como multidimensional, o arreglo anidado

//? Ejemplo

let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];

//todo- Sin embargo, todavía podemos acceder muy fácilmente a los niveles más profundos de un arreglo tan complejo con notación de corchetes

console.log(nestedArray[2][1][0][0][0]); // deepest-est?

//todo- Esto registra la cadena deepest-est?. Y ahora que sabemos dónde está ese dato, podemos restablecerlo si es necesario

estedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]); // deeper still


//? Ejercicio 

// Hemos definido una variable, myNestedArray, como un arreglo. 
// Modifica myNestedArray, utilizando cualquier combinación de cadenas, números y booleanos para los elementos de datos, de modo que tenga exactamente cinco niveles de profundidad
//  En algún lugar del tercer nivel, incluye la cadena deep, en el cuarto nivel, incluye la cadena deeper y en el quinto nivel, incluye la cadena deepest.



let myNestedArray = [
  // Cambia solo el código debajo de esta línea
  'lvl 1',                    /* myNestedArray[0]             */
  ['lvl 2'],                  /* myNestedArray[1][0]          */
  [['lvl 3', 'deep']],        /* myNestedArray[2][0][0]       */
  [[['lvl 4', 'deeper']]],    /* myNestedArray[3][0][0][0]    */
  [[[['lvl 5', 'deepest']]]]  /* myNestedArray[4][0][0][0][0] */
  // Cambia solo el código encima de esta línea
];
