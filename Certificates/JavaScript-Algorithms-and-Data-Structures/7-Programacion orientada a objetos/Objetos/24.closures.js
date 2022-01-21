//! Utiliza closures para evitar que las propiedades de un objeto se puedan modificar desde fuera

//todo- En JavaScript, una función siempre tiene acceso al contexto en el que se creó. A esto se le llama closure

//* En el desafío anterior, bird tenía una propiedad pública name. 

let bird = {
  name: "Donald",
  numLegs: 2
};
bird.name = "Duffy";

//* La forma más sencilla de hacer privada esta propiedad pública es creando una variable dentro de la función constructora
//* De este modo, la variable solo puede ser accesible y cambiable por métodos que también estén dentro de la función constructora.

function Bird() {
  let hatchedEgg = 10; // variable privada

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}

let ducky = new Bird();
ducky.getHatchedEggCount();

//* Aquí getHatchedEggCount es un método privilegiado, porque tiene acceso a la variable privada hatchedEgg. 
//*  Esto es posible porque hatchedEgg está declarada en el mismo contexto que getHatchedEggCount


//? Ejercicio

// Cambia como weight es declarada en la función Bird para que sea una variable privada. Después, crea un método getWeight que devuelva el valor 15 para weight.

function Bird() {
  let weight = 15;
  
  this.getWeight = function() {
    return weight;
  }
}

const pajaro = new Bird()

console.log(pajaro) 
// Bird {
//   getWeight: ƒ (),
//   __proto__: { constructor: ƒ Bird() }
// }
console.log(pajaro.getWeight()) // 15