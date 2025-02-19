import React from 'react'
import { DeleteFilled, SignatureFilled } from '@ant-design/icons'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { ACTIONS } from '../redux/actions'
const TodoItem = ({item, index}) => {
    const dispatch = useDispatch()
  return (
    <li className='flex justify-between w-full  bg-slate-300 mt-2 p-2 rounded-xl'>
      <div className='flex items-center gap-2'>
         <span className='text-[20px]'>{index + 1}.</span>
         <p className='text-[20px]'>{item.value}</p>
      </div>
      <div className='flex items-center gap-2'>
        <Button size='large' type='primary' className='!text-[20px]'><SignatureFilled/></Button>
        <Button onClick={()=> dispatch({type:ACTIONS.DELETE_TODO, payload:index})} size='large' type='primary' className='!text-[20px] !bg-red-500'><DeleteFilled/></Button>
      </div>
    </li>
  )
}

export default TodoItem
