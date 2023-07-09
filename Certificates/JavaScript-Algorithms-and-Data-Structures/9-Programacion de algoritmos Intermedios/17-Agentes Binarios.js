//! Agentes binarios

//* Devuelve una frase traducida al inglés de una cadena binaria pasada.

//* La cadena binaria estará separada por espacios.

function binaryAgent(str) {
  return str
    .split(" ") // Dividimos le tipo string en un array, obteniendo cada palabra en binario como elemeto
    .map(
      // Mapeamos los elemtnos del string para poder convertirlos
      (el) =>
        String.fromCharCode(
          // Convertirmos el numero en una cadena mediante Unicode
          parseInt(
            // Convertimos el argumento de tipo cadena en un entero de base 2 (de binario a decimal)
            el.split("").join(""),
            2
              // .split = nos permite trabajr con cada elementos de la cadean
              // .join = unimos todos los elemetnos convertidos
              // 2 = representa la base de la cadena
          )
        )
    )
    .join(""); // Una vez finalizada la conversion, unimos los elementos del arr
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
// debe devolver la cadena Aren't bonfires fun!?
