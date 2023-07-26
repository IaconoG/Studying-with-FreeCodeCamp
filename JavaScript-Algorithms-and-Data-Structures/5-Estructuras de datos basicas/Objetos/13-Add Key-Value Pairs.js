//! Add Key-Value Pairs to JavaScript Objects

//todo- En su aspecto más básico, los objetos no son más que colecciones de pares clave-valor
//todo- En otras palabras, son piezas de datos (valores) asignados a identificadores únicos llamados propiedades (claves)

//todo- En resumen, son almacenes clave-valor que proporcionan una forma flexible e intuitiva de estructurar los datos, y, proporcionan un tiempo de búsqueda muy rápido

//? Ejemplo

// Definimos un objeto de un personake del videojuego Tekken como 'tekkenCharacter'
// Posee tres propiedades, a cada una se le asigna un valor especifico.

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};

// Agregar propiedades al objeto
  
  //todo- Notacion de punto
  // Nos permite asignar o modificar propiedades y sus valores
tekkenCharacter.origin = 'South Korea'
  // {
  //   player: 'Hwoarang',
  //   fightingStyle: 'Tae Kwon Doe',
  //   human: true,
  //*   origin: 'South Korea'
  // }

  //todo- Notacion de corchetes
  // Sirve cuand nuestra propiedad tiene un espacio en blanco, o si se quiere utilizar una variable para nombrarla.
tekkenCharacter['hair color'] = 'dyed orange'
  // {
  //   player: 'Hwoarang',
  //   fightingStyle: 'Tae Kwon Doe',
  //   human: true,
  //   origin: 'South Korea',
  //*   'hair color': 'dyed orange'
  // }

const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';
  // {
  //   player: 'Hwoarang',
  //   fightingStyle: 'Tae Kwon Doe',
  //   human: true,
  //   origin: 'South Korea',
  //   'hair color': 'dyed orange',
  //*   'eye color': 'brown'
  // }



//? Ejercicio 

// Se ha creado un objeto foods con tres entradas. 
// Usando la sintaxis de tu elección, agrega tres entradas más: 
  // bananas con el valor de 13, grapes con el valor de 35, y strawberries con el valor de 27.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Cambia solo el código debajo de esta línea
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Cambia solo el código encima de esta línea

console.log(foods);
// {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// }

