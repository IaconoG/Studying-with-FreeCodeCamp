//! Suma todos los números impares de Fibonacci

/*
 * Dado un entero positivo num, devuelve la suma de todos los números impares de Fibonacci que son menores o iguales a num.
 *
 * Los dos primeros números en la secuencia de Fibonacci son 1 y 1. Cada número adicional en la secuencia es la suma de los dos números anteriores. Los seis primeros números de la secuencia de Fibonacci son 1, 1, 2, 3, 5 y 8.
 * 
 * Por ejemplo, sumFibs(10) debe devolver 10 porque todos los números impares de Fibonacci menores o iguales a 10 son 1, 1, 3 y 5.
 */



function sumFibs(num) {
  if (num <= 0) return 0
  
  let numImpares = []
  const fibonacci = [1, 1]
  let nuevoNumero = 0
  
  while (nuevoNumero <= num) {
    if (fibonacci[0] % 2 !== 0) {
      numImpares.push(fibonacci[0])
    }
    nuevoNumero = fibonacci[0] + fibonacci[1]
    fibonacci.unshift(nuevoNumero)
  }
  
  return (num === 1) 
    ? numImpares = 1
  	: numImpares.reduce((a, b) => a + b) + 1;
}

sumFibs(4); // debe devolver 5.


sumFibs(1) // debe devolver un número.


sumFibs(1000) // debe devolver 1785.


sumFibs(4000000) // debe devolver 4613732.