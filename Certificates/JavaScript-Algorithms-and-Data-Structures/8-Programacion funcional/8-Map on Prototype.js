//! Implementa map en un prototipo

//todo/ Implemetar 'Array.prototype.map()' o 'map()', el metodo devuelve un arreglo de la misma longitud que el arreglo  dentro del que fue llamado.
  //* Esto tampoco altera el arreglo original, siempre y cuando que la funcion callback no lo haga

//todo/ MAP es una funcion pura, y su salida depende unicamente de sus entradas.


//? Ejercicio 

// Escribe tu propio Array.prororype.myMap(), el cual debe comportarse exactamente como Array.prototype.map().
  // No debes utilizarel metodo incorporado map.
  // Se puede acceder a la instancia de Array en el metodo myMap usando this.


  // ------ Resolucion con For

// La variable global
const s = [23, 65, 98, 5];

// Cremos un metodo
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Cambia solo el código debajo de esta línea
  for (let i=0; i < this.length; i++) { // this = instancia del array
		newArray.push(callback(this[i]))    
  }
  // Cambia solo el código encima de esta línea
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s)


array.forEach(element => {
  
});


  // ------ Resolucion con ForEach

// La variable global
const s2 = [23, 65, 98, 5];

// Cremos un metodo
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Cambia solo el código debajo de esta línea
  this.forEach(element => {
    newArray.push(callback(element))
  })
  // Cambia solo el código encima de esta línea
  return newArray;
};

const new_s2 = s2.myMap(function(item) {
  return item * 2;
});

console.log(new_s2)
