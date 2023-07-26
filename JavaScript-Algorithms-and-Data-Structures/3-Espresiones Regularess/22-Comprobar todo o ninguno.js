// Comprueba todos o ninguno

// Los patrones que quieres buscar pueden tener partes que pueden o no existir. Sin embargo, podría ser importante buscarlos de todos maneras.

// Puedes especificar la posible existencia de un elemento con un signo de interrogación, '?'. Esto comprueba cero o uno de los elementos precedentes. Puedes pensar que este símbolo dice que el elemento anterior es opcional.




let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/; // u? = Puede estar o no la u

rainbowRegex.test(american);
rainbowRegex.test(british);





// Cambia la expresión regular 'favRegex' para que coincida tanto la versión del inglés americano (favorite) como la versión del inglés británico de la palabra (favourite).

let favWord = "favorite";
let favWord2 = "favourite";
let favRegex = /favou?rite/; // u? = puede o no tener la u

let result = favRegex.test(favWord); // true
let result2 = favRegex.test(favWord2); // true