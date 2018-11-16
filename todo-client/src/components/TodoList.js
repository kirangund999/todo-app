import React from "react";
import { connect } from "react-redux";
import Todo from './Todo';

export default class TodoList extends React.Component {

    constructor(props){
        super(props);
        this.setState({"todos": props.todos});
    }

    render(){
        const todos = this.props.todos;
        return (
            <div className="col-md-12">
                <h3 className="centerAlign">Todo List</h3>
                <button onClick={this.props.openAddTodoDialog}>Add Todo</button>
                {
                    this.props.openTodoModal && 
                    <Todo/>
                }
                <table className="table booksTable">
                    <thead>
                        <th>Todo</th>
                        <th>Status</th>
                        <th>Completed?</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {todos.map(todo => (
                            <tr key={todo.id}>
                                <td >{todo.name}</td>
                                <td >{todo.status}</td>
                                <td><input type='checkbox' onChange={this.props.editStatus}></input></td>
                                <td><a onClick={this.props.opendeleteTodoDialog}>Delete</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        );

    }
}


