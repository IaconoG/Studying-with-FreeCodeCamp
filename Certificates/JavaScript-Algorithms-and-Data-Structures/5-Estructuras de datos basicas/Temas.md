# Lo que se ve en esta etapa del curso

    - Los datos pueden almacenarse y accederse de muchas maneras. Ya conoces algunas estructuras de datos comunes en JavaScript: 
        - Los arreglos
        - Los objetos.

    - En este curso de estructuras de datos básicas, aprenderás más acerca de las diferencias entre arreglos y objetos, y cuál usar en diferentes situaciones.

    - También aprenderás como usar métodos útiles de JavaScript como splice() y Object.keys() para acceder y manipular datos.



## ARREGLOS

arrgelosUnidimensionales = [2, 'hola', true, {}]

arrglosMultidimensionales = [2, 'hola', true, {}, [-2, 'chau', false, {}]]

Notacion de arreglos 

    arr[0] = primer elemento del arreglo
    arr[arr.length] = ultimo elemento del arreglo

### Methodos

    Agregar

    Ambos metodos utilizan paramentros 
        - push(item1, item2, ...) = agrega al final del arreglo
        - unshift(item1, item2, ...) = agrega al inicio del arreglo

    Eliminar

    No necesitan parametos
        - pop() = elimina el ultimo elemento del arreglo
        - shift() = elimina el primer elmento dle arreglo


    Splice()

    Este metodo nos permite agregar y elimina uno o mas elementos en cualquier parte de un arreglo

        Eliminar
            - splice(inicio, cantidadEliminar)
            - arr.splice(1, 2) // Elimina dos elementos partiendo del indice 1

        Agregar 
            - splice(inicio, cantidadEliminar, itemAnexar)
            - arr.splice(4, 0, item1, item2) // Agrega item1 y item2 de manera consecutiva en el indice 4 desplazando los demas elementos
        
        Modificar
            - splice(inicio, cantidadEliminar, itemAnexar)
            - arr.splice(2, 1, item1) // Elimina el item en el indice 2 del arr y anexa item1 en el mismo indice.

    
    Slice()

    Este metodo devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin.

        Extraer
            - slice(inicio, fin)
            - arr.slice(2) = Copia los lementos desde el indice 2 hasta arr.length

            - arr.slice(-2) = Copia los elemtnos contadod desde el final, desde el indice (arr.length-2) hasta el final

            - arr.slice( , 3) = Copia los lementos desde el indice 0 hasta el 3 sin copiar el 3

            - arr.slice(arr.lenght + 1) = Devulve un array vacio

    Spread Operator = ...

    La singaxis Spread permite a un elemento iterable tal como un arreglo o cadena ser expandido

        Expandir
            - ...arr
            - const arr = [1, 2, 3]
            - console.log(...arr) // 1 2 3 

    indexOf()

    El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente

        Buscar indice
            - arr.indexOf(searchElement, fromIndex)
            - searchElement = Elemento a buscar en el array
            - fromIndex = Indica el indice por el que se comienza la busqueda. Por defecto es 0.

            - arr = [2, 9, 9]
            - arr.indexOf(2); // 0
            - arr.indexOf(7); // -1
            - arr.indexOf(9); // 0
            

## OBJETOS

Son almacenes clave-valor que proporcionan una forma flexible e intuitiva de estructurar los datos, y, proporcionan un tiempo de búsqueda muy rápido

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
  
### Notacion
    
    Notacion de punto 
        Nos permite asignar, mostrar y crear propiedades.
        - objeto.propiedad = valor
        
        - tekkenCharacter.player = 'Gian'
        - tekkenCharacter = { player: 'Gian' }

    
    Notacion de corchetes
        Nos permite asignar, mostrar y crear propiedades.   
        Agregar propiedades con espacios y a travez de variables

        - objeto[propiedad] = valor 

        - const prop = 'Primer Nombre'
        - persona.prop = 'Gianfranco' 
        - persona = { 'Primer Nombre': 'Gianfranco' }

    
    Eliminar (delete)
        Nos permite eliminar propiedades de los objetos

        - delete objeto.propiedad

        - delete persona['Primer Nombre']

    
    Encontrar (in | hasOwnProperty())
        Busca en si la propiedad existe en el objeto, devolviendo un booleano

        - propiedad in objeto
        - 'Primer Nombre' in persona

        - objeto.hasOwnProperty(propiedad)
        - persona.hasOwnProperty('Primer Nombre')


    Iterar en un objeto (for-in)
        Itera sobre todas las propiedades enumerables de un objeto.

        - for (variable in objeto) { console.log(variable) } // Muestra 1 por 1 las keys del objeto

    
### Methodos

    Object.keys()
        Devuelve un array de las propiedades names de un objeto, en el mismo orden como se obtienen en un loop normal

        - Object.keys(obj)

        - const users = { Gian, Jeff, Sarah }
        - Object.keys(users) // [ 'Gian', 'Jeff', 'Sarah' ]



