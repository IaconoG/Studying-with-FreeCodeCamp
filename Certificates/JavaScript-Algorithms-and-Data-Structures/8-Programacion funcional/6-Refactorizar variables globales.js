//! Refactoriza variables globales por fuera de funciones

//todo/ Resumen visto hasta ahora

/*
 * 1. No alteres una variable u objeto: Crea nuevas variables y objeto y devuelvelos, si es necesario, desde una funcion.
    
 * 2. Declara parametros de funcion: Cualquier calculo dentro de una funcion depende solo de los argumentos pasados a la funcion y no en ningun objeto o variable global.
 */

//! Importante

let arrVar = [1,2,3]

const newArr = arrVar // Es una referencia a la variable existente y no una copia 

newArr[0] = 9

console.log(arrVar, newArr)


//? Ejercicio

// Reescribe el código para que el arreglo global bookList no sea cambiado dentro de ninguna de las funciones. 
// La función add debe agregar el bookName dado al final del arreglo pasado a esta y devolver un nuevo arreglo (lista). 
// La función remove debe eliminar el bookName dado del arreglo pasado a esta.

// Nota: ambas funciones deben devolver un arreglo y cualquier nuevo parámetro debe ser añadido antes del parámetro bookName.


//? Bien pero no me lo toma freecodecamp

// La variable global
const bookList1 = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function add(bookName, newBookList1 = [...bookList1]) {
  newBookList1.push(bookName);
  return newBookList1;
  // Cambia el código encima de esta línea
}

// Cambia el código debajo de esta línea
function remove(bookName, newBookList1 = [...bookList1]) {
  const book_index = bookList1.indexOf(bookName);
  if (book_index >= 0) {
     newBookList1.splice(book_index, 1);
     return newBookList1;

     // Cambia el código encima de esta línea
    }
}

add('hola')
remove('Disquisitiones Arithmeticae')

console.log(bookList1)


//? Otra opcion


// La variable global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea

function add(listaLibros, bookName) {
  return [...listaLibros, bookName];
  // Cambia el código encima de esta línea
}

function remove(bookName, listaLibros) {
  let newBookList = [...listaLibros] // Copiamos la lista
  const book_index = bookList.indexOf(bookName); // Buscamos el indice del nombre del libro
  if (book_index >= 0) { // Condicion de busqueda del libro
     newBookList.splice(book_index, 1); // Eliminamos el libro
     return newBookList;

     // Cambia el código encima de esta línea
    }
}

add(bookList, "A Brief History of Time")
// ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]

remove(bookList, "On The Electrodynamics of Moving Bodies")
// ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]


console.log(bookList)
// ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]