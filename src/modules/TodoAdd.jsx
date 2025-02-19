import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS } from '../redux/actions'

const TodoAdd = () => {
    const todos = useSelector(state => state.todoList)
    const [inputValue, setInputValue] = useState(null)
    const dispatch = useDispatch()
    const handleAdd = (e) => {
       e.preventDefault()
       const data = {
        id:todos.length ? todos[todos.length - 1].id + 1 : 1,
        value: inputValue
       }

      dispatch({type:ACTIONS.ADD_TODO, payload:data})
      setInputValue(null)
    }

    localStorage.setItem('todos', JSON.stringify(todos))

  return (
    <form onSubmit={handleAdd} className='flex justify-center gap-2'>
      <Input required value={inputValue} onChange={(e) => setInputValue(e.target.value)} size='large' allowClear  placeholder='Todo Add...'/>
      <Button size='large' htmlType='submit' type='primary'>Add Task</Button>
    </form>
  )
}

export default TodoAdd
