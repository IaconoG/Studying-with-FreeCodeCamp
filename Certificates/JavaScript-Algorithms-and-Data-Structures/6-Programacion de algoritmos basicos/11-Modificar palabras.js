//! Haz que la primera letra de una palabra este en mayúscula

// Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. Asegúrate de que el resto de la palabra esté en minúsculas.

// Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of.


function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, ($1) => $1.toUpperCase());
    // ^ = Al principio del string
    // | = x O y
    // \s = Luego de una espacio en blanco
      // (^|\s) = Almacena una variable segun la concion
    // \S = Encuentra todo los q no son espacios en blanco
  
    // g = Remplaza todas las coincidencias que encuentre en el string
}

titleCase("I'm a little tea pot");