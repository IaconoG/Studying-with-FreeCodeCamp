// Haz coincidir todo menos letras y números


// Puedes buscar lo contrario de \w con \W. 

// \w = [A-Za-z0-9_]
// \W = [^A-Za-z0-9_]


let quoteSample = "The five boxing wizards jump quickly.";

let nonAlphabetRegex = /\W/g;

let result = quoteSample.match(nonAlphabetRegex).length;
// 6
// [ ' ', ' ', ' ', ' ', ' ', '.' ]


