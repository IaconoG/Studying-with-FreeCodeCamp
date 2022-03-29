//! Crea una persona

//* Completa el constructor de objetos con los siguientes métodos:

getFirstName();
getLastName();
getFullName();
setFirstName(first);
setLastName(last);
setFullName(firstAndLast);

//* Ejecuta las pruebas para ver el resultado esperado para cada método. Los métodos que toman un argumento deben aceptar sólo un argumento y tiene que ser una cadena. Estos métodos deben ser el único medio disponible para interactuar con el objeto.

const Person = function (firstAndLast) {
  // Cambia solo el código debajo de esta línea
  let [nombre, apellido] = firstAndLast.split(" "); // Obtenemos el nombre y el apellido, desestructurando la variable pasada por parametro

  this.getFirstName = () => { // Devolvemos la variable nombre
    return nombre;
  };
  this.getLastName = () => { // Devolvemos la variable apellido
    return apellido;
  };
  this.getFullName = () => { // Devolvemos el nombre completo
    return nombre.concat(" ", apellido);
  };
  this.setFirstName = (nuevoNombre) => { // Seteamos el nuevo nombre
    nombre = nuevoNombre;
  };
  this.setLastName = (nuevoApellido) => { // Setemaos el nuevo apellido
    apellido = nuevoApellido;
  };
  this.setFullName = (nombreCompleto) => { // Seteamos el nuevo nombre completo
    const [nuevoNombre, nuevoApellido] = nombreCompleto.split(" "); // desestructuramos el nuevo nombre completo
    nombre = nuevoNombre;
    apellido = nuevoApellido;
  };
};

const bob = new Person("Bob Ross");

// No se deben agregar propiedades. Object.keys(bob).length siempre debe devolver 6.

// bob instanceof // Person debe devolver true.

bob.firstName; // debe devolver undefined.

bob.lastName; // debe devolver undefined.

bob.getFirstName(); // debe devolver la cadena Bob.

bob.getLastName(); // debe devolver la cadena Ross.

bob.getFullName(); // debe devolver la cadena Bob Ross.

bob.setFirstName("Haskell");
bob.getFullName(); // debe devolver la cadena Haskell Ross después de bob.setFirstName("Haskell")

bob.setLastName("Curry");
bob.getFullName(); // debe devolver la cadena Haskell Curry después de bob.setLastName("Curry")

bob.setFullName("Haskell Curry")
bob.getFirstName() // debe devolver la cadena Haskell después de bob.setFullName("Haskell Curry")

bob.setFullName("Haskell Curry")
bob.getLastName() // debe devolver la cadena Curry después de bob.setFullName("Haskell Curry")
