// Haz coincidir las letras del alfabeto

// Dentro de un conjunto de caracteres, puedes definir un rango de caracteres a coincidir usando 
// un carácter de guion: -.

// Por ejemplo, para hacer coincidir las letras minúsculas desde la a a la e usarías [a-e].


let catStr = 'cat';
let batStr = 'bat';
let matStr = 'mat';

let bgRegex = /[a-e]at/;

catStr.match(bgRegex); // [ 'cat' ]
batStr.match(bgRegex); // [ 'bat' ]
matStr.match(bgRegex); // null


// Coincidir todas las letras en la cadena quoteSample, tanto letras mayusculas como minusculas

let quoteSample = "The quick brown fox jumps over the lazy dog.";

let alphabetRegex = /[a-z]/ig; 

let result = quoteSample.match(alphabetRegex);

// [ 'T', 'h', 'e', 'q', 'u', 'i', 'c', 'k', 'b', 'r', 'o', 'w', 'n', 'f', 'o', 'x', 'j', 'u', 'm', 'p', 's', 'o', 'v', 'e', 'r', 't', 'h', 'e', 'l', 'a', 'z', 'y', 'd', 'o', 'g' ]