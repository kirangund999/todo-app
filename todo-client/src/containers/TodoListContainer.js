import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {openAddTodoDialog, editStatus, opendeleteTodoDialog, addNewTodo} from '../actions/TodoActions';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
}

const mapDispatchToProps = {
    openAddTodoDialog, editStatus, opendeleteTodoDialog, addNewTodo
}

//const mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);