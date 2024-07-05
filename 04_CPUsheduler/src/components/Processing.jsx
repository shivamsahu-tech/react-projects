import React, {useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useProcess } from '../contexts/processContext';

import {Display, updateState} from '../../index'

function Processing() {

  const navigate = useNavigate();


   const {processes, helper, setComplete} = useProcess()
  const [time, setTime] = useState(0);
  const [current, setCurrent] = useState([null]);
  const [comp, setComp] = useState('--')


  

  const timeRef = useRef(time);
  const compRef = useRef(comp);
  const currentRef = useRef(current);
  

  useEffect(() => {
    timeRef.current = time;

  }, [time]);


  


    useEffect(() => {       
        
        const interval = setInterval(() => {
          setTime((time) => time + 1);

           let t = timeRef.current
              setComp(0)
           const   res =   updateState({t, processes, helper, setComplete})
        if(res == -1) navigate('/p3')


        currentRef.current = res != null ? processes[res.idx] : [null]
        compRef.current = res!=null ? res.comp : -1;

      
        }, 1000);

        return () => clearInterval(interval);
      

    }, []);

  

  return (
    <div className='w-screen h-screen flex flex-col items-center '>
          <div className='w-screen my-20 flex justify-evenly items-center'>

              <div className='time w-20 h-20 flex flex-col justify-center items-center  bg-yellow-500 rounded-xl border-2 border-black'>
                                      <input type="text" className='w-4/5 h-3/5 bg-yellow-100 border-2 border-solid border-black rounded-md text-xl px-2 py-1 text-center' value={time}  disabled />
                                      <h3>Time(sec)</h3>
              </div>


              {/* Processing */}
              <div className='w-3/5 h-24 flex items-center justify-evenly' >
                                  
                      <div className=' w-full h-4/5 flex items-center font-semibold bg-yellow-500 rounded-xl border-2 border-black '>
                      <h2 className='mx-5 text-2xl font-bold'>Running Process</h2>
                              <div className=' h-5/6 w-1/6 mx-4 flex flex-col items-center justify-center '>
                                  <input type="text"   className='w-4/5 border-2 border-solid border-black bg-yellow-100  rounded-md text-sm px-2 py-1 text-center' value={ currentRef.current.id || '--' }  disabled />
                                  <h4>process id</h4>
                              </div>
                              <div className=' h-5/6 w-1/6 mx-4 flex flex-col items-center justify-center'>
                                  <input type="text"    className='w-4/5 border-2 border-solid border-black bg-yellow-100  rounded-md text-sm px-2 py-1 text-center' value={currentRef.current.name || '--'}  disabled />
                                  <h4>process name</h4>
                              </div>
                              <div className=' h-5/6 w-1/6 mx-4 flex flex-col items-center justify-center'>
                                  <input type="text"   className='w-4/5 border-2 border-solid border-black bg-yellow-100  rounded-md text-sm px-2 py-1 text-center' value={currentRef.current.bt ? currentRef.current.at : '--'}  disabled />
                                  <h4>arrival time</h4>
                              </div>
                              <div className=' h-5/6 w-1/6 mx-4 flex flex-col items-center justify-center'>
                                  <input type="text"  className='w-4/5 border-2 border-solid border-black bg-yellow-100  rounded-md text-sm px-2 py-1 text-center' value={  currentRef.current.bt  || '--'}  disabled />
                                  <h4>burst time</h4>
                              </div>
                              <div className=' h-5/6 w-1/6 mx-4 flex flex-col items-center justify-center'>
                                  <input type="text"className='w-4/5 border-2 border-solid border-black bg-yellow-100  rounded-md text-sm px-2 py-1 text-center' value={  compRef.current == -1 ? '--' : compRef.current } disabled  />
                                  <h4>completed(%)</h4>
                              </div>
                              
                      </div>
                      </div>  


                  <button className='w-auto h-auto border-2 hover:bg-red-700 border-solid border-black bg-red-400 text-white  rounded-md text-xl font-semibold py-2 px-2'
                  onClick={() => {navigate('/p3')}}
                  >Stop Process</button>

                
              </div>

              <Display processes={processes} />
    </div>
  )
}

export default Processing
