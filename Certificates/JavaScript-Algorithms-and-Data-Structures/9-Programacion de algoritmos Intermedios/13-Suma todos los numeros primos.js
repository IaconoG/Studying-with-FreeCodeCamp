//! Suma todos los números primos

/*
 * Un número primo es un número entero mayor que 1 con sólo dos divisores: 1 y el propio número.
 * Por ejemplo, 2 es un número primo porque sólo es divisible entre 1 y 2.
 * Por el contrario, 4 no es primo ya que es divisible entre 1, 2 y 4.
 *
 * Reescribe sumPrimes para que devuelva la suma de todos los números primos que sean menores o iguales a num.
 */

function sumPrimes(num) {
  if (num < 2) return num;

  return Array(num - 1)
    .fill(0)
    .map((_, indice) => indice + 2)
    .filter((num) => {
      let esPrimo = true;
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          esPrimo = false;
          break;
        }
      }
      if (esPrimo) return num;
    })
    .reduce((a, b) => a + b);
}

console.log(3 % 2 !== 0);

sumPrimes(1); // debe devolver un número.

sumPrimes(10); // debe devolver 17.

sumPrimes(977); // debe devolver 73156.

