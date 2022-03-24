//! Argumentos opcionales

//* Crea una función que sume dos argumentos. Si sólo se proporciona un argumento, entonces devuelve una función que espera un argumento y devuelve la suma.

//* Por ejemplo, addTogether(2, 3) debe devolver 5 y addTogether(2) debe devolver una función.

//* Si se llama a esta función devuelta con un solo argumento, se obtendrá la suma:

var sumTwoAnd = addTogether(2); // sumTwoAnd(3) devuelve 5.

//* Si cualquiera de los dos argumentos no es un número válido, devuelve undefined.

function addTogether() {
  const [primero, segundo] = arguments;
  if (typeof primero !== "number") return undefined; // primero no es un numero
  // Primero no es undefined, debemos analizar segundo
  if (segundo === undefined) {
    // segundo es undefined, devolvemos una funcion para que se ingrese otro numero
    return (segundoNuevo) => {
      return addTogether(primero, segundoNuevo);
    };
  }
  // Segundo existe, debemos analizar si es un numero
  if (typeof segundo !== "number") return undefined; // segundo no es un numero

  // Los dos parametros cumplen las condiciones para resolver la suma
  return primero + segundo;
}

addTogether(2, 3); // debe devolver 5.

addTogether(23, 30); // debe devolver 53.

addTogether(5)(7); // debe devolver 12.

addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); //debe devolver undefined.

addTogether(2); // debe devolver una funcion
