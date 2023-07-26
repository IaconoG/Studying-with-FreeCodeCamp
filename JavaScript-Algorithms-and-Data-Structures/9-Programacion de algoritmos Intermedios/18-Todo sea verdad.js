//! Todo sea verdad

/*
 * Comprueba si el predicado (segundo argumento) es truthy en todos los elementos de una colección (primer argumento).

 * En otras palabras, se te da una colección de arreglos de objetos. El predicado pre será una propiedad del objeto y debe devolver true si su valor es truthy. De lo contrario, devuelve false.

 * En JavaScript, los valores truthy son valores que se traducen en true cuando se evalúan en un contexto booleano.

 * Recuerda, puedes acceder a las propiedades del objeto mediante la notación de puntos o la notación de corchetes [].
 */


function truthCheck(collection, pre) {
  collection.map(obj => console.log(obj[pre]))
  return collection.every(obj => obj[pre])
  	// .every = nos permite comprobar cada elemento del array
  		// obj[] = la notacion por corchetes nos permite utilizar la variable pre como nombre de la key
  		// obj[pre] = retorna un valor booleano dependiendo del valor de si mismo
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
); // debe devolver true.

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
); // debe devolver false.

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male", age: 0 },
    { user: "Dipsy", sex: "male", age: 3 },
    { user: "Laa-Laa", sex: "female", age: 5 },
    { user: "Po", sex: "female", age: 4 },
  ],
  "age"
); // debe devolver false.



/// Nos permite verificar las key comparandolas con pre 

function truthCheck(collection, pre) {
  return collection.every((el) => Object.keys(el).some((key) => key === pre));
}

function truthCheck(collection, pre) {
  return collection.every(
    // Comprobamos que todos los elementos (objetos en este caso) del array cumplan con la condicion, en donde por lo menos uno de las key del elemento cumpla con la condicion
    (el) =>
      Object.keys(el) // Obtenemos todas las key de cada elemento
        .some(
          // Comprobamos si alguna de las key cumple con la condicion
          (key) => key === pre //  Condicion en donde key debe ser igual a 'pre'
        )
  );
}