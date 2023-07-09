// Comprueba agrupaciones mixtas de caracteres

// A veces queremos comprobar grupos de caracteres utilizando una expresión regular y para conseguirlo usamos paréntesis ()

// Si deseas encontrar Penguin o Pumpkin en una cadena, puedes usar la siguiente expresión regular: /P(engu|umpk)in/g

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
    // P = busca P
    // (engu|umpk) = busca 'engu' o 'umpk'
    // in = busca in

testRegex.test(testStr); // true


// Compruebe los nombres de Franklin Roosevelt o Eleanor Roosevelt de una manera sensible a mayúsculas y minúsculas y haciendo concesiones para los segundos nombres.


let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).* Roosevelt/; 
    // (Franklin|Eleanor) = comprueba si la cadena contien 'Franklin' o 'Eleanor'
    // .* = coincide con cualquier caracter, 0 o mas veces

let result = myRegex.test(myString); 

console.log(result) // true

myString.match(myRegex)
