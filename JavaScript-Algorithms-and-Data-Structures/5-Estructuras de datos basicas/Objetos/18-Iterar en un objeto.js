//! Itera a través de las claves de un objeto con una sentencia "for...in"

//todo- A veces es necesario iterar por todas las claves de un objeto. Esto requiere una sintaxis específica en JavaScript llamada sentencia for...in.


let usersa = {
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

for (let user in usersa) {
  console.log(user);
}

// Esto registrará Alan, Jeff, Sarah, y Ryan, cada valor en su propia línea.
//todo- La variable user se restablece durante cada iteración a cada una de las claves del objeto a medida que la sentencia hace un bucle a través del objeto

//todo- Los objetos no mantienen un orden para las claves almacenadas como lo hacen los arreglos; por lo tanto, la posición de una clave en un objeto es irrelevante


//? Ejercicio

// Hemos definido una función countOnline que acepta un argumento
// Utiliza una sentencia for...in dentro de esta función para iterar sobre el objeto usuarios (users) pasado a la función y devuelve el número de usuarios cuya propiedad online esté establecida como true

const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Cambia solo el código debajo de esta línea
  let cantUserOnline = 0
  for (const user in usersObj) { // 'user' es asignado como una varialbe string, por ende debemos usar la notacion de corchetes 
    if (usersObj[user].online) {
        cantUserOnline++
    }
  }
  return cantUserOnline
  // Cambia solo el código encima de esta línea
}

console.log(countOnline(users)); // 1

