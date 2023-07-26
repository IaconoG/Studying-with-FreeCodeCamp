//! Restablece una propiedad "constructor" heredada

//todo- Cuando un objeto hereda el prototype de otro objeto, también hereda la propiedad del constructor del supertipo

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

function Bird() { }

Bird.prototype = Object.create(Animal.prototype);
let duck2 = new Bird();

duck2.constructor // ƒ Animal()


//todo- Pero duck y todas las instancias de Bird deberían mostrar que fueron construidas por Bird y no Animal.

//todo- Para esto, se debera  establecer manualmente la propiedad del constructor de Bird al objeto Bird:

Bird.prototype.constructor = Bird;

duck.constructor // ƒ Bird()


//? Ejercicio 

// Corrige el código para que duck.constructor y beagle.constructor devuelvan sus constructores respectivos.

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Cambia solo el código debajo de esta línea
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird(); 
let beagle = new Dog(); 

duck.constructor // ƒ Bird()
beagle.constructor // ƒ Dog()
