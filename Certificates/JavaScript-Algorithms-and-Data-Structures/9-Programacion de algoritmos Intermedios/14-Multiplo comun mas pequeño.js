//! Múltiplo común más pequeño

// Encuentra el múltiplo común más pequeño de los parámetros proporcionados que pueden dividirse equitativamente por ambos, así como por todos los números consecutivos del rango entre estos parámetros.

// El rango será un arreglo de dos números que no necesariamente estarán en orden numérico.

// Por ejemplo, si se dan 1 y 3, encuentra el múltiplo común más pequeño de 1 y 3 que también es dividido por todos los números entre 1 y 3. La respuesta sería 6.

function smallestCommons(arr) {
  //
  const [min, max] = arr.sort((min, max) => min - max);
  // Creamos un rango de los de los numeros consecutivos entre los parametros
  const rangoNumeros = Array(max - min + 1)
    .fill(0)
    .map((_, indice) => indice + min);
  // Set variables
  let mutiploComun = min;
  let multiplicador = min;

  // Comprobamos si uno de los resutados de la tabla de multiplicar del numero mayor, es divisible por todos los numeros del rango de numeros. El bucle finalizara cuando se encuentre el primer multiplo comun (el mas pequeño)
  while (!rangoNumeros.every((num) => mutiploComun % num === 0)) {
    mutiploComun = max * multiplicador; // Siguiente numero en la tabla de multiplicar de max
    multiplicador++; // Siguiente multiplicador
  }
  return mutiploComun;
}

smallestCommons([1, 5]); // debe devolver 60

smallestCommons([2, 10]); // debe devolver 2520.






function smallestCommons(arr) {
  const [min, max] = arr.sort((min, max) => min - max);

  const rangoNumeros = Array(max - min + 1)
    .fill(0)
    .map((_, indice) => min + indice);

  console.log(rangoNumeros);

  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }

  let multiplicacionesDeMax = [];
  for (let i = 2; i <= upperBound; i++) {
    multiplicacionesDeMax.push(i * max);
  }

  let multiploComun = 0;
  let esMultiploDeTodos = false;

  for (i = 1; i < multiplicacionesDeMax.length; i++) {
    esMultiploDeTodos = true;
    for (j = 1; j <= max; j++) {
      console.log(multiplicacionesDeMax[i] % rangoNumeros[j]);
      if (multiplicacionesDeMax[i] % rangoNumeros[j] !== 0) {
        esMultiploDeTodos = false;
        break;
      }
    }
    if (multiplicacionesDeMax[i] === 60) break;
  }
  return multiploComun;
}

// smallestCommons([1,5]);

smallestCommons([5, 1]); //  debe devolver 60.

//smallestCommons([2, 10]) // debe devolver 2520.
