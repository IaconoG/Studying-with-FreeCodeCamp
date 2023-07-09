// Define ADD, addMessage(), messageReducer(), y store aquí:
const ADD = 'ADD'

const addMessage = (msg) => {
  return {
    type: ADD,
    message: msg
  }
}

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD': 
      return [...state,action.message]
    default:
      return state
  }
};

const store = Redux.createStore(messageReducer);