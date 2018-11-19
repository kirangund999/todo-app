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

export const addNewTodo = (todo) => {
    return (dispatch) => {
        dispatch(addNewTodoRequest(todo));
        return fetch(url,{
            method: 'POST',
            body: todo
        }).then(response => {
            if(response.ok){
                response.json().then(data => {console.log(data.todo);
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

export const editStatus = () => {

}

export const opendeleteTodoDialog = () => {

}

export const addNewTodoRequest = (todo) => {
    return{
        type : 'ADD_NEW_TODO_REQUEST',
        payload: todo
    }
}

export const addNewTodoRequestSuccess = () => {
    return {
        type : 'ADD_NEW_TODO_REQUEST_SUCCESS',
    }
}

export const addNewTodoRequestFailed = () => {
    return {
        type : 'ADD_NEW_TODO_REQUEST_FAILED',
    }
}