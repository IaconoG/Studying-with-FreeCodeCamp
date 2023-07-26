//! Usa grupos de captura para buscar y reemplazar

// Utilizando '.replace()' podemos buscar y remplazar texto en una cadena
// Las entradas son para '.replace(): 
    // primero el patron de exrepsion regular.
    // segundo la cadena para reemplazar la coincidencia o una funcion para hacer algo


//? Ejemplo

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// 'The sky is blue'

"Code Camp".replace(/(\w+)\s(\w+)/, '$2'); // 'Camp'
"Code Camp".replace(/(\w+)\s(\w+)/, '$1'); // 'Code'
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); // 'Camp Code'
    // () = Grupo de captura
    // w = coincide con 1 abecedario y nuemo
    // + = coincide con 1 o mas 
        // (w+) = caputa conjunto de 1 o mas alfanumericos
    // \s = coincide con espacio el blanco


//? Ejercicio

// Escribe una expresión regular fixRegex utilizando tres grupos de captura que buscarán cada palabra en la cadena one two three. Luego actualiza la variable replaceText para reemplazar one two three con la cadena three two one y asigna el resultado a la variable result. Asegúrate de utilizar grupos de captura en la cadena de reemplazo utilizando la sintaxis del signo de dólar ($).


let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Cambia esta línea
let replaceText = "$3 $2 $1"; // Cambia esta línea
let result = str.replace(fixRegex, replaceText);

// 'trhee two one'

