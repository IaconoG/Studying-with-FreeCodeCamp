// Encuentra caracteres con una coincidencia perezosa           ? = perezosa

// coincidencia codiciosa = encuentra la parte mas larga posible de una cadena que se ajuste al patron
// coincidencia perezosa = encuentra la parte mas pequena posible de la cadena que se ajuste al patron

    // Mas larga
// /t[a-z]*i/ = cadena q empiz con t, termina con i y tiene algunas letras intermedias
// titanic = ['titani'] 

    // Mas corta
// /t[a-z]*?i/ = cadena q empiz con t, termina con i y no tiene algunas letras intermedias
// titanic = ['ti']


let text = "<h1>Winter is coming</h1>";

let myRegex = /<.*?>/; 
// let myRegex = /<.*>/;
// ['<h1>Winter is coming</h1>']

let result = text.match(myRegex);
// ['<h1>']


// Corrige la expresión regular /<.*>/ para que devuelva la etiqueta HTML <h1> y no el texto "<h1>Winter is coming</h1>"