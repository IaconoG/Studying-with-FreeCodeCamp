//! Elimina espacio en blanco del inicio y final

// El metodo .trim() funciona pero tambien se puede lograr con expresiones regualres


//? Ejercicio

// Escribe una expresión regular y usa los métodos de cadena apropiados para eliminar espacios en blanco al principio y al final de las cadenas.

let hello = "  Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Cambia esta línea
let result = hello.replace(wsRegex, ''); // Cambia esta línea
// Hello, World!


    // ^ = patrones iniciales
    // \s = espacio en blanco
    // + = 1 o mas repeticiones
        // ^\s+ = nos permite identificar 1 o mas espacios en blanco al principio de la palabra
    
    // | = or
        // esta condicion o la otra
    
    // \s = espacio en blanco
    // + = 1 o mas repeticiones
    // $ = patrones finales
        // \s+$ = nos permite identificar 1 o mas espacios en blanco al finanl de la palabra
    
    // /g = mas que una coincidencia 
        // la coincidencia del incio y del final

    
    
console.log(hello.trim())