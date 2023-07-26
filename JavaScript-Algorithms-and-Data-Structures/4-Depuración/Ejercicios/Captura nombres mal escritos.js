//! Captura nombres de variables y funciones mal escritos

// Los caracteres transpuestos, omitidos o mal escritos en el nombre de una variable o función harán que el navegador busque un objeto que no existe, y se queje en forma de error de referencia.
// Los nombres de variables y funciones de JavaScript distinguen entre mayúsculas y minúsculas.


//? Ejercicio 


// Corrige los dos errores ortográficos en el código para que funcione el cálculo de netWorkingCapital.

let receivables = 10;
let payables = 8;
// Corregir 
let netWorkingCapital = recievables - payable;
// let netWorkingCapital = receivables - payables;

console.log(`Net working capital is: ${netWorkingCapital}`);


