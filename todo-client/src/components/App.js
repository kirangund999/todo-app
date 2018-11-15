
import React from "react";
import TodoList from "./TodoList";
const App = (props) => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
    <h2>Todos</h2>
      <TodoList />
    </div>
  </div>
);
export default App;
