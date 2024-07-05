import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useProcess } from '../contexts/processContext';

function Input(probe) {
    const [name, setName] = useState('');
    const [at, setAt] = useState('');
    const [bt, setBt] = useState('')
    const [count, setCount] = useState(1);
    const {addProcess, setType} = useProcess();



    const addPrcs = () => {

        if(name == '' || at == '' || bt == '' || isNaN(at) || isNaN(bt)) {
            alert('Please enter valid data!')
            setName('');
            setAt('');
            setBt('');
        } else {
            let prcs = {
                id: 'BAS'+ count,
                name: name,
                at: at,
                bt: bt,
                complete: false,
                running: false,
            }
            setName('');
            setAt('');
            setBt('');
            setCount(count => count+1)
            addProcess(prcs);
            setType(type)
        }
        
    }

  return (
    <div className='flex flex-col justify-center items-center text-sm' >

           <select name="" id="" className='w-1/5 h-10 px-2 text-md font-bold rounded-md border-2 border-black bg-yellow-500 my-10 '  onChange={(e) => {
            setType(e.target.value);
           }}>
                <option value="fcfs">First Come First Serve</option>
                <option value="sjf">Shortest Job First</option>
            </select>

            <div className=' w-screen h-28  flex items-center justify-evenly border-2 border-blue-200  my-6'>
                            
                            <div className=' h-4/5 w-3/5 flex font-semibold items-center bg-yellow-500 rounded-xl border-2 border-black '>
                            <h2 className='mx-5 text-xl font-bold'>Add New <br /> Process</h2>
                                        <div className=' h-5/6 w-2/12 mx-4 flex flex-col items-center justify-center '>
                                            <input type="text"   className='w-4/5 border-2 border-solid border-black bg-yellow-100  rounded-md text-sm px-2 py-1 text-center' value={`#${'BAS'+count}`} disabled   />
                                            <h4>process id</h4>
                                        </div>
                                        <div className=' h-5/6 w-1/6 mx-4 flex flex-col items-center justify-center'>
                                            <input type="text"   className='w-4/5 border-2 border-solid border-black bg-yellow-100  rounded-md text-sm px-2 py-1 text-center' value={name} onChange={(e) => {setName(e.target.value)}}  />
                                            <h4>process name</h4>
                                        </div>
                                        
                                        <div className=' h-5/6 w-1/6 mx-4 flex flex-col items-center justify-center'>
                                            <input type="text"  className='w-4/5 border-2 border-solid border-black bg-yellow-100  rounded-md text-sm px-2 py-1 text-center' value={at} onChange={(e) => {setAt(e.target.value)}}  />
                                            <h4>arrival time(s)</h4>
                                        </div>

                                        <div className=' h-5/6 w-1/6 mx-4 flex flex-col items-center justify-center'>
                                            <input type="text"  className='w-4/5 border-2 border-solid border-black bg-yellow-100  rounded-md text-sm px-2 py-1 text-center' value={bt} onChange={(e) => {setBt(e.target.value)}} />
                                            <h4>burst time(s)</h4>
                                        </div>

                                        <div className=' h-5/6 w-1/6 mx-4 flex flex-col items-center justify-center'>
                                            <button className='w-4/5 hover:bg-blue-800 border-2 border-solid border-black bg-blue-400 text-white  rounded-md text-sm px py-1 '
                                               onClickCapture={addPrcs}
                                               >Click Me!</button>
                                            <h4>Add Process</h4>
                                        </div>
                                        
                            </div>
            </div>

    </div>
  )
}

export default Input
