//! Crea un método en un objeto

//todo- Los objetos pueden tener un tipo de propiedad especial, llamada método.
//todo- Los métodos son propiedades que son funciones. 
//todo- Estos agregan diferentes comportamientos a los objetos.



//? Ejercicio

// Usando el objeto dog, asígnale un método llamado sayLegs. El método debe devolver la frase This dog has 4 legs.


let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return 'This dog has'+ dog.numLegs + 'legs.'
  }
};

dog.sayLegs();

