//! Usa herencia para que no te repitas

//todo- La razón por la que el código repetido es un problema es porque cualquier tipo de cambio requiere corregir código en múltiples lugares.

Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//* El motodo descrbe se reite en dos lugares

function Animal() { };
Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//* Dado que Animal incluye el método describe, puedes eliminarlo de Bird y Dog:

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};


//? Ejercicio

// El método eat se repite tanto en Cat como Bear. Edita el código utilizando el principio DRY, moviendo el método eat al supertype Animal.


function Cat(name) { 
  this.name = name;
}
Cat.prototype = { // Subtype / Hijo
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}
Bear.prototype = { // Subtype / Hijo
  constructor: Bear,
};

function Animal() { }

Animal.prototype = { // Supertype / Padre
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};