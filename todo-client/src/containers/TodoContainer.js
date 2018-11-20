import {connect} from 'react-redux';
import Todo from '../components/Todo';


const mapStateToProps = (state) => {
    return {
        currentTodo: state.todo
    };
}


//const mapDispatchToProps;

export default connect(mapStateToProps, {})(Todo);