//! Cambia el prototipo a un nuevo objeto

//todo- Una forma más eficiente es establecer el prototype a un nuevo objeto que ya contenga todas las propiedads a anadir las propiedades. 
//todo- De esta forma, las propiedades son añadidas todas a la vez.

//todo- la propieda constructor es eliminada

//? Ejemplo

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype = {
  numLegs: 2,
  eat: function() {
    console.log('nom nom nom');
  },
  describe: function() {
    console.log(`My name is ${this.name}`)
  }
}

const pajaro = new Bird('paloma')
// {
//   name: 'paloma',
//   __proto__: {
//     numLegs: 2,
//     eat: ƒ eat(),
//     describe: ƒ describe()
//   }
// }



//? Ejercicio

// Agrega la propiedad numLegs, y los dos métodos eat() y describe() al prototype de Dog, estableciendo prototype a un nuevo objeto.


function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Cambia solo el código debajo de esta línea
  numLegs: 4,
  eat: function() {
    console.log('waof nom nom');
  },
  describe: function() {
    console.log(`My name is ${this.name} wof wof`)
  }
};