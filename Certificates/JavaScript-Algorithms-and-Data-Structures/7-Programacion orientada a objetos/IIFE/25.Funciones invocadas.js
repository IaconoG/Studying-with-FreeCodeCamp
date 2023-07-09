//! Comprende las funciones que son invocadas inmediatamente (IIFE)

//todo- Un patrón común en JavaScript es la ejecución de una función apenas declarada:

(function () { // funcion inmeditamente invocada (iife)
  console.log("Chirp, chirp!");
})();

//* Esta es una expresión de función anónima que se ejecuta de inmediato y produce Chirp, chirp! inmediatamente

//* Ten en cuenta que la función no tiene nombre y que no se almacena en un valor

//* Los dos paréntesis () al final de la expresión de la función hacen que se ejecute o invoque de forma inmediata.


//? Ejercicio

// Reescribe la función makeNest y elimina su llamada, por lo que es una expresión de función anónima inmediatamente invocada (IIFE).

function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();

//* funcion anonima
  // los parentes que atrapan la funcion la convierten en una funcion anonima
    // debido a esto no es necesario el nombre  

(function () {
  console.log("A cozy nest is ready");
});

//* auto llamado de la funcion 
  // los parentesis del final permiten el auto llamado de la funcion

(function () {
  console.log("A cozy nest is ready");
})();




// -------

const word = (function () {
  return "A cozy nest is ready";
})();

console.log(word + ' and comfortable') // 'A cozy nest is ready and comfortable'