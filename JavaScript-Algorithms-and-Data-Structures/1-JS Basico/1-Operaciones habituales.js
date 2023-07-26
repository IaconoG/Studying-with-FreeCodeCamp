// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
///-- Crear un array

const frutas = ['Manzana', 2 , null, {tipo: 'fruta'}]


///-- Tamnio del array

const tamanio = frutas.length
// 4


///-- Acceder a un elemento de Array mediante un indice

const primero = frutas[0]
// Manzana
const ultimo = frutas[frutas.length - 1]
// {tipo : 'fruta}


///-- Recorrer un Array

frutas.forEach( (elemento, indice, array) => { 
    //console.log(elemento, ' : ', indice)
})
// Manzana : 0
// 2 : 1
// null : 2
// {tipo : 'fruta'} : 3


///-- Aniadir un elemetno al final de un Array

frutas.push('Naranja') // Aniade 'Naranja' al final
// ['Manzana', 2, null, {tipo: 'fruta'}, 'Naranja']


///-- Elimina el ultimo elemento de un Array

const eliminarUltimo = frutas.pop() // Elimina 'Naranja' del final
// ['Manzana', 2, null, {tipo: 'fruta'}]
// eliminarUltimo = Naranja


///-- Aniadir un elemento al principio de un Array

frutas.unshift('Fresa') // Aniade 'Fresa' al inicio
// ['Fresa', 'Manzana', 2, null, {tipo: 'fruta'}, 'Naranja']


///-- Encontrar el indice de un elemetno del Array
// array.indexOf(searchElement[, fromIndex])
let posicionManzana = frutas.indexOf('Manzana') // (posicionManzana) es la posicion del elemento en el array
// 1


///-- Extraer un unico elemento mediante su posicion

// splice(posicion de inicio, numero de elementos a eliminar)
let elementoEliminado = frutas.splice(posicionManzana, 1)
// ['Fresa', 2, null, {tipo: 'fruta'}, 'Naranja']
// elementoElimindao = ['Manzana']


///-- Extraer varios elementos a partir de una posicion

const vegetales = ['Repollo', 'Nabo', 'Rabano', 'Zanahoria']
// ['Repollo', 'Nabo', 'Rabano', 'Zanahoria']

const pos = 1, numElementos = 2

const elementosEliminados = vegetales.splice(pos, numElementos)
// ['Repollo', 'Zanahoria']
// elementosElimindos = ['Nabo', 'Rabano']


///-- Copiar un array (no modifica el array principal)

// arr.slice([inicio [, fin]])
let copiaArray = frutas.slice(1, frutas.length)

let copiaArray2 = [...frutas] // Like arr.slice() // Sin ningun parametro

let copiaArray3 = frutas.slice() // Sin parametros

let copiaArray4 = frutas // No hace copia del array principal

let copiaArray5 = frutas.slice(1) // Sin parametros

console.log(copiaArray)
console.log(copiaArray2)
console.log(copiaArray3)
console.log(copiaArray4)
console.log(copiaArray5)