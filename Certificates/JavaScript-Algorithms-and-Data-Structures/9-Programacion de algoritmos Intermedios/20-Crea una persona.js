//! Crea una persona

//* Completa el constructor de objetos con los siguientes métodos:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

//* Ejecuta las pruebas para ver el resultado esperado para cada método. Los métodos que toman un argumento deben aceptar sólo un argumento y tiene que ser una cadena. Estos métodos deben ser el único medio disponible para interactuar con el objeto.


const Person = function(firstAndLast) {
  // Cambia solo el código debajo de esta línea
  // Completa el método de abajo e implementa los otros de manera similar
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();