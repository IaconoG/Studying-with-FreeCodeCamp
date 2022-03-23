//! Suma todos los números en un rango

/*
 * 
 * Te pasaremos un arreglo de dos números. Devuelve la suma de estos dos números más la suma de todos los números entre ellos. El número más bajo no siempre será el primero.
 * 
 * Por ejemplo, sumAll([4,1])> debe devolver 10 porque la suma de todos los números entre 1 y 4 (ambos incluidos) es 10. 
 */

function sumAll(arr) {
  for (i = Math.min(arr); i < Math.max(arr); index++) {
    console.log(i)
  }
}

sumAll([1, 4]);


function sumAll(arr) {
  return ((sumatoria = 0) => {
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sumatoria += i;
	}
    return sumatoria
  })()
}

sumAll([1, 4]) // debe devolver 10.

sumAll([4, 1]) // debe devolver 10.

sumAll([5, 10]) // debe devolver 45.



