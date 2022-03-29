//! Utiliza el método "reduce" para analizar datos

//todo/ Array.prototype.reduce() o simplemente reduce() es la operación más común de todas para arreglos en JavaScript

//todo/ El método reduce permite formas más generales de procesamiento de arreglos y es posible mostrar que tanto filter como map pueden derivarse como aplicaciones especiales de reduce

/* 
 * El metodo reduce itera sobre cada elmento del arreglo.
 * Devuelve un solo valor (cadena, numero, objeto, arreglo).
 * 
 * Mediante una callback que se llama en cada iteracion.
  * La funcion callback acepta 4 argumentos  
    * 1. Acumulador, recibe el valor retornado de la funcion callback de la  iteracion anterior.
    * 2. Elemento, es el elemento actual que se esta procesando.
    * 3. Inidce, es el indice del elemento.
    * 4. Arr, es el arreglo sobre el que se llama la funcion reduce.
    * !!. valor inicioal, tiene un parametro adicional que toma un valor incial para el acumulador 
      / Si este parametro no se usa, entonces la primera iteracion se omite y la segundo se pasa por el primer elemento del arreglo como acumulador  
    * 
 */


//? Ejemplo

// Un ejemplo con reduce en el arreglo users para devolver la suma de todas las edades de los usuarios

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => { // (acumulador, elemento)
  return sum + user.age
}, 0) // valor inicial de acumulador

console.log(sumOfAges) // 64


// Se puede observar cómo un objeto puede ser devuelto con los nombres de los usuarios como propiedades con las edades como valores.

const users2 = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const userObj = users2.reduce( (obj, user) => {
  obj[user.name] = user.age
  return obj
}, {}) // valor incial del acumulador. un objeto vacio (esto para que no tome el primero elemtno del array como valor incial)

console.log(userObj)



//? Ejercicio

/*
La variable watchList contiene un arreglo de objetos con información sobre varias películas. 
Utiliza reduce para encontrar la calificación media en IMDB de las películas dirigidas por Christopher Nolan.
Recuerda de desafíos anteriores filtrar (filter) los datos y mapear (map) sobre ellos para extraer lo que necesitas. 
Puede que necesites crear otras variables y devolver la calificación media con la función getRating. 
Ten en cuenta que los valores de calificación se guardan como cadenas en el objeto y necesitan ser convertidos en números antes de ser utilizados en cualquier operación matemática.
*/

// La variable global
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList) {
  // Cambia solo el código debajo de esta línea

  // obtenemos el rating de las peliculas de cristopherNolan
  const moviesFromChristopherNolan = watchList
    .filter(movie => movie['Director'] === 'Christopher Nolan') // Filtramos solo las peliculas de crhis
    .map(movie => Number(movie['imdbRating'])) // mapeamos solo los rating de las peliculas
  
  const cantMoviesFromChristopherNolan = moviesFromChristopherNolan.length // obtenemos la cantidad de peliculas
  
  let averageRating = moviesFromChristopherNolan 
    .reduce( (acumulador, rating) => acumulador + rating) // calculamos el total de los rating de las pelicualas
    / cantMoviesFromChristopherNolan // Dividimos el total de ratin por la cantidad de peliculas para obtener el averageRating

  // Cambia solo el código encima de esta línea
  return averageRating;
}

console.log(getRating(watchList));


// ---- Resumido


function getRating2(watchList) {
  // Cambia solo el código debajo de esta línea

  // obtenemos el rating de las peliculas de cristopherNolan
  const averageRating = watchList
    // Filtramos solo las peliculas de crhis
    .filter(movie => movie['Director'] === 'Christopher Nolan') 

    // mapeamos solo los rating de las peliculas
    .map(movie => Number(movie['imdbRating'])) 

    // calculamos el total de los rating de las pelicualas
    .reduce( (acumulador, rating) => acumulador + rating) 

    // Dividimos el total de ratin por la cantidad de peliculas para obtener el averageRating
    / watchList.filter(movie => movie['Director'] === 'Christopher Nolan').length

  // Cambia solo el código encima de esta línea
  return averageRating;
}

console.log(getRating2(watchList));