

//todo-  Para sobreescribir un método heredado se debe agregar un método a ChildObject.prototype
//todo-  Usando el mismo nombre de método que el que se va a sobrescribir.

//* Aquí hay un ejemplo de Bird sobrescribiendo el método eat() heredado de Animal:

function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { } // Definimos la funcion constructor

Bird.prototype = Object.create(Animal.prototype); // Heredamos el prototype de Animal

// Sobreescribirmos el motodo eat del padre
Bird.prototype.eat = function() { // Modificamos el motodo eat
  return "peck peck peck";
};

let duck = new Bird(); // Instancia de Bird

duck.eat() // 'peck peck peck'

//* Así es como JavaScript busca el método en la cadena prototype de duck

  /*
   * 1. duck => ¿Está eat() definido aquí? No.
   * 2. Bird => ¿Está eat() definido aquí? => Sí. Ejecútala y detén la búsqueda.
   * 3. Animal => eat() también está definido, pero JavaScript dejó de buscar antes
   * 4. Object => JavaScript dejó de buscar antes de llegar a este nivel.
   */


//? Ejercicio 

// Sobrescribe el método fly() para Penguin de manera que devuelva la cadena de texto Alas, this is a flightless bird.


function Bird() { } // Constructor de bird

Bird.prototype.fly = function() { return "I am flying!"; }; // Metodo prototype de bird

function Penguin() { } // Constructor de Penguin
Penguin.prototype = Object.create(Bird.prototype); // Heredamos el prototype de Bird
Penguin.prototype.constructor = Penguin; // Seteamos el constructor 

// Cambia solo el código debajo de esta línea
Penguin.prototype.fly = function() { return 'Alas, this is a flightless bird.'} // Sobrescribimos el metodo heredado


// Cambia solo el código encima de esta línea

let penguin = new Penguin();
console.log(penguin.fly());