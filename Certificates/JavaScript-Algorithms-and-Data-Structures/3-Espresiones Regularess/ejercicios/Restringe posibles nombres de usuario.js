// Restringe posibles nombres de usuario

// Se necesita comprobar todos los nombres de usuario en una base de datos. Estas son algunas reglas simples que los usuarios deben seguir al crear su nombre de usuario.

    // 1. Los nombres de usuario sólo pueden utilizar caracteres alfanuméricos.

    // 2. Los únicos números del nombre de usuario tienen que estar al final. Puede tener un cero o más al final. El nombre de usuario no puede iniciar con un número.

    // 3. Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

    // 4. Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres sólo puede utilizar letras del alfabeto como caracteres.



let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$ | ^[a-z]\d\d+$/i; // Los espacio no van pero solo es para comprender
    // ^ = comienzo del input
    // [a-z] = primer caracter es una letra
    // [a-z]+ = siguientes caracteres son letras
    // \d*$  = final del input con 0 o mas digitos

    // | = or

    // ^[a-z] = si el primer caracter NO es una letra
    // \d\d+ = los siguietnes 2 o mas caracteres son digitos 
    // $ = final del input


let userCheck = /^[a-z]([0-9]{2,} | [a-z]+\d*)$/i; // Los espacio no van pero solo es para comprender
    // ^ = comienzo del input
    // [a-z] = primer caracter es una letra
    // ()$ = grupo de captura en final de caracter
    // [0-9]{2,} = termina con dos o mas numeros
        // [0-9] = numeros
        // {2,} = cantidad de apariciones
    
    // | = or

    // [a-z]+ = termina con one o mas letres
    // \d*  = termina del input con 0 o mas digitos


let result = userCheck.test(username); // false