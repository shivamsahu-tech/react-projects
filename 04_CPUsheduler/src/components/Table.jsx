import React, { useEffect, useState } from 'react';
import { useProcess } from '../contexts/processContext';

function Table() {

  const {processes, helper} = useProcess();

  console.log(processes)

  const [tableData, setTableData] = useState([]);

  const makeTable = () => {
    let arr = [];

    for(let i = 0; i < processes.length; i++){
      let temp = [];
      temp.push(processes[i].id);
      temp.push(processes[i].name);
      temp.push(processes[i].at);
      temp.push(processes[i].bt);
      temp.push(helper[i].endTime);
      temp.push(helper[i].endTime-processes[i].at);

      arr.push(temp);
    }

    setTableData(arr);
  }


  useEffect(() => {
    makeTable();
  }, [])

  // const append = () => {
  //   const newData = ['#4', 'p4', 20, 30]; // Example new data
  //   setTableData([...tableData, newData]);
  // };

  return (
    <>
      <style>
        {`
          table, th, td {
            border: 2px solid black;
            padding: 5px;
          }
        `}
      </style>
      <div className='flex justify-center items-center my-10' id='table'>
        <table border={3} className='bg-yellow-500'>
          <thead>
            <tr>
              <th>Process ID</th>
              <th>Process Name</th>
              <th>Arrival Time</th>
              <th>Burst Time</th>
              <th>Completion Time</th>
              <th>Turn Around Time</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((user) => (
              <tr key={user[0]}>
                <td className=' text-center' >{user[0]}</td>
                <td className=' text-center'  >{user[1]}</td>
                <td className=' text-center'  >{user[2]}</td>
                <td className=' text-center'  >{user[3]}</td>
                <td className=' text-center'  >{user[4]}</td>
                <td className=' text-center'  >{user[5]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button onClick={append}>Click me!</button> */}
      </div>
    </>
  );
}

export default Table;