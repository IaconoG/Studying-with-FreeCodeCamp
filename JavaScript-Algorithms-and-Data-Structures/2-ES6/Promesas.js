// -- Crea una promesa de JavaScript --

// Se utiliza para hacer una promesa de que harás algo, habitualmente de forma asíncrona.
// Promise es una función constructora, así que se necesitas usar la palabra clave new
// Recibe una función como su argumento, con dos parámetros: resolve y reject. 
    // Estos métodos se utilizan para determinar el resultado de la promesa.


const myPromise = new Promise((resolve, reject) => {

});


// -- Estados de la promesa --

// Una promesa tiene tres estados: 'pending', 'fulfilled', y 'rejected' (pendiente, cumplida, rechazada)
    // resolve se utiliza cuando quieres que tu promesa tenga éxito.
    // reject se usa cuando quieres que falle. 

const myPromise = new Promise((resolve, reject) => {
    let condition;

    if(condition) {
        resolve("Promise was fulfilled");
    } else {
        reject("Promise was rejected");
    }
});


// -- Maneja una promesa cumplida usando then --

    // El método 'then', se ejecuta inmediatamente después de que tu promesa se cumple con 'resolve'

myPromise.then(result => {
    console.log(result) // 'Promise was fulfilled'
});
    // 'result' viene con el argumento proporcionado al método 'resolve'.


// -- Maneja una promesa rechazada usando catch --

    // El metodo 'catch', es utilizado cuando la promesa ha sido rechazada, se ejecuta inmediatamente despues de q se llama al metodo reject 

myPromise.catch(error => {
    console.log(error)
});
    // 'error' es el argumento pasado al método reject.