//! Entiende la propiedad constructor

//todo- La ventaja de la propiedad constructor es que es posible verificar esta propiedad para averiguar qué tipo de objeto es
//todo- La propiedad constructor hace referencia a la función constructor que creo la instancia

//! Nota: dado que la propiedad _COSNTRUCTOR_ se puede sobreescribir, por lo general, es mejor utilizar el método _INSTANCEOF_ para verificar el tipo de un objeto.

//? Ejercicio

// Escribe una función joinDogFraternity que tome como parámetro candidate y que con la propiedad constructor, devuelva true si el candidato es un Dog y si no lo es debería devolver false.


function Dog(name) {
  this.name = name;
}

// Cambia solo el código debajo de esta línea
function joinDogFraternity(candidate) {
  return (candidate.constructor === Dog)
}