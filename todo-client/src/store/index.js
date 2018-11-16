import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer, {
    todos: [{"name":"AAAA", "status": "Pending"}],
    openTodoModal : false
  });
export default store;