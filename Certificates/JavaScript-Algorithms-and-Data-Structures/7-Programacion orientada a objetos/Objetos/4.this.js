//! Haz el código más reutilizable con la palabra clave "this"

//todo- Aunque la notaicon de punto  es una forma válida de acceder a la propiedad del objeto, existe un problema.
//todo- Si el nombre de la variable cambia, cualquier código que haga referencia al nombre original también tendría que ser actualizado.

//todo- Una forma de evitar estos problemas es con palabra clave this

//! Hace que el código sea reutilizable y mas fácil de leer.


//? Ejercio 

// Modifica el método dog.sayLegs para eliminar cualquier referencia a dog. Utiliza el ejemplo de duck como orientación.


let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return `This dog has ${this.numLegs} legs.`;}
};

dog.sayLegs();
