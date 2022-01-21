//! Hereda comportamientos de un supertipo (supertype)

//todo- Herncia permite reutilizar los metodos del Supertype dentro de los Subtypes

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

//* Ya conoces una forma de crear una instancia de Animal utilizando el operador new

let animal = new Animal();

//* Hay algunas desventajas cuando se utiliza esta sintaxis para la herencia.

let animal2 = Object.create(Animal.prototype);

// Object.create(obj) crea un objeto nuevo y establece obj como el prototype del nuevo objet

animal.eat();
animal instanceof Animal; // true


//? Ejercicio

// Utiliza Object.create para crear dos instancias de Animal llamadas duck y beagle.

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Cambia solo el código debajo de esta línea

let duck = Object.create(Animal.prototype); // Cambia esta línea
let beagle = Object.create(Animal.prototype); // Cambia esta línea