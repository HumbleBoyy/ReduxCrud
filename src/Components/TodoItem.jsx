import React, { useState } from 'react'
import { DeleteFilled, SignatureFilled } from '@ant-design/icons'
import { Button, Modal } from 'antd'
import { useDispatch } from 'react-redux'
import { ACTIONS } from '../redux/actions'
const TodoItem = ({item, index, setOpenEditModal, setInputValue,setTodoId}) => {
    const dispatch = useDispatch()
    const [opendModal, setOpenModal] = useState(null)
    const handleEdit = () => {
        setOpenEditModal(true)
        setInputValue(item.value)
        setTodoId(item.id)
    }
  return (
    <>
    <li className='flex justify-between w-full  bg-slate-300 mt-2 p-2 rounded-xl'>
      <div className='flex items-center gap-2'>
         <span className='text-[20px]'>{index + 1}.</span>
         <p className='text-[20px]'>{item.value}</p>
      </div>
      <div className='flex items-center gap-2'>
        <Button onClick={()=> handleEdit()} size='large' type='primary' className='!text-[20px]'><SignatureFilled/></Button>
        <Button onClick={()=> setOpenModal(index)} size='large' type='primary' className='!text-[20px] !bg-red-500'><DeleteFilled/></Button>
      </div>
    </li>
    <Modal open={opendModal !== null} onClose={()=> setOpenModal(null)} onCancel={()=> setOpenModal(null)} title="Do you want to delete this task?"   onOk={() => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload:index });
    setOpenModal(null)
  }}>

    </Modal>
  </> 
  )
}

export default TodoItem
