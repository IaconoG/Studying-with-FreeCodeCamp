const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Cambia el código debajo de esta línea
  return (action.type === 'LOGIN') ? {login: true} : state;
  // Cambia el código encima de esta línea
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};