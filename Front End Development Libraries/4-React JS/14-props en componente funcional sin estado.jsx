const CurrentDate = (props) => {
  return (
    <div>
      { /* Cambia el código debajo de esta línea */ }
      <p>The current date is: {props.date}</p>
      { /* Cambia el código encima de esta línea */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Cambia el código debajo de esta línea */ }
        <CurrentDate date={Date()}/> {/*  The current date is: Sun Feb 05 2023 22:51:16 GMT-0300 (hora estándar de Argentina) */}
        {/* <CurrentDate date={new Date().toLocaleDateString()}/> // '4/2/2023' */}
        { /* Cambia el código encima de esta línea */ }
      </div>
    );
  }
};