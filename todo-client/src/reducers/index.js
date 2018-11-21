import { combineReducers } from 'redux';

const initialState = {
  todos: [{"name":"AAAA", "status": "Pending"}],
  openTodoModal : false
};
const todoReducer = (state = initialState.todos, action) => {

  switch (action.type) {
    case  "ADD_NEW_TODO_REQUEST_SUCCESS" :
      return [...state, action.todo];

    case "FETCH_TODO_REQUEST_SUCCESS" :
      return action.todos;

    case "EDIT_STATUS_REQUEST_SUCCESS" : {
      return state.map(todo => {
          if(todo._id == action.todo._id){
            return action.todo;
          }
          return todo;
      });
      
    }

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