//! Comprende la cadena "prototype"

//todo- Todos los objetos en JavaScript (con algunas excepciones) tienen un prototype.

//* Además, el prototype de un objeto en sí mismo es un objeto.

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype; // 'object'


//todo- Debido a que prototype es un objeto, ¡unprototype puede tener su propio prototype

Object.prototype.isPrototypeOf(Bird.prototype); // ture

//* El método hasOwnProperty se define en Object.prototype al cual se puede acceder con Bird.prototype, al que se puede acceder con duck. Este es un ejemplo de la cadena prototype. 
//* En esta cadena prototype, Bird es el supertype de duck mientras que duck es el subtype. Object es un supertype de Bird y duck. 

//todo Object es un supertype de todos los objetos en JavaScript. Por lo tanto, cualquier objeto puede utilizar el método hasOwnProperty.

let duck = new Bird("Donald");
duck.hasOwnProperty("name");

//? Ejercicio

// Modifica el código para mostrar la cadena de prototipos correcta.


function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // produce true

// Arregla el código de abajo para que evalúe a true
Object.prototype.isPrototypeOf(Dog.prototype);