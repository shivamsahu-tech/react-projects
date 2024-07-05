import React from 'react'

import {Nav, Input, Display, Sort} from '../../index'

import { useNavigate } from 'react-router-dom'
import { useProcess } from '../contexts/processContext'
function Home() {
    const {processes, setProcess, type, makeHelper} = useProcess();
    const navigate = useNavigate();
    
    const start = () => {
      
        setProcess(Sort(processes, type))
        console.log(Sort(processes, type))
        makeHelper()
        navigate('/p2')
    }

  return (
    <>
      <Nav/>
        <Input />
        <div className='flex justify-evenly items-center gap-14'>
          <Display processes={processes} />
          <div className='flex flex-col justify-end ' style={{height:'50vh'}}>
                <button className='w-auto h-1/6 hover:bg-blue-700 border-2 border-solid border-black bg-blue-500 text-white  rounded-md text-xl font-semibold py-2 px-2'
                onClick={start}
                >Start Process</button>
          </div>
        </div>

        <div className='h-20 w-full'></div>
    </>
  )
}

export default Home
