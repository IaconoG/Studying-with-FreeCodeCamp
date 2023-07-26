//! Captura los errores por uno al utilizar indexación


// Cuando se utilizan métodos de cadenas o arreglos que toman rangos de índices como argumentos, es útil leer la documentación y entender si son inclusivos
// (el elemento en el índice dado es parte de lo que se devuelve) o no. Estos son algunos ejemplos de errores por un paso:


//? Ejercicio

// Corrige los dos errores de indexación en la siguiente función para que todos los números del 1 al 5 se impriman en la consola.


function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Cambia solo el código debajo de esta línea
    for (let i = 0/*1*/; i </*=*/ len; i++) {
    // Cambia solo el código encima de esta línea
        console.log(firstFive[i]);
    }
}

countToFive();

// 1 2 3 4 5