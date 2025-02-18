import { Button, Input } from 'antd'
import React from 'react'

const TodoAdd = () => {
  return (
    <form className='flex justify-center '>
      <Input size='large'  placeholder='Todo Add...'/>
      <Button size='large' type='primary'>Add</Button>
    </form>
  )
}

export default TodoAdd
