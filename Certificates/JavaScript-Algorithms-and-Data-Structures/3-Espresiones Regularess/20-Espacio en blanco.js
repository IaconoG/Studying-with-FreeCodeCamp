// Haz coincidir espacios en blanco

// Puedes buscar los espacios en blanco usando \s que es una s minúscula

// Este patrón no solo coincide con los espacios en blanco, también con los caracteres de retorno de carro, tabulaciones, alimentación de formulario y saltos de línea

// Clases de caracteres
//     \s = [ \t\r\n\v\f]
//     \S = [^ \t\r\n\v\f]
//     \r = Coincide con un retorno de carro (\r no se) 
//     \t = Coincide con una tabulacion horizontal (tab)
//     \f = Coincide con un caracter de avance de pagina (ctrl + intro)
//     \n = Coincide con un salto de linea (intro)
//     \v = Coincide con una tabulacion vertical (\v no se)


// Cambia la expresión regular whiteSpace para buscar varios caracteres que sean espacios en blanco en una cadena.

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex); 
// ['', '']


let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
// [ 'W', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e', 'i', 's', 'i', 'm', 'p', 'o', 'r', 't', 'a', 'n', 't', 'i', 'n', 's', 'e', 'p', 'a', 'r', 'a', 't', 'i', 'n', 'g', 'w', 'o', 'r', 'd', 's' ]