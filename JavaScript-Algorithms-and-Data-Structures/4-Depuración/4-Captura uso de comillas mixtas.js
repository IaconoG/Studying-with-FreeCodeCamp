//! Captura el uso mixto de comillas simples y dobles


// JavaScript permite el uso de comillas simples (') y dobles (") para declarar una cadena. Decidir cuál usar se reduce generalmente a la preferencia personal, con algunas excepciones.
// Tener dos opciones es genial cuando una cadena tiene contracciones u otro fragmento de texto que está entre comillas. 


//? Ejemplos

const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";

const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';


//  Puedes escapar las comillas dentro de una cadena usando el carácter de barra diagonal invertida (\):

const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';


//? Ejercicio

// Corrige la cadena para que use comillas diferentes para el valor de href, o realiza un escape de las existentes. Mantén las comillas dobles alrededor de toda la cadena


let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);