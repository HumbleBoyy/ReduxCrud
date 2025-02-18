import { ACTIONS } from "./actions"


const initialState = {
    todoList: JSON.parse(localStorage.getItem("todos")) || [] 
}

export const TodoReducer = (state = initialState, action) => {
     switch(action.type){
        case ACTIONS.ADD_TODO:
            return{
                todoList:[...state.todoList, action.payload]
            }
        case ACTIONS.DELETE_TODO:
          state.todoList.splice(action.payload, 1)
          return{
            todoList:[...state.todoList]
          }
        case ACTIONS.EDIT_TODO:
            const findObj = state.todoList.find(item => item.id === action.payload.id)
            findObj.value = action.payload.newValue
            return{
                todoList:[...state.todoList]
            }
        default:{
            return state
        }
     }
}