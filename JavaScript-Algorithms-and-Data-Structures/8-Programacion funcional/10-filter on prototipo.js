//! Implementa el método filter en un prototipo


//? Ejercicio

// Escribe tu propio Array.prototype.myFilter(), que debe comportarse exactamente como Array.prototype.filter(). 
// No debes utilizar el método incorporado filter. 
// Se puede acceder a la instancia Array en el método myFilter usando this.


// La variable global
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Cambia solo el código debajo de esta línea
  /*
   * callback(item) nos devuelve la resolucion de (item % 2 === 1), otorgandonos un booleano
   * solo si la condicion se cumple (true) pusheamos el elemento en el nuevo array
  */
  const newArray = [];
  this.forEach(item => {
    if (callback(item) === true) newArray.push(item)
  })

  // Cambia solo el código encima de esta línea
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s)