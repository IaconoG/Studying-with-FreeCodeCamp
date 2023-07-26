//! Utiliza un constructor para crear objetos

//todo- Observa que se utiliza el operador new cuando llamamos a un constructor
//todo- Esto le indica a JavaScript que cree una nueva instancia de Bird llamada blueBird
//todo- Ahora blueBird tiene todas las propiedades definidas dentro del constructor Bird

//todo- Al igual que cualquier otro objeto, sus propiedades pueden ser accedidas y modificadas:


//? Ejemplo


function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
// Bird {
//   name: 'Albert',
//   color: 'blue',
//   numLegs: 2,
//   __proto__: { constructor: ƒ Bird() }
// }

blueBird.name;            // 'Albert'
blueBird.color;           // 'blue'
blueBird.numLegs;         // 2

blueBird.name = 'Elvira';
blueBird.name;            // 'Elvira'