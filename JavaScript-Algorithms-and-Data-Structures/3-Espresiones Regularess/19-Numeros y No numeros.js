// Coincide con todos los números

// El atajo para buscar caracteres de dígitos es \d

// /\d/ = [0-9]
// /\D/ = [^0-9]


let movieName = "2001: A Space Odyssey";

let numRegex = /\d/g; 

let result = movieName.match(numRegex).length;
// 4
// [ '2', '0', '0', '1' ]



let movieName = "2001: A Space Odyssey";

let noNumRegex = /\D/g; 

let result = movieName.match(noNumRegex).length;
// 17
// [ ':', ' ', 'A', ' ', 'S', 'p', 'a', 'c', 'e', ' ', 'O', 'd', 'y', 's', 's', 'e', 'y' ]