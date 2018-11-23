import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {openAddTodoDialog, editStatus, deleteTodo, addNewTodo, fetchTodos} from '../actions/TodoActions';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
}

const mapDispatchToProps = {
    openAddTodoDialog, editStatus, deleteTodo, addNewTodo, fetchTodos
}

//const mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);