// Coincide todas las letras y números

    // clases de caracteres abreviados  /\w/

// Todas las letras del alfabeto con [a-z]
// Atajo \w = [A-Za-z0-9_].

// También incluye el carácter de guión bajo (_)

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;


let numbers = "42";
longHand.test(numbers); // True

shortHand.test(numbers); // True


let varNames = "important_var";
longHand.test(varNames); // True

shortHand.test(varNames); // True


// Utiliza la clase de caracteres abreviada \w para contar el número de caracteres alfanuméricos en varias citas y cadenas.

let quoteSample = "The five boxing wizards jump quickly.";

let alphabetRegexV2 = /\w/g; 
    // \w = todas las letras y numeros
    // g = mas que una coincidencia

let result = quoteSample.match(alphabetRegexV2).length;
// 31



// Haz coincidir todo menos letras y números

