const List = (props) => {
  { /* Cambia el código debajo de esta línea */ }
  return <p>{props.tasks.join(', ')}</p>
  { /* Cambia el código encima de esta línea */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Cambia el código debajo de esta línea */ }
        <List tasks={["walk dog", "workout"]}/>
        <h2>Tomorrow</h2>
        <List tasks={['a','b', 'c']}/>
        { /* Cambia el código encima de esta línea */ }
      </div>
    );
  }
};