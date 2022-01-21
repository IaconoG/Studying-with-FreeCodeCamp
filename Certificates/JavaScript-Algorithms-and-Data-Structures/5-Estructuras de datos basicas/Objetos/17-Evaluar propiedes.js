//! Evalúa si un objeto tiene una propiedad

//todo- JavaScript nos proporciona dos maneras diferentes de hacerlo.
  //todo- el método "hasOwnProperty()"
  //todo- la palabra clave "in"


//? Ejercicio 

// Termina de escribir la función para que devuelva "true" sólo si el objeto pasado contiene los cuatro nombres, Alan, Jeff, Sarah y Ryan, y devuelve false de lo contrario.

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  let isEveryone = true
  for (let i = 0; i < ['Alan', 'Jeff', 'Sarah', 'Ryan'].length; i++) {
    if (!(['Alan', 'Jeff', 'Sarah', 'Ryan'][i] in userObj)) { // Al primer nombre que no este presente en el objeto devolvemos false
      isEveryone = false
      break
    }
  }
  return isEveryone
  // Cambia solo el código encima de esta línea
}

console.log(isEveryoneHere(users));


//? Another solution


function isEveryoneHere2(userObj) {
  // Cambia solo el código debajo de esta línea
  return ['Alan', 'Jeff', 'Sarah', 'Ryan'].every(name => // Al no tener corchetes se usa una sola linea la cual va a ser devueltea con un return implicito 
    userObj.hasOwnProperty(name)
  );
  // Cambia solo el código encima de esta línea
}

console.log(isEveryoneHere2(users));