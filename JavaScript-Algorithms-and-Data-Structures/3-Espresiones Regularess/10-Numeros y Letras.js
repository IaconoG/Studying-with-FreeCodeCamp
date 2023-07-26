
// Haz coincidir los números y las letras del alfabeto

// Usar el guión (-) para coincidir con un rango de caracteres no está limitado a letras. También funciona para hacer coincidir un rango de números.


let quoteSample = "Blueberry 3.141592653s are delicious.";

let myRegex = /[h-s2-6]/ig; 

let result = quoteSample.match(myRegex); 

// [ 'l', 'r', 'r', '3', '4', '5', '2', '6', '5', '3', 's', 'r', 'l', 'i', 'i', 'o', 's' ]



// Crea una sola expresión regular que coincida con un rango de letras entre h y s, y un rango de números entre 2 y 6. Recuerda incluir las banderas apropiadas en la expresión regular.

