// Haz coincidir caracteres que aparecen una o más veces

// Utilizando el caracter + significa que aparece al menos una vez, y puede repetirse.

// + = 1 o mas

// El carácter o patrón debe estar presente consecutivamente. Es decir, el carácter tiene que repetirse uno tras otro.

// aabc = ['aa']
// abab = ['a', 'a']
// bcd = null


let difficultSpelling = "Mississippi";

let myRegex = /s+/ig; 

let result = difficultSpelling.match(myRegex);

// [ 'ss', 'ss' ]