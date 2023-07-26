// Coincide una cadena literal con diferentes posibilidades

// Utilizando el operador 'alteraicon', 'OR' o ' | ' se puede buscar multiples patrones

    // /yes|no|maybe/


let petString = 'James has a pet cat.';
let petRegex = /dog|cat|bird|fish/

let result = petRegex.test(petString) // True