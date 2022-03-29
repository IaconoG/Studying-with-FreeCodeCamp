// Coincidir cadenas literales

let waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
let waldoRegex = /Waldo/;
let waldoRegexFalse = /waldo/

let result = waldoRegex.test(waldoIsHiding) // True
let resultFalse = waldoRegexFalse.test(waldoIsHiding) // False



// La expresión regular busca una coincidencia literal exacata de la cadena 'waldoIsHiding' por ende no obvia las mayusculas y minusculas 