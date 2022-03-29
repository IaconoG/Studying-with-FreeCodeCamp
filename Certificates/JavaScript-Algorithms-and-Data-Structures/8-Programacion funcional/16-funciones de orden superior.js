//! Utiliza las funciones de orden superior "map", "filter" o "reduce" para resolver un problema complejo

//todo/ Funciones de orden superior: map(), filter(), reduce()



//? Ejercicio

/*
  Completa el código para la función squareList usando cualquier combinación de map(), filter(), y reduce(). 
  La función debe devolver un nuevo arreglo que contenga los cuadrados de solamente los enteros positivos (números decimales no son enteros) cuando se le pasa un arreglo de números reales. 
  Un ejemplo de un arreglo que contiene números reales es [-3, 4.8, 5, 3, -3.2].

  Nota: Tu función no debe usar ningún tipo de bucle for o while o la función forEach().
 */



  
const squareList = arr => {
  // Cambia solo el código debajo de esta línea
  
  return arr
    // Filtraqmos todos los numeros que sean enteros
    // Y que sean mayores a 0
    .filter(num => Number.isInteger(num) && num > 0) 
    // Hacemos potencia de dos a todos los elemntos
    .map(num => Math.pow(num, 2));
  // Cambia solo el código encima de esta línea
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);



//-------- Repsuesta con reduce()

const squareList2 = arr => {
  return arr.reduce((sqrIntegers, num) => {
    return Number.isInteger(num) && num > 0 // Si es entero y positivo
      ? sqrIntegers.concat(num * num) // Anexamos un nuevo elemento al acumulador
      : sqrIntegers; // Devolvemos el acumulador
  }, []); // acumulador inicilizado como array vacio
};
  
  const squaredIntegers2 = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);