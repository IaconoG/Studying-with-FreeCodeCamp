//! Aplicar programación funcional para convertir cadenas a slugs de URL

//? Ejercicio

/*
 * Rellena la función urlSlug para convertir una cadena title y devolver la versión con guiones para la URL.
 * Puedes utilizar cualquiera de los métodos vistos en esta sección y no utilices replace.
 * Aquí están los requisitos:
 * La entrada es una cadena con espacios y palabras, en mayúsculas y minúsculas.
 * El resultado es una cadena con los espacios entre palabras reemplazadas por un guion (-).
 * El resultado debe contener todas las letras minúsculas.
 * El resultado no debe tener espacios.
 */



// Cambia solo el código debajo de esta línea
function urlSlug(title) {
  return title
    .toLowerCase()                 // Combierte toda la cadena en minuscula
    .split(/\W/)                   // Divide el string en elemtnos que coincidan solo con abecedario y numeros
    .filter((elem) => elem !== "") // Filtra todos los elemtnos vacios
    .join("-");                    // Une con el simbolo '-' todos los elementos del array 
}

// Cambia solo el código encima de esta línea
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
// 'a-mind-needs-books-like-a-sword-needs-a-whetstone'

urlSlug(" Winter Is  Coming");
// 'winter-is-coming'




// ------------

function urlSlug2(title) {
  return title
    .toLowerCase()
    .trim() // Elimina los espacios
    .split(/\s+/) // s caracteres que no sean alfanumeriocs // + 1 o mas coincidencias
    .join("-");
}


function urlSlug(title) {
  return title
    .split(" ") // Comvertimos el string en cadena, en donde cada palbra es un elementos
    .filter(substr => substr !== "") // Elimnamos todos los elemetnos vacios
    .join("-") // Unimos los elementos del array en una cadena unida por el simbolo -
    .toLowerCase(); // La cadena de texto se convierte en minuscula
}