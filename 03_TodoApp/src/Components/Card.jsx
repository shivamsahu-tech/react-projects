import React, { useState, useEffect, useRef } from 'react'
import { useTodo } from '../Contexts/todoContext'


// here we pass a probe of object which consist only one a=object  that consist of only one todo
function Card({todo}) {
    const {toggleComplete, deleteTodo} = useTodo();
    const [editable, setEditable] = useState(false)
    const [img, setImg] = useState('https://res.cloudinary.com/dfl8h4on4/image/upload/v1720172831/edit_fx7yb0.png')
    const [tittle, setTittle] = useState(todo.tittle);
    const inputRef = useRef(null);

    useEffect(() => {
      if (editable && inputRef.current) {
        inputRef.current.focus();
      }
    }, [editable]);


    

    const edit_save = () => {
        if(editable){
            setEditable(editable => !editable);
            setImg('https://res.cloudinary.com/dfl8h4on4/image/upload/v1720172831/edit_fx7yb0.png');
        }
        else{
            setEditable(editable => !editable);
            setImg('https://res.cloudinary.com/dfl8h4on4/image/upload/v1720173040/save_wzdxaz.png');
        }
    }

  return (
    
    <div className={ `bg-blue-300 todo-item flex items-center justify-between  ${todo.complete ? ' bg-orange-400' : ' '}  rounded-md p-1 mt-2 mb-2`}
      style={{minWidth: '100%'}}
    >
      <div className='flex items-center ' >
        <input 
        onChange={(e) => {toggleComplete(todo.id)}}
        className='mt-3 mb-3 ml-2 mr-2'
        type="checkbox" />
        <input  
             ref={inputRef}
            disabled={!editable} 
            onChange={(e) => {setTittle(e.target.value)}} 
            value={tittle}
            className={`text-black w-72 focus:outline-none p-1 text-xl ${todo.complete ? 'line-through' : ' '} bg-transparent font-semibold`} 
            type="text" 
        />
      </div> 
     <div className='flex  items-center gap-4 ml-3 mr-3'>
        <button onClick={edit_save} ><img className='w-7' src={img} alt="" /></button>
        <button onClick={() => {deleteTodo(todo.id)}} ><img className='w-8' src="https://res.cloudinary.com/dfl8h4on4/image/upload/v1720173004/trash_xwacrq.png" alt="delete" /></button>
     </div>
    </div>
  )
}

export default Card
