// Hemos definido una función llamada countdown con un parámetro (n). La función debe usar recursión para devolver un arreglo conteniendo los n enteros hasta 1 basado en el parámetro n. Si la función es llamada con un número menor a 1, la función debe devolver un arreglo vacío. Por ejemplo, llamar esta función con n = 5 debe devolver el arreglo [5, 4, 3, 2, 1]. Tu función debe usar recursión llamándose a sí misma y no debe usar bucles de ningún tipo.

// Cambia solo el código debajo de esta línea
function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const asd = countdown (n - 1)
      asd.unshift(n)
      return asd;
    }
  }
  // Cambia solo el código encima de esta línea

  console.log(countdown(10))