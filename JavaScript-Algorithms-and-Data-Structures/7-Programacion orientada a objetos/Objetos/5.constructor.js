//! Define una función "Constructor"

//todo- Las funciones Constructors crean nuevos objetos. 
//todo- Definen propiedades y comportamientos que pertenecerán al nuevo objeto. 
//todo- Son el modelo para la creación de nuevos objetos.


//? Ejemplo

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

//* Este constructor define un objeto Bird con las propiedades name, color y numLegs establecidas a Albert, blue y 2 respectivamente. 

//* Los constructores tienen las siguientes convenciones:
  
  /*
   * Están definidos con un nombre en mayúscula para distinguirlos de otras funciones que no son constructors
   * Utilizan la palabra clave this para establecer propiedades del objeto que crearán. 
   * * Dentro del constructor, this se refiere al nuevo objeto que creará.
   * Los Constructors definen propiedades y comportamientos en ves de devolverlos como un valor como lo harían otras funciones.
   */


//? Ejercicio

// Crea un constructor, Dog, con las propiedades name, color y numLegs que se establecen a una cadena, una cadena y un número respectivamente.

function Dog() {
  this.name = 'Pepe'
  this.color = 'Rojo'
  this.numLegs = 4
}