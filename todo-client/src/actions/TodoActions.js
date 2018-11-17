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
    return{
        type : 'ADD_NEW_TODO',
        payload: todo
    }

}

export const editStatus = () => {

}

export const opendeleteTodoDialog = () => {

}