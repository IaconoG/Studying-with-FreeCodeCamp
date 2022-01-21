// EnCuentra uno o más Criminales en una CaCería

// EsCribe una expresión regular CodiCiosa que enCuentre uno o más Criminales dentro de un grupo de personas. Un Criminal está representado por la letra mayúsCula C.

let reCriminals = /C+/g; 

//* Bien 

"C".match(reCriminals)
"CCCCCC".match(reCriminals)
"ABCCCCC".match(reCriminals)
"CCCCABC".match(reCriminals)
"abCCCCCCCCCCCCCCCCCCCCCCabz".match(reCriminals)
