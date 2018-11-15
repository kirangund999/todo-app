import React from "react";
//import { connect } from "react-redux";

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default class TodoList extends React.Component {

    constructor(props){
        super(props);
        this.setState({"todos": props.todos});
    }

    render(){
        const todos = [];
        return (
            <div className="col-md-12">
                <h3 className="centerAlign">Todo List</h3>
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
                                <td>todo.name</td>
                                <td>todo.status</td>
                                <td><input type='checkbox'></input></td>
                                <td><a>Edit</a></td>
                                <td><a>Delete</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        );

    }
}
