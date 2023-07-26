//! Comprende los peligros de usar el código imperativo

//todo/ La programación funcional es un buen hábito. Mantiene tu código fácil de manejar y evita que tengas errores incómodos.

/*
  * Tipos de programacion: Imperativa y Funcional

    * Un estilo Imperativo, de progamacion es aquel que le da a la computadora un conjunto de sentencia para llevar a cabo una tarea.
      * A menudo las sentencias cambia el estado del programa, como actualizar variables globales. Por ejemplo un bucle FOR trabajando con indices de un arreglo.
  
    * Un estilo Funcional, es una forma de progamacin declarativa. le dice al ordenador lo que quieres hacer llamando a un metodo o funcion.

  * JS ofrece muchos metodos predefinidos que maneja tareas comunes. Por ejemplo, en lugar de usar un bucle for, se podria llamar al metodo map que maneja los detalles de iteracion sobre un array.  
*/


//? Ejercicio

// Examine el código en el editor. Está utilizando un método que tiene efectos secundarios en el programa, causando un comportamiento incorrecto. La lista final de pestañas abiertas, almacenadas en finalTabs.tabs deberia ser (1) pero la lista producida por el código es un poco diferente.

// (1)['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']

// Cambia Window.prototype.tabClose para que elimine la pestaña correcta.




// tabs es un arreglo de títulos de cada sitio abierto dentro de la ventana
const Window = function(tabs) {
  this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
};

// Cuando unes dos ventanas en una
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// Cuando abres una nueva pestaña al final
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Abramos una nueva pestaña por ahora
  return this;
};

// Cuando cierras una pestaña
Window.prototype.tabClose = function(index) {

  // Cambia solo el código debajo de esta línea

  /*
    * slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin 
    
    * splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. // Modifica el array original.
  */

  const tabsBeforeIndex = this.tabs.slice(0, index); // Obtiene las pestañas antes de la pestaña
  const tabsAfterIndex = this.tabs.slice(index + 1); // Obtiene las pestañas después de la pestaña

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos

  // Cambia solo el código encima de esta línea

  return this;
 };

// Vamos a crear tres ventanas del navegador
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Tu casilla de correo, drive y otros sitios de trabajo
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sitios sociales
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sitios de entretenimiento

// Ahora completa la apertura de la pestaña, cierre, y otras operaciones
const finalTabs = socialWindow
  .tabOpen() // Abre una nueva pestaña para memes de gatos
  .join(videoWindow.tabClose(2)) // Cierra la tercera pestaña en videoWindow y une
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);