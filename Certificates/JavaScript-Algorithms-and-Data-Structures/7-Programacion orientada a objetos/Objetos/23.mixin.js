//! Utiliza un "mixin" para añadir un comportamiento común entre objetos no relacionados

//todo- Para objetos no relacionados es mejor utilizar mixins. Un "mixin" permite a otros objetos utilizar una colección de funciones.

let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

//* El flyMixin toma a cualquier objeto y le da el método fly.

let bird2 = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

//* Aquí bird y plane son pasados a flyMixin el cual después asigna la función fly a cada objeto. Ahora bird y plane pueden volar:

bird2.fly(); // 'Flying, wooosh!'
plane.fly(); // 'Flying, wooosh!'


//? Ejercicio 

// Crea un mixin llamado glideMixin que defina un método llamado glide. Luego utiliza el glideMixin para dar a bird y boat la habilidad de planea

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Cambia solo el código debajo de esta línea
const glideMixin = function(obj) { // Creamos el mixin
  obj.glide = function() { }
}
// Asignaoms el mixin a los objetos
glideMixin(bird)
glideMixin(boat)


bird.glide // f()
boat.glide // f()
