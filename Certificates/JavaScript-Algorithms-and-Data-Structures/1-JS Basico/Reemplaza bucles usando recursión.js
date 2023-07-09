function multiply(arr, n) {
  var product = 1;
  for (var i = 0; i < n; i++) {
      product *= arr[i];
  }
  return product;
}



function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

console.log(  multiply([1,2,3], 3))



/////////////


function sum(arr, n) {
  // Cambia solo el código debajo de esta línea
  if (n <= 0) {
    return 0;
  } else {
    return sum (arr, n - 1) + arr[n - 1]
  }
  // Cambia solo el código encima de esta línea
}


console.log(  sum([1,2,3], 3))