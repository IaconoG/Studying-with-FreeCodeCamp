// -- Crea un módulo para scripts --

// Para aprovechar esta funcionalidad, necesitas crear un script en tu documento HTML con un type de module

    <script type="module" src="filename.js"></script>


// -- Utiliza la exportacion para comparti un bloque de codigo --

                        //      EXPORT      //

// Exportar un modulo
export const add = (x, y) => { // Toma dos números y devuelve su suma
  return x + y;
}

// Exportar mas de un modulo
const add = (x, y) => {
  return x + y;
}

const substract = (x, y) => {
  return x - y
}
  
export { add, substract };


                        //      IMPORT      //
// Import te permite elegir qué partes de un archivo o módulo cargar


// Importar un modulo
import { add } from './math_functions.js';
    // Encontrará add en math_functions.js, importa sólo esa función e ignora el resto.

// Importa mas de un modulo
import { add, substract } from './math_functions.js';
    //importar más de un elemento del archivo




                        //      Use * para importar todo de un archivo      //

// Para importar todo el contenido en el archivo actual se utiliza la sintaxix 'import * as'           
import * as myMathModule from "./math_functions.js";
    // myMathModule es el nombre de la variable que contiene los import
myMathModule.add(2,3)
myMathModule.substract(5,3)



                            //      EXPORT DEFAULT      //

// Esta sintaxis, es sólo un valor el que está siendo exportado desde un archivo. 
// También es utilizado para crear valores fallback para un archivo o módulo.

// Sólo puedes tener un valor que sea exportación por defecto en cada módulo o archivo // IMPORTANTE 

export default function(x, y) {
    return x + y;
  }


                            //      IMPORT DEFAULT      //

// El valor importado, no está rodeado por llaves ( {} )
// Es simplemente un nombre de variable, para cualquiera que sea la exportación por defecto del archivo

import add from "./math_functions.js";
