//! Copia elementos de un arreglo usando slice()

//todo- slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin.
//todo- El array original no se modificará.
//todo- 


//* arr.slice(inicio, fin) utiliza solo 2 paramentos
  //* inicio = donde empiez la extraccion
    // si el indice especificado es negativo, se cuenta desde el final del array sin necesidad del parametro fin (slice(-2) = extrae los dos ulitmos elementos del array)
    // si es omitido el valor por defecto es 0
    // si es mayor a arr.length devuelve un array vacio

  //*fin = donde fnaliza la extraccion sin incluir el final
    // slice(1, 4) = elementos con indice 1, 2 y 3
    // si el indice es negativo, indica un desplzamiento desde el final de al secuencia slice(2, -1) = desde el 3ro hasta el penultimo
    // si es omitido el valor por defecto es arr.lenght
    // si arres mayor a arr.length extrae hasta el final de la secuencia.

  
//? Ejemplo

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3); // ['snow', 'sleet']


//? Ejercicio

// Hemos definido una función, forecast, que toma un arreglo como argumento. 
// Modifica la función usando slice() para extraer información del arreglo de argumentos y devuelve un nuevo arreglo que contenga los elementos warm y sunny.


function forecast(arr) {
  // Cambia solo el código debajo de esta línea
  arr = arr.slice(2, 4);
  return arr;
}

// Cambia solo el código encima de esta línea
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));