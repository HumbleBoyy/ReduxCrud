import { DeleteFilled, SignatureFilled } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

const TodoList = () => {
  return (
    <ul className='flex justify-between items-center bg-slate-300 mt-2 p-3 rounded-xl'>
       <div className='flex items-center gap-2'>
           <span className='text-[20px]'>1.</span>
           <h2 className='text-[20px]'>Todo</h2>
       </div>
       <div className='flex items-center gap-2'>
          <Button size='large' type='primary' className='!text-[20px]'><SignatureFilled/></Button>
          <Button size='large' type='primary' className='!text-[20px] !bg-red-500'><DeleteFilled/></Button>
       </div>
    </ul>
  )
}

export default TodoList
