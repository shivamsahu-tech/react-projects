import React, { useState } from 'react'
import { useTodo } from '../Contexts/todoContext'

function InputForm() {
    const {todos, addTodo} = useTodo();

    const [tittle, setTittle] = useState('');
   

    
  return (
    <div className= ' flex rounded-md justify-between items-center mb-8' >
      <input 
        onChange={(e) => {setTittle(e.target.value)}} 
        value={tittle}  
        className='input-field  todo-input text-2xl p-2  rounded-md bg-gray-200 font-semibold '  
        type="text" 
        placeholder='Enter tittle here..' 
      />
      <button 
        
        onClick={() => {addTodo({id: Date.now(), tittle: tittle, complete: false}); setTittle(''); }}  
        className='bg-blue-500  text-2xl p-2  text-white font-semibold rounded-md'
        style={{height: ''}}
      >Add Todo</button>
    </div>
  )
}

export default InputForm
