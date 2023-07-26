//! Comprender las propiedades directas


//todo- Las propiedades directas se definen directamente en la propia instancia del objeto (this.)

//? Ejemplo

function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary2 = new Bird("Tweety");

//* name y numLegs se llaman propiedades directas, porque están definidas directamente en la instancia del objeto.


//? Ejercicio

// Agrega todas las propiedades directas de canary al arreglo ownProps.

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Cambia solo el código debajo de esta línea

for (let property in canary){
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property)    
  }
}