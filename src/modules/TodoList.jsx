import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../Components/TodoItem'

const TodoList = () => {
  const todos = useSelector(state => state.todoList)
  return (
    <>
      {todos.length === 0 ? null :
        (
          <ul className='flex justify-between items-center bg-slate-300 mt-2 p-3 rounded-xl'>
            {todos.map((item, index)=> <TodoItem key={index} item={item} index={index}/>)}
          </ul>
        )
      }
    </>
  )
}

export default TodoList
