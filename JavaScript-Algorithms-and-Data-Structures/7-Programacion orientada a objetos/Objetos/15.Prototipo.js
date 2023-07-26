//! Entendiendo de dónde viene el prototipo de un objeto

//todo- Así como las personas heredamos genes de nuestros padres, los objetos también heredan su prototype directamente de la función constructor que lo creó.

//? Ejermplo 
//  Por ejemplo, aquí el constructor Bird crea el objeto duck
//  duck hereda su prototype de la función constructor Bird
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");



//? Ejercicio 

// Utiliza isPrototypeOf para comprobar el prototype de beagle.



function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Cambia solo el código debajo de esta línea
Dog.prototype.isPrototypeOf(beagle)