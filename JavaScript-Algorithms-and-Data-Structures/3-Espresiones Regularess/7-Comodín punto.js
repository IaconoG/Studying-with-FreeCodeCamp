// Haz coincidir cualquier cosa con el comodín punto

// El carácter de comodín . coincidirá con cualquier carácter único
// Puedes utilizar el carácter de comodín como cualquier otro carácter en la expresión regular. 

// Por ejemplo, si quieres hacer coincidir hug, huh, hut, y hum, puedes usar la la expresión regular /hu./ pa

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;

huRegex.test(humStr); // true
huRegex.test(hugStr); // true


let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./;

let result = unRegex.test(exampleStr); // true