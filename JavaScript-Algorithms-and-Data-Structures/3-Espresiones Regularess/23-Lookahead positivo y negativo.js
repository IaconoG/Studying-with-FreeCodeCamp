// Lookahead positivo y negativo

// Los lookaheads son patrones que le indican a JavaScript que busque por anticipado en tu cadena para verificar patrones más adelante. Buscar varios patrones sobre la misma cadena

// Lookahead positivo
    // Un lookahead positivo buscará para asegurarse de que el elemento en el patrón de búsqueda este allí, pero en realidad no lo coincidirá. 
    //Un lookahead positivo se usa como (?=...) donde el ... es la parte requerida que no coincide.

// Lookahead negativo
    // Un lookahead positivo buscará para asegurarse de que el elemento en el patrón de búsqueda este allí, pero en realidad no lo coincidirá. 
    //Un lookahead positivo se usa como (?=...) donde el ... es la parte requerida que no coincide.


let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/; // si la u esta despues de q devolver q
let qRegex = /q(?!u)/; // si la u NO esta despues de la q deovelve q
 
quit.match(quRegex); // ['q']
noquit.match(qRegex); // ['q']


// Comprobar dos o más patrones en una caden con lookahead
// Verificador de contraseñas (ingenuamente) simple que busca entre 3 y 6 caracteres y al menos un número

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
    // (?=\w{3,6}) = busca entre 3 y 6 alfanumericos
    // (?=\D*\d) = busac 0 o mas repeticiones de NO numeros y 1 numero
    // el ?= no devuelve nada, solo es para comprobar

checkPass.test(password); // true
password.match(checkPass); // true



// Utiliza los lookaheads en el pwRegex para que coincida con las contraseñas que tengan más de 5 caracteres y dos dígitos consecutivos.

let sampleWord = "asd123";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/; 
    // (?=\w{6,}) = toda la palabra q tenga 6 o mas caracteres
    // (?=\D*\d{2}) = toda la palabra que tenga dos digitos consecutivos

let result = pwRegex.test(sampleWord);

console.log(result) // true