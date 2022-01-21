//! Añade métodos después de la herencia

//todo- Una función constructor que hereda su objeto prototype de una función constructor "supertype" puede seguir teniendo sus propios métodos además de los heredados.

//* Por ejemplo, Bird es un constructor que hereda su prototype de Animal:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype); // Hereda

Bird.prototype.constructor = Bird; // Seteamos el constructor 


//* Además de lo que se hereda de Animal, se quiere añadir un comportamiento que sea exclusivo de los objetos Bird.
//* Aquí, Bird obtendrá una función fly(). Las funciones se añaden al prototype de Bird's del mismo modo que cualquier función constructor:

Bird.prototype.fly = function() {
  console.log("I'm flying!");
};

//* Ahora las instancias de Bird tendrán métodos tanto eat() como fly():

let duck = new Bird();
duck.eat(); // 'nom nom nom'
duck.fly(); // "I'm flying!"


//? Ejercicio 

// Añade el código necesario para que el objeto Dog herede de Animal y el constructor prototype de Dog sea establecido en Dog.
// A continuación agrega el método bark() al objeto Dog, para que beagle pueda "comer" eat() y "ladrar" bark(). El método bark() debe imprimir Woof! por consola.

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Cambia solo el código debajo de esta línea
Dog.prototype = Object.create(Animal.prototype) // Heredamos
Dog.prototype.constructor = Dog // Seteamsos el constructor

Dog.prototype.bark = function() {
  console.log('Woof!')
}

// Cambia solo el código encima de esta línea

let beagle = new Dog();

beagle.eat() // 'nom nom nom'
beagle.bark() // 'Woof!'