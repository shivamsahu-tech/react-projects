import React, { useState } from 'react'
import {Cards} from '../../index'
// import Cards from './Cards'
import { useSearchParams } from 'react-router-dom'

function Display({processes}) {
  
  return (
    <div className='flex flex-col justify-center items-center rounded-md -my-3 '>
        <h4 className='font-bold'>Processes Lists</h4>
            <div className=' scrollbar-hide border-2 border-solid border-black  rounded-md ' style={{width:'50vw',backgroundColor:"#C4C6E7",overflow:'scroll', height:'50vh'}}  >
            
            {processes == null || processes.map((prcs) => (
                (!prcs.complete && !prcs.isrunning) &&
                <div key={prcs.key} >
                  <Cards process={prcs}  />
                </div>
            ))}
  
        </div>
    </div>
  )
}

export default Display
