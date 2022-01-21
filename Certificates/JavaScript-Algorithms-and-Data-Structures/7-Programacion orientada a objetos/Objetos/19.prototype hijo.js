//! Establece el prototipo de hijo para una instancia del padre

// Establecer el prototipo prototype del subtipo (o hijo) —en este caso, Bird— para ser una instancia de Animal.

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() {}


Bird.prototype = Object.create(Animal.prototype);

// El prototipo prototype es como la "receta" para crear un objeto. La receta de Bird ahora incluye todos los "ingredientes" clave de Animal

let duck = new Bird("Donald");
duck.eat();

// duck hereda todas las propiedades de Animal, incluyendo el método eat.


//? Ejercicio

// Modifica el código para que las instancias de Dog hereden de Animal.

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
// Cambia solo el código debajo de esta línea
Dog.prototype = Object.create(Animal.prototype) // El prototypo de Dog (hijo) es una instancia de Animal (padre)

let beagle = new Dog();

console.log(beagle.constructor) // f Aniaml()