//! Captura los paréntesis de apertura y cierre que faltan después de una llamada a una función


// Cuando una función o método no recibe argumentos, puedes olvidarte de incluir los paréntesis de apertura y cierre (vacíos) al llamarla.
// Este error puede detectarse registrando los valores de las variables (o sus tipos) en la consola y viendo que uno de ellos se establece como una referencia a la función.


//? Ejemplo

function myFunction() {
    return "You rock!";     
}
let varOne = myFunction;   // myFunction()
let varTwo = myFunction(); // 'You rock!


//? Ejercicio

// Corrige el código para que la variable result se establezca en el valor devuelto al llamar a la función getNine.


function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result = getNine();
  console.log(result);