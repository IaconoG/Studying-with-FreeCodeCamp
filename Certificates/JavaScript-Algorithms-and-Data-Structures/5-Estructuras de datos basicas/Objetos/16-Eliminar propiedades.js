//! Usa la palabra clave "delete" para eliminar las propiedades de los objetos

//todo- En resumen, son almacenes clave-valor que proporcionan una forma flexible e intuitiva de estructurar los datos, y, proporcionan un tiempo de búsqueda muy rápido
//todo- Aquí veremos cómo podemos eliminar un par clave-valor de un objeto.


let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges
delete foods.plums
delete foods.strawberries

console.log(foods)
// {
//   apples: 25,
//   bananas: 13,
//   grapes: 35
// }



