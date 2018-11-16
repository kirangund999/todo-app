import React from 'react';

export default class Todo extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="backdrop">
                <div className="modal-container">
                    <form id="addNewTodoForm" onSubmit={this.addNewTodo}>
                        <div className="header"><h3>New Todo</h3></div>
                        <div className="body">
                            <div>
                                <label>
                                    Todo:
                                    <input type="text" name="todoName"/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Status
                                    <select name="todoStatus">
                                        <option value="Pending">Pending</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="footer">
                        <input type="submit" value="Submit" /></div>
                    </form>
                </div>
            </div>
        );
        
    }
}