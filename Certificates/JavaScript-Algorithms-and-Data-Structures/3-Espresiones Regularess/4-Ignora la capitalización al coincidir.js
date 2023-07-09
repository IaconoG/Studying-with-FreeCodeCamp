// Ignora la capitalización al coincidir

// La capitalización (o también llamada capitalización de letra) es la diferencia entre mayúsculas y minúsculas.

// Puedes coincidir ambos casos utilizando algo llamado bandera 'i'

// /ignorecase/i = ignorecase, igNoreCase e IgnoreCase.

let myString = 'freeCodeCamp';
let fccRegex = /frEecodecaMp/i;

let result = fccRegex.test(myString);

console.log(result)