//! Verifica el constructor de un objeto con "instanceof"

//todo- Cada vez que una función constructora crea un nuevo objeto, se dice que ese objeto es una __INSTANCIA__ de su constructor.

//TODO- instanceof permite comparar un objeto con un constructor, devuelve true o false basado en si ese objeto fue creado o no con dicho constructor


//? Ejercicio

// Crea una nueva instancia del constructor House, llamándola myHouse y pasando el número de habitaciones. Luego, usa instanceof para verificar que es una instancia de House.

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Cambia solo el código debajo de esta línea
const myHouse = new House(13)

myHouse instanceof House;   // true