/// Usa sintaxis de desestructuración para extraer valores de objetos

//  La sintaxis de desestructuración es una sintaxis especial introducida en ES6, para asignar los
//  valores directamente desde un objeto. 



const user = { 
  nombre: "John Doe", 
  age: 34 
};


///              ES5
  // Asignacion de valores a variables usando ES5
  const nombreES5 = user.nombre; 
  const ageES5 = user.age; 
  console.log(nombreES5) // 'Jhon Doe'
  console.log(ageES5) // 34


///              ES6
  // Aquí, las variables name y age serán creadas y se asignarán los valores respectivos a partir del objeto user
  // Asignacion de valores a variables usando ES6
  const { nombre, age } = user; 
  console.log(nombre) // 'Jhon Doe'
  console.log(age) // 34

  // La desestructuracion permite ASIGNAR NUEVOS NOMBRES de varialbe al extraer valores. 
  const { nombre: nombreES6, age: ageES6 } = user; 
  console.log(nombreES6) // 'Jhon Doe'
  console.log(ageES6) // 34


/// Desestructuración para asignar variables desde objetos anidados

const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };


// Extraccion y asignacion a variables con el mismo nombre 

const { johnDoe: { age, email }} = user;

console.log(age)
console.log(email)

// Extraccion y asignacin a variables con diferentes nombres

const { johnDoe: { age: userAge, email: userEmail }} = user;

console.log(userAge)
console.log(userEmail)


// Desestructuración con el parámetro rest para reasignar elementos de un arreglo

const element = [a, b, ...arr] = [1, 2, 3, 4, 5, 7];

console.log(element)
console.log(a, b);
console.log(arr);


// Sintaxis de desestructuración con el parámetro rest para reasignar elementos de un arreglo
  
// Similar a array.slice()
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]


// Desestructuracio en funciones 

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0; 
