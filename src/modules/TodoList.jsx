import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from '../Components/TodoItem'
import { Input, Modal } from 'antd'
import { ACTIONS } from '../redux/actions'

const TodoList = () => {
  const todos = useSelector(state => state.todoList)
  const [opendEditModal, setOpenEditModal] = useState(false)
  const [inputValue, setInputValue] = useState(null)
  const [todoId, setTodoId] = useState(null)
  const dispatch = useDispatch()
  
  const handleEdit = () => {
      dispatch({type:ACTIONS.EDIT_TODO, payload:{id:todoId, newValue:inputValue}})
      setOpenEditModal(false)
  }

  return (
    <>
      {todos.length === 0 ? null :
        (
          <ul className='flex flex-col items-center '>
            {todos.map((item, index)=> <TodoItem setTodoId={setTodoId} setInputValue={setInputValue} setOpenEditModal={setOpenEditModal} key={index} item={item} index={index}/>)}
            <Modal open={opendEditModal} onClose={()=> setOpenEditModal(false)} onCancel={()=> setOpenEditModal(false)} onOk={handleEdit} title="Do you want to edit this task?">
              <Input required value={inputValue} onChange={(e) => setInputValue(e.target.value)} size='large' allowClear  placeholder='Todo Add...'/>
           </Modal>
          </ul>
        )
      }
    </>
  )
}

export default TodoList
