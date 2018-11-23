const url = "/api/";

export const openAddTodoDialog = () => {
    return {
      type: 'OPEN_ADD_TODO'
    }
}

export const closeAddTodoDialog = () => {
    return {
      type: 'CLOSE_ADD_TODO'
    }
}

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(fetchTodosRequest());
        return fetch(url, {
            method: 'GET'
        }).then(response => {
            if(response.ok){
                response.json().then(data => {
                    dispatch(fetchTodosRequestSuccess(data.todos, data.message));
                });
            }else{
                response.json().then(error => {
                    dispatch(fetchTodosRequestFailed(error));
                });
            }
        })
    }
}

export const fetchTodosRequest = () => {
    return{
        type : 'FETCH_TODO_REQUEST'
    }
}

export const fetchTodosRequestSuccess = (todos, message) => {
    return {
        type : 'FETCH_TODO_REQUEST_SUCCESS',
        todos: todos,
        message: message
    }
}

export const fetchTodosRequestFailed = (error) => {
    return {
        type : 'FETCH_TODO_REQUEST_FAILED',
        error: error
    }
}


export const addNewTodo = (todo) => {
    return (dispatch) => {
        dispatch(addNewTodoRequest(todo));
        return fetch(url,{
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(response => {
            if(response.ok){
                response.json().then(data => {
                  dispatch(addNewTodoRequestSuccess(data.todo, data.message))
                })
              }
              else{
                response.json().then(error => {
                  dispatch(addNewTodoRequestFailed(error))
                })
              }
        });
    }
    
}

export const editStatus = (todo) => {
    return (dispatch)  => {
        dispatch(editStatusRequest(todo));
        return fetch(url, {
            method: 'PUT',
            body : JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(response => {
            if(response.ok){
                response.json().then(data => {
                    dispatch(editStatusRequestSuccess(data.todo, data.message));
                });
            }else{
                response.json().then(error => {
                    dispatch(editStatusRequestFailed(error));
                });
            }
        });
    }
}

export const editStatusRequest = () => {
    return{
        type : 'EDIT_STATUS_REQUEST'
    }
}

export const editStatusRequestSuccess = (todo, message) => {
    return {
        type : 'EDIT_STATUS_REQUEST_SUCCESS',
        todo: todo,
        message: message
    }
}

export const editStatusRequestFailed = (error) => {
    return {
        type : 'EDIT_STATUS_REQUEST_FAILED',
        error: error
    }
}

export const opendeleteTodoDialog = () => {

}

export const addNewTodoRequest = (todo) => {
    return{
        type : 'ADD_NEW_TODO_REQUEST',
        payload: todo
    }
}

export const addNewTodoRequestSuccess = (todo, message) => {
    return {
        type : 'ADD_NEW_TODO_REQUEST_SUCCESS',
        todo: todo,
        message: message
    }
}

export const addNewTodoRequestFailed = (error) => {
    return {
        type : 'ADD_NEW_TODO_REQUEST_FAILED',
        error:error
    }
}

export const deleteTodo = (todo) => {
    return (dispatch) => {
        dispatch(deleteTodoRequest());
        return fetch(url + todo.id,{
            method: 'DELETE'
        }).then(response => {
            if(response.ok){
                response.json().then(data => {
                  dispatch(deleteTodoRequestSuccess({"_id":todo.id}, data.message))
                })
              }
              else{
                response.json().then(error => {
                  dispatch(deleteTodoRequestFailed(error))
                })
              }
        });
    }
}

export const deleteTodoRequest = () => {
    return{
        type : 'DELETE_TODO_REQUEST'
    }
} 

export const deleteTodoRequestSuccess = (todo, message) => {
    return{
        type : 'DELETE_TODO_REQUEST_SUCCESS',
        todo: todo,
        message: message
    }
}

export const deleteTodoRequestFailed = (error) => {
    return{
        type : 'DELETE_TODO_REQUEST_FAILED',
        error: error
    }
}
