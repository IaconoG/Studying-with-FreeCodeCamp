// Un componente funcional sin estado, es cualquier función que escribas que acepte props y devuelva JSX

// Un componente sin estado, es una clase que extiende React.Component, pero no usa el estado interno

// Un componente con estado es un componente de clase que mantiene su propio estado interno.


class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Cambia el código debajo de esta línea

const Camper = (props) => {
  return <p>{props.name}</p>
}
Camper.propTypes = {
  name: PropTypes.string.isRequired
}
Camper.defaultProps = {
  name: 'CamperBot'
}