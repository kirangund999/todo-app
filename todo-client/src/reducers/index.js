import { combineReducers } from 'redux';

const initialState = {
  todos: [{"name":"AAAA", "status": "Pending"}],
  openTodoModal : false
};
const todoReducer = (state = initialState, action) => {

  switch (action.type) {
    case  "OPEN_ADD_TODO" :
    return {
      ...state,
      openTodoModal : true
    }

    default :
      return state;

  }
};

export default combineReducers({
  todos : todoReducer
});