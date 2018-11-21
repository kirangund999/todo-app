import React from "react";
import { connect } from "react-redux";
import Todo from '../containers/TodoContainer';

export default class TodoList extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = { isOpen: false };
        this.handlCheckBox = this.handlCheckBox.bind(this);
    }

    handlCheckBox = (e) => {
        let tId = e.target.id;
        let selTodo = {};
        const todos = this.props.todos;
        for(let i=0, len = todos.length; i<len; i++){
            if(todos[i]._id == tId){
                selTodo.id = todos[i];
                break;
            }
        }
        if(e.target.checked){
            selTodo.status = "Completed";
        }else{
            selTodo.status = "Pending";
        }
        this.props.editStatus(selTodo);
    }

    toggleModal = (e) => {        
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    onTodoSave = (todo) => {
        
        this.props.addNewTodo(todo);
        this.toggleModal();
    }

    componentWillMount(){
        this.props.fetchTodos();
    }

    render(){
        const todos = this.props.todos;
        return (
            <div className="col-md-12">
                <h3 className="centerAlign">Todo List</h3>
                <button onClick={this.toggleModal}>Add Todo</button> 
                        <Todo show={this.state.isOpen} toggleModal={this.toggleModal} submitForm = {this.onTodoSave}/>
                <table className="table booksTable">
                    <thead>
                        <th>Todo</th>
                        <th>Status</th>
                        <th>Completed?</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {todos.map(todo => (
                            <tr key={todo.id}>
                                <td >{todo.name}</td>
                                <td >{todo.status}</td>
                                <td><input type='checkbox' onChange={this.handlCheckBox} id={todo._id} checked={todo.status=="Completed"} ></input></td>
                                <td><a onClick={this.props.opendeleteTodoDialog}>Delete</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        );

    }
}


