class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Cambia solo el código debajo de esta línea
    this.state = {
      firstName : "Gian"
    }
    // Cambia solo el código encima de esta línea
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};