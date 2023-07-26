// Especifica el menor y mayor número de coincidencias

// Puedes especificar el número inferior y superior de patrones utilizando especificadores de cantidad

// Especificadores de cantidad
//  {a,b} = especifica el minimo y maximo de coincidencias


let A6 = "aaaaaah";
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
  // Encontrar de 3 a 5 'a' consecutivas
    // solo agarra hasta 5 'a' y obvia las demas
  // luego encontrar una h consecutiva

multipleA.test(A6); // true
// ['aaaaah']
multipleA.test(A4); // true
// ['aaaah']
multipleA.test(A2); // false
// null


// --- Menor y Mayor ---
// Modifica la expresión regular ohRegex para que coincida con toda la frase Oh no solo cuando tenga de 3 a 6 letras h.

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/i;  // 3 a 6 'h'
let result = ohStr.match(ohRegex); // true
// ['Ohhh no']

console.log(result)


// --- Solo Menor ---
// Modifica la expresión regular haRegex para coincidir con la palabra Hazzah solo cuando ésta tiene cuatro o más letras z.

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/i; // 4 'z' o mas
let result = haRegex.test(haStr); // True
// ['Hazzzzah']

console.log(result)



// --- Numero exacto ---
// Modifica la expresión regular timRegex para hacer coincidir con la palabra Timber solo cuando esta tiene cuatro letras m.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // solo 4 'm'
let result = timRegex.test(timStr); // True
// ['Timmmmber']

console.log(result)

