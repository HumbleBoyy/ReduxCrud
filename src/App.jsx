import React from 'react'
import TodoAdd from './modules/TodoAdd'
import TodoList from './modules/TodoList'

const App = () => {
  return (
    <div className='p-10 w-[600px] mx-auto'>
      <TodoAdd/>
      <TodoList/>
    </div>
  )
}

export default App
