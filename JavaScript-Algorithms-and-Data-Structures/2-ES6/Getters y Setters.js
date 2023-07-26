// Utiliza getters (accesores) y setters (mutadores) para controlar el acceso a un objeto

// Las funciones GETTER están destinadas a simplemente devolver (get) el valor de la variable privada de un objeto
// al usuario sin que el usuario acceda directamente a la variable privada.

// Las funciones SETTER están destinadas a modificar (set) el valor de la variable privada de un objeto basado en el valor pasado a la función setter.
// Este cambio podría implicar cálculos, o incluso sobrescribir completamente el valor anterior.

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    // Obtener el valor
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    // Setear el valor
    this._author = updatedAuthor;
  }
}

const novel = new Book("anonymous");
// Obtenemos el valor
console.log(novel.writer); // _author = 'anonymus'

novel.writer = "newAuthor";
// Seteamos el valor
console.log(novel.writer); // _author = 'newAuthor'




// En la clase, crea un getter para obtener la temperatura en Celsius y un setter para ajustar la temperatura en Celsius.
class Thermostat {
  constructor(addTemperature) {
    this._temperature = addTemperature;
  }
  get temperature() {
    return (5 / 9) * (this._temperature - 32);
  }
  set temperature(updateTemperature) {
    this._temperature = (updateTemperature * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Ajuste en escala Farenheit
let temp = thermos.temperature; // 24.44 en Celsius

thermos.temperature = 26;
temp = thermos.temperature; // 26 en Celsius


/// Este es el poder de un getter y un setter. 
/// Estás creando una API para otro usuario, que puede obtener el resultado correcto independientemente de cuál estés rastreando.

/// En otras palabras, estás abstrayendo los detalles de la implementación del usuario.