import React from 'react'
import { DeleteFilled, SignatureFilled } from '@ant-design/icons'
import { Button } from 'antd'
const TodoItem = ({item, index}) => {
  return (
    <>
      <div className='flex items-center gap-2'>
         <span className='text-[20px]'>{index + 1}.</span>
         <h2 className='text-[20px]'>{item.value}</h2>
      </div>
      <div className='flex items-center gap-2'>
        <Button size='large' type='primary' className='!text-[20px]'><SignatureFilled/></Button>
        <Button size='large' type='primary' className='!text-[20px] !bg-red-500'><DeleteFilled/></Button>
      </div>
    </>
  )
}

export default TodoItem
