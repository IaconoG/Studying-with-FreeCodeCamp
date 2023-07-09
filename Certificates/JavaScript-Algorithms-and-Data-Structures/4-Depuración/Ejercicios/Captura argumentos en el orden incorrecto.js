//! Captura argumentos pasados en el orden incorrecto al llamar a una función

// Los argumentos de una función se suministran en el orden incorrecto.
// Si los argumentos son de tipos diferentes, es probable que se produzca un error de ejecución.


//? Ejercicio

// La función raiseToPower eleva una base a un exponente. 
// Desafortunadamente, no se llama correctamente - corrige el código para que el valor de power sea el 8 esperado.


function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp);
  console.log(power);