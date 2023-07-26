const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Cambia el código debajo de esta línea

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (msg) => {
      dispatch(addMessage(msg));
    }
  }
}