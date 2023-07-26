// Objetos literales.

const getMousePosition = (x, y) => ({
  x: x,
  y: y,
});

    // ES6
    // Eliminar la redundancia de tener que escribir x: x

const getMousePositionES6 = (x, y) => ({ x, y });

// Funciones breves y declarativas con ES6

const person = {
  name: "Taylor",
  sayHello: function () {
    return `Hello! My name is ${this.name}.`;
  },
};

    // ES6
    // Elimina la palabara clave 'functin' y los dos puntos al definir funciones en objetos

const personES6 = {
    name: 'Taylor',
    sayHello() {
        return `Hello! My name is ${this.name}`
    }
}

