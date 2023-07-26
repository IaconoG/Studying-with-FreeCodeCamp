// Reutiliza patrones usando grupos de captura

// Los grupos de captura pueden utilizarse para encontrar subcadenas repetidas. 
    // let repeatStr = "row row row your boat";

// La subcadena que coincide con el grupo se guarda en una "variable" temporal, a la que se puede acceder dentro de la misma expresión regular utilizando una barra invertida y el número del grupo de captura (por ejemplo, \1)
// Los grupos de captura se numeran automáticamente por la posición de sus paréntesis de apertura



let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/; 
    // \w+ = palabra formada por caracteres alfanuméricos 1 o mas repeticiones
    // \1 = una repeticion

repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]



// Utiliza los grupos de captura en reRegex para que coincida con una cadena que conste sólo del mismo número repetido exactamente tres veces separado por espacios.

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Cambia esta línea
  // ^ = empieza con
  // (\d+) = numeros 1 o mas repeticiones
  // \s = espacio en blanco
  // \1 = variabletemp[1] // esto se repite 2 veces, mas la primera son 3
  // $ = terminar con (\1)


console.log(result) // true

repeatNum.match(reRegex) // [ '42 42 42', '42']



