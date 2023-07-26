//! Modifica un arreglo almacenado en un objeto

// El objeto user contiene tres claves. La clave data contiene cinco claves, una de las cuales contiene un arreglo de friends. 
// A partir de esto, puedes ver lo flexibles que son los objetos como estructuras de datos. 

// Hemos empezado a escribir una función addFriend. 
// Termina de escribirla para que tome un objeto user y agregue el nombre del argumento friend al arreglo almacenado en user.data.friends y devuelva ese arreglo.



let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Cambia solo el código debajo de esta línea
  userObj.data.friends.push(friend)
  return userObj.data.friends
  // Cambia solo el código encima de esta línea
}

console.log(addFriend(user, 'Pete'));