# Programación orientada a objetos

  - OOP, o programación orientada a objetos, es uno de los principales enfoques del proceso de desarrollo de software. 
  - En OOP, los objetos y las clases son utilizadas para organizar código y para describir lo que pueden hacer.

  - En este curso, aprenderás los principios básicos de OOP en JavaScript incluyendo la palabra clave this, cadenas prototipo, constructores, y herencias.



## Objeto

  - Crear

    objeto = {
      propiedad1 = valor
      propiedad2 = valor
      ... = ...
    }

  - Notacion de punto
    Acceder al valor de una propiedad del objeto

    console.log(obj.propiedad1) 

  - Metodos
    Agregan diferentes comportamientos a los objetos

    objeto = {
      propiedad1: valor
      propiedad2: valor
      ... = ...

      methodo: function () { return objeto.propiedad1 + objeto.propiedad2 }
    }


  - this
    Acceder al valor de una propiedad del objeto sin importar el nombre del objeto
    - this dentro del constructor siempre se refiere al objeto que se está creando.

    objeto = {
      propiedad1: valor
      propiedad2: valor
      ... = ...

      methodo: function () { return this.propiedad1 + this.propiedad1 }
    }


  - Constructor 
    Las funciones Constructors crean nuevos objetos, definen propiedades y comportamientos pero no devuelven nada

    function Dog() {
      this.propiedad1 = valor
      this.propiedad2 = valor
      this.... = ...
    }

  - Constructor con parametros
    Al utilizar parametros en los constructores podemos reutilizarlos 

    function Dog(valor1, valor2) {
      this.propiedad1 = valor1
      this.propiedad2 = valor2
      this.... = ...
    }

    const salchicha = new Dog(valo1, valor2)
    const almena = new Dog(valor1, valor2)

  
  - Verificar el constructor de la instancia 
    instanceof permite comparar un objeto con un constructor, devuelve true o false basado en si ese objeto fue creado o no con dicho constructor

    function House(valor) {
      this.propiedad = valor;
    }

    const myHouse = new House(valor)
    myHouse instanceof House;   // true

  - Propiedades

    - directas
      Las propiedades directas se definen directamente en la propia instancia del objeto

      function Dog() {
        this.propiedad1 = valor
        this.propiedad2 = valor
        this.... = ...
      }

    - prototype
      Las propiedades prototype se definen en el prototype
      Las propiedades del prototype se comparten entre TODAS las instancias del objeto


      function Dog() {
        this.propiedad1 = valor
      }

      Dog.prototype.propiedad = valor
    
    - methodos
      
      - hasOwnProperty
        Devuelve un booleano indicando si el objeto tiene la propiedad especificada.

        Object.prototype.hasOwnProperty()
      