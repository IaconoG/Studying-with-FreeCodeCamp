/* Los indices de los arrays de JS comienzan en cero, es decir, el indice del primer elementop de un array es 0
y el del ultimo elemento es igual al valor de la propiedad length del array - 1*/

///-- 

const arr = ['primero', 'segundo', 'ultimo']

console.log(arr[0])         // Escribe 'primero'
console.log(arr[1])         // Escribe 'segudo'
console.log(arr[arr.length-1])  // Ecribe 'ultimo'


/* La propiedad lenght de un array de JS esta conectada con algunas otras de sus propiedades numericas.
Varios de los metodos propieos de un array, tienen en cuenta el valor de la propiedad lenght de un array cunado se las llama*/

const frutas = []
console.log(frutas.length) // 0

frutas.push('Pera', 'Manzana', 'Banana')
console.log(frutas.length) // 3

/* Cuadno se le da a una propiedad e un array JS un valor que corresponda a un indice valido para el array pero que se encuetnre 
fuera de sus limites, el valor de la propiedad length se actualiza */

frutas[5] = 'Fresa'
console.log(frutas[5])              // 'Fresa'
console.log(Object.keys(frutas))    // [0, 1, 2, 5]
console.log(frutas)                 // [ 'Pera', 'Manzana', 'Banana', <2 empty items>, 'Fresa' ]
console.log(frutas.length)          // 6

// Aumenta el valor del array 

frutas.length = 10 
console.log(frutas[8])              // undefined
console.log(Object.keys(frutas))    // ['0', '1', '2', '5']
console.log(frutas)                 // ['banana', 'manzana', 'pera', <2 empty items>, 'fresa', <4 empty items>]
console.log(frutas.length)          // 10

// Disminuir el valor del array

frutas.length = 2
console.log(frutas[5])              // undefined
console.log(Object.keys(frutas))    // ['0', '1']
console.log(frutas)                 // ['banana', 'manzana']
console.log(frutas.length)          // 2

// El método Object.keys() devuelve un array de las propiedades names de un objeto, en el mismo orden como se obtienen en un loop normal

///--
///--
///--
///--
///--
///--
///--
///--
///--