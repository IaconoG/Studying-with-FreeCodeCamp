//! Itera sobre todas las propiedades

//todo- Las propiedades directas se definen directamente en la propia instancia del objeto. Y las propiedades prototype se definen en el prototype.

//? Ejemplo 

// A continuación, se explica cómo se agregan las propiedades directas de duck al arreglo ownProps y las propiedades prototype al arreglo prototypeProps:

function Bird(name) {
  this.name = name;  //own property
}
Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

let ownProps1 = [];
let prototypeProps2 = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps1.push(property);
  } else {
    prototypeProps2.push(property);
  }
}

console.log(ownProps1);        // ['name']
console.log(prototypeProps2);  // ['numLegs']


//? Ejercicio

// Agrega todas las propiedades directas de beagle al arreglo ownProps. Agrega todas las propiedades prototype de Dog al arreglo prototypeProps.


function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Cambia solo el código debajo de esta línea

for (let property in beagle) {
  (beagle.hasOwnProperty(property))
    ? ownProps.push(property)    
    : prototypeProps.push(property)
}

console.log(ownProps);        // ['name']
console.log(prototypeProps);  // ['numLegs']
