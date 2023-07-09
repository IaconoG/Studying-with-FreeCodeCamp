//! Utiliza propiedades "prototype" para reducir código duplicado

//todo- Las propiedades del prototype se comparten entre TODAS las instancias del objeto
//todo- Las propiedades prototype se definen en el prototype
// Casi todos los objetos en JavaScript tienen una propiedad prototype que es parte de la función constructora que lo creó.



//? Ejemplo

//* Dado que numLegs probablemente tendrán el mismo valor para todas las instancias de Bird, esencialmente tienes una variable duplicada numLegs dentro de cada instancia de Bird.
//* Una mejor forma es utilizar el prototype de Bird. Las propiedades del prototype se comparten entre TODAS las instancias de Bird.


function Bird(name) {
  this.name = name;
}

Bird.prototype.numLegs = 2;

let canary = new Bird("Tweety");
let ownProps = [];
// Cambia solo el código debajo de esta línea

for (let property in canary){
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property)    
  }
}

//? Ejercicio 

function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4


// Cambia solo el código encima de esta línea
let beagle = new Dog("Snoopy");