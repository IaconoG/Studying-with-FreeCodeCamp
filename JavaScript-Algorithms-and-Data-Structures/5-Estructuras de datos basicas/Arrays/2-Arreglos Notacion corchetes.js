//! Accede a los contenidos de un arreglo utilizando la notación de corchetes

// La principal característica de cualquier estructura de datos es, por supuesto, la habilidad no solo de guardar datos, sino también de ser capaz de recuperar esos datos cuando le es requerid


//? Ejemplo 1
// Cuando definimos un arreglo simple como el que se ve a continuación, hay 3 elementos en él:

let ourArray = ["a", "b", "c"];

// todo- En un arreglo, cada elemento tiene un índice. Este índice funciona como la posición de ese elemento en el arreglo y es como puedes referenciarlo 
// todo- Los arreglos en JavaScript son indexados en base cero.


let ourVariable = ourArray[0]; // 'a'
// Ahora ourVariable tiene el valor de a.


// Además de acceder al valor asociado con un índice, también puedes establecer un índice a un valor usando la misma notación:

ourArray[1] = 'not b anymore'; // ["a", "not b anymore", "c"]



//? Ejercicio 

// Para completar este desafío, establece la segunda posición (índice 1) de myArray a cualquier cosa que quieras, además de la letra b.

let myArray = ["a", "b", "c", "d"];
// Cambia solo el código debajo de esta línea
myArray[1]=true
// Cambia solo el código encima de esta línea
console.log(myArray);