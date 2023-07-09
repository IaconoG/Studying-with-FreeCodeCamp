//! Factoriza un número

//todo- Devuelve el factorial del entero proporcionado.

// Si el número entero es representado con la letra n, un factorial es el producto de todos los enteros positivos menores o iguales a n.

// Los factoriales suelen representarse con la abreviatura n!

// Por ejemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Sólo se proporcionarán a la función los enteros mayores o iguales a cero.


function factorialize(num) {
  console.log(num)
  if(num === 1 || num === 0) {
    return 1
  } 
  return num * factorialize(num - 1);
}

factorialize(5);


// Funciona como la pelicula inseption, cuando van entrando suenio por suenio y luego, el return 1 los va devolveienod a los anteriores suenios hasta llegar al primer return  :DDD