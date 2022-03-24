//! Mapea el Debris



//* Devuelve un nuevo arreglo que transforma la altitud media de los elementos en sus periodos orbitales (en segundos).

//* El arreglo contendrá objetos en el formato {name: 'name', avgAlt: avgAlt}.

//* Puedes leer sobre los períodos orbitales en Wikipedia.

//* Los valores deben redondearse al número entero más cercano. El cuerpo orbitado es la Tierra.

//* El radio de la tierra es de 6367.4447 kilómetros y el valor GM de la tierra es de 398600.4418 km3s-2.



//todo link ::: https://es.wikipedia.org/wiki/Per%C3%Adodo_orbital



function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map((astro) => {
    // Cambiar el nombre de la key
    astro.orbitalPeriod = astro.avgAlt // Copiamos el valor de la key a eliminar
    delete astro.avgAlt // Elimnamos la key
    
    // Covertir valores
    astro.orbitalPeriod = Math.round(2 * Math.PI *Math.sqrt(Math.pow(earthRadius + astro.orbitalPeriod, 3)/GM))
    
    return astro
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) 
// debe devolver [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) 

// debe devolver [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].