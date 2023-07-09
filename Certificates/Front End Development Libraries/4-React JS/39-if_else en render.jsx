class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Cambia el código debajo de esta línea

    return (this.state.display) 
      ? ( 
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      )
      : (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      )
        
      
  }
};


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Cambia el código debajo de esta línea
    if (this.state.display) {
      return ( 
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      )
      } else {
        return ( 
          <div>
            <button onClick={this.toggleDisplay}>Toggle Display</button>
          </div>
        )
      };    
  }
};