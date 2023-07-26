//! Prevenir bucles infinitos con una condición terminal válida


// Los bucles infinitos pueden congelar o bloquear el navegador, y causar un caos en la ejecución del programa en general, lo que nadie quiere.

function loopy() {
  while(true) { //todo: BUCLE INFINITO AAAAAAAAAAAAAAAA
    console.log("Hello, world!");
    break;
  }
}



//? Ejercicio

// La función myFunc() contiene un bucle infinito porque la condición terminal i != 4 nunca se evaluará a false (y romperá el bucle) 
// i se incrementará en 2 en cada pasada, y saltará justo sobre 4, ya que i es impar para empezar.
// Corrige el operador de comparación en la condición terminal para que el bucle sólo se ejecute para i menor o igual a 4.


function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}