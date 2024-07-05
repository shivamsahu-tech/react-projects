import React, {useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import { ProcessContextProvider } from './contexts/processContext';
import './App.css'

function App() {

   const [type, sType] = useState('fcfs')
   const [processes, setProcess] = useState([]);
   const [helper, setHelper] = useState([]);

   const setType = (passedType) => {
      sType(passedType);
   }

   const makeHelper = () => {
      let curTime = 0;
      let sTime = 0;
      let eTime = 0;
      let makeHelper = [];
       for(let i = 0; i < processes.length; i++){
           let prcs = processes[i];
           if(curTime <= prcs.at){
               sTime = parseInt(prcs.at);
               eTime =  parseInt(prcs.at) + parseInt(prcs.bt);
           } else {
               sTime = curTime;
               eTime = sTime + parseInt(prcs.bt);
           }

           let obj = {
            id: processes[i].id,
            idx: i,
            startTime: sTime,
            endTime: eTime,
           }

           curTime = eTime;
           makeHelper.push(obj)

       }
       setHelper(makeHelper);
   }

   const setComplete = (id) => {
      setProcess(processes => processes.map((prcs) => (prcs.id == id ? {...prcs, complete: true, isrunning: true} : prcs)))
   }

   const addProcess = (newProcess) => {
      setProcess(process => {return [...process, newProcess]})
   }

  return (
    <ProcessContextProvider value={{processes, type, helper, setProcess, makeHelper, setType, addProcess,setComplete}} >
        <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/p2' element={<Page2 />} />
          <Route path='/p3' element={<Page3 />} />
        </Routes>
      </Router>
    </ProcessContextProvider>
  );
}

export default App;
