// Haz coincidir patrones de cadena de inicio

// (^) También se utilizan para buscar patrones al principio de las cadenas.



let rickyAndCal = "Cal and Ricky both like racing.";

let calRegex = /^Cal/; 

let result = calRegex.test(rickyAndCal); // true
// ['Cal']
