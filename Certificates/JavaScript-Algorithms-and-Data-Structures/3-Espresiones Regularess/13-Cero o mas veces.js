// Haz coincidir caracteres que aparecen cero o mas veces

// Utilizando el caracter * significa que aparece al menos una vez, y puede repetirse.

//. + = 1 o mas
//. * = 0 o mas

// El carácter o patrón debe estar presente consecutivamente. Es decir, el carácter tiene que repetirse uno tras otro.

// /go*/

// gooooooooal! = ['gooooooooa']
// gut feeling = ['g']
// over the moon = null


let chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!';

let chewieRegex = /Aa*/;

let result = chewieQuote.match(chewieRegex)

// ['Aaaaaaaaaaaaaaaa']