//! Recuerda establecer la propiedad "constructor" al cambiar el prototipo

//todo- Hay un efecto secundario crucial de ajustar manualmente el prototipo a un nuevo objeto. ¡Elimina la propiedad constructor! 

//todo-  Esta propiedad puede ser usada para verificar cuál función de constructor creó la instancia


//? Ejercicio

// Define la propiedad constructor en el Dog prototype.

function Dog(name) {
  this.name = name;
}

// Cambia solo el código debajo de esta línea
Dog.prototype = {
  constructor: Dog, //* Importante  
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};