// Crea cadenas usando plantillas literales
    // Las plantillas literales te permiten crear cadenas multilínea y usar características de interpolación, para crearlas.

// `` = Nos permite envolver la cadena
// ${variable} = es un marcador de posicion
// La cadena es multi-línea tanto en el código como cuando se imprime en pantalla

// Ejemplo

const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  
  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  
  console.log(greeting); // 'Hello, my name is Zodiac Hasbro!
                         // I am 56 years old.'


const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    
    const failureItems = new Array();
    for (const item of arr) {
        failureItems.push(`<li class="text-warning">${item}</li>`)
    }
    // for (let i=0; i < arr.length; i++) {
    //     failureItems[i] = `<li class="text-warning">${arr[i]}</li>`    
    // }
    
    return failureItems;
}

const failuresList = makeList(result.failure);                         