//! Utiliza una IIFE para crear un módulo

//todo- Una IIFE se utiliza a menudo para agrupar la funcionalidad relacionada en un solo objeto o módulo

//* Por ejemplo, en el desafío anterior se definieron dos "mixins":

function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}

function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}

//* Podemos agrupar estos mixins en un módulo:

let motionModule = (function () { // Patron de modulo
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();

console.log(motionModule) 
// {
//   glideMixin: ƒ glideMixin(),
//   flyMixin: ƒ flyMixin()
// }

//* El objeto devuelto contiene todos los comportamientos de los mixins como propiedades del objeto. 

//todo- La ventaja del patrón del módulo es que todos los comportamientos pueden ser empaquetados en un solo objeto que puede ser usado por otras partes del código.

function Bird() { }
const duck = new Bird


motionModule.glideMixin(duck);
duck.glide(); // 'Gliding on the water'


//? EJERCICIO

// Crea un módulo llamado funModule para envolver los dos mixins isCuteMixin y singMixin. funModule debe devolver un objeto.

let funModule = (function(){
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  };
})();


console.log(funModule)
// {
//   isCuteMixin: ƒ isCuteMixin(),
//   singMixin: ƒ singMixin()
// }