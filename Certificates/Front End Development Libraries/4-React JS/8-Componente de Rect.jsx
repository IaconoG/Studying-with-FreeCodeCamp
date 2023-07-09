/*
  Otra forma de definir un componente React es con la sintaxis de clase de ES6 class
*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Cambia el código debajo de esta línea
    return  (
      <div>
        <h1>Hello React!</h1>
      </div>
    ) 

    // Cambia el código encima de esta línea
  }
};