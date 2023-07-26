//! Confirma el final

// Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).


function confirmEnding2(str, target) {
  return str.endsWith(target);
    // endsWith() = determina si una cadena de texto termina con los caracteres de una cadena determinada
}

confirmEnding2("Bastian", "n");

// Expreciones Regulares

function confirmEnding(str, target) {
  return new RegExp(`${target}$`, 'i').test(str)
    // new RegExp = Nos permite crear una nueva expresoin regular
    // `` = Plantillas literales
    // ${} = nos permite colocar una varialbe dentor de la platnilla literal
    // $ = patrones finales 
    // i = mayusculas y minusculas
}

confirmEnding("Bastian", "n");
