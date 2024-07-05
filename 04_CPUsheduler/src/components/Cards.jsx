import React, { useState } from 'react'
import { useProcess } from '../contexts/processContext'

function Cards({process}) {
  const {processes} = useProcess();
  return (
    <div className='bg-yellow-500 border-2 border-solid inline-block border-gray-700 select-none  p-1 ' style={{width:'98%', margin:'0.7% 1%'}} >
      <div className='flex justify-between text-sm bg-slate-300 items-center px-1 rounded-xl '>
                  <p className=' text-xl' >{`${processes.indexOf(process)+1}.`}</p>
                  <div className='w-1/6 text-center'>
                      <p className=' font-semibold' >Process ID: </p>
                      <p>{`#${process.id}`}</p>
                  </div>
                  <div className='w-1/6 text-center'>
                      <p className=' font-semibold' >Process Name: </p>
                      <p>{process.name}</p>
                  </div>
                  <div className='w-1/6 text-center'>
                      <p className=' font-semibold' >Arrival Time: </p>
                      <p>{process.at}</p>
                  </div>
                  <div className='w-1/6 text-center'>
                      <p className=' font-semibold' >Burst Time: </p>
                      <p>{process.bt}</p>
                  </div>
      </div>
    </div>
  )
}


export default Cards