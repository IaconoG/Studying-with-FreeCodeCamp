// ES6 proporciona una nueva sintaxis para crear objetos, usando la palabra clave class.

    // ES5

var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle('Jupiter');

    // ES6
    // La sintaxis 'class' remplaza la creacion de la fuincion constructor

class SpaceShuttleES6 {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

const zeusES6 = new SpaceShuttle('Jupiter')
