// Prevenir la mutación del objeto

// Para asegurar que tu información no cambie, JavaScript provee una función 'Object.freeze' para prevenir la mutación de datos.

// -- Object.freeze --


let obj = {
    name: 'FreeCodeCamp',
    reviw: 'Bad'
};
                    // { name: 'FreeCodeCamp', reviw: 'Bad' }
obj.reviw = 'Awesome';
Object.freeze(obj); // { name: 'FreeCodeCamp', reviw: 'Awesome' }
obj.reviw = 'So bad'; // Dont work
obj.newProp = 'test'; // Dont work

console.log(obj) // { name: 'FreeCodeCamp', reviw: 'Awesome' }