// Encuentra más que la primera coincidencia  /g

// Utilizando la bandera 'g' se puede extraer un patron mas de una vez.

let testStr = 'Repeat, Repeat, Repeat';
let singleRegex = /Regex/; 
let multipleRegex = /Regex/g; 

let sinlgeResult = testStr.match(singleRegex) 
// [ 'Repeat', index: 0, input: 'Repeat, Repeat, Repeat', groups: undefined ]
`1`
let multipleResult = testStr.match(multipleRegex);
// [ 'Repeat', 'Repeat', 'Repeat' ]



let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;  

let result = twinkleStar.match(starRegex); 
// [ 'Twinkle', 'twinkle' ]