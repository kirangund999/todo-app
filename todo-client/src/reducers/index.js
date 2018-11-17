import { combineReducers } from 'redux';

const initialState = {
  todos: [{"name":"AAAA", "status": "Pending"}],
  openTodoModal : false
};
const todoReducer = (state = initialState.todos, action) => {

  switch (action.type) {
    case  "ADD_NEW_TODO" :
    return [...state, action.payload];

    default :
      return state;

  }
};

const appReducer = (state = initialState, action) => {
  switch(action.type){
    case  "OPEN_ADD_TODO" :
      return true;

    default :
      return state;

  }
}

export default combineReducers({
  openTodoModal : appReducer,
  todos: todoReducer
});