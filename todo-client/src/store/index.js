import { createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';

const store = createStore(
                rootReducer, 
                {
                  todos: [{"id" : 1, "name":"AAAA", "status": "Pending"}],
                  openTodoModal : false
                },
                applyMiddleware(thunk)
              );
export default store;