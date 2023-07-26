// --- REST OPERATOR ---
// Con el parámetro rest, puedes crear funciones que tomen un número variable de argumentos. 
// Estos argumentos se almacenan en un arreglo al que se puede acceder más tarde desde dentro de la función.



function how(...args) {
  return "You have passed " + args + " arguments.";
}
console.log(how(0, 1, 2)); // 0, 1, 2
console.log(how(null, [1, 2, 3], {})); // null,1,2,3,[object]


// 
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // 3 items

// --
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0); // Suma (6+1+3)
  }
console.log(sum(6,1,3)) // 10

// --- SPREAD OPERATOR ---
// Nos permite expandir arreglos y otras expresiones en lugares donde se esperan múltiples parámetros o elementos.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

console.log(...arr) // 6, 89, 3, 45
console.log(maximus) // 85

const spreaded = [...arr] 

console.log(spreaded) // [6, 89, 3, 45]