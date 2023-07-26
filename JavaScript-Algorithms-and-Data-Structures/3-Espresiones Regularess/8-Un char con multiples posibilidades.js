// Haz coincidir un solo carácter con múltiples posibilidades

// /literal/ = coincidencia excata
// /./       = coincide con todo

// Con 'clases de caracteres' permiten definir un grupo de caracteres que deseas coincidir colocando dentro de corchetes '[y]'.

// Coincidir bag, big, y bug pero no bog. Puedes crear la expresión regular /b[aiu]g/

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";

let bgRegex = /b[aiu]g/;

bigStr.match(bgRegex); // True // big
bagStr.match(bgRegex); // True // bag
bugStr.match(bgRegex); // True // bug 
bogStr.match(bgRegex); // False // null



let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it."

let vowelRegex = /[aeiou]/ig; // Cambia esta línea
    // [aeiou] = clase de caracteres, grupo de caracteres que deseamos coincidir
    // i = no importa mayuscuals y minusuclas
    // g = todas las coincidencias 


let result = quoteSample.match(vowelRegex); 
// [ 'e', 'a', 'e', 'o', 'u', 'i', 'e', 'a', 'o', 'e', 'o', 'e', 'I', 'a', 'e', 'o', 'o', 'e', 'i', 'o', 'e', 'o', 'i', 'e', 'i' ]