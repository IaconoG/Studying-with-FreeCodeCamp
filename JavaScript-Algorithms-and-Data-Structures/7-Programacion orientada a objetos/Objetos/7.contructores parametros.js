//! Extender constructores para recibir argumentos

//todo- Constructores con parametros, estos agrupan objetos basados en características y comportamiento compartidos, y definen un plano que automatiza su creación.
//todo- Al utilizar parametros en los constructores podemos reutilizarlos 


//? Ejercicio

// Crea otro constructor Dog y configúralo para que tome los parámetros name y color, y ten la propiedad numLegs fija a 4.
// Luego crea un nuevo Dog almacenado en una variable terrier. 
// Pasale dos cadenas de texto como argumentos para las propiedades name y color.


function Dog(name, color) {
  this.name = name
  this.color = color
  this.numLegs = 4
}

let terrier = new Dog('Pepe', 'Brown')

terrier.name;             // 'Pepe'
terrier.name = 'Ernesto'
terrier.name;             // 'Ernesto'


