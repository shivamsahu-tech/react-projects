import React, { useState } from 'react'
import InputBox from './InputBox'
import './style.css'
import CurrencyData from './CurrencyData';


function Box() {

  const [amount, setAmount] = useState(0);
  const [convtAmount, setConvtAmount] = useState(0);
  const [from, setFrom] = useState('EUR');
  const [to, setTo] = useState('USD')


  const currencyInfo = CurrencyData(from);

   let options = Object.keys(currencyInfo)
   console.log(options)
  
  return (
   
    <div className=' box border-2 rounded-xl ' >
      <div className='flex flex-col  items-center gap-3 justify-center' >
        <InputBox 
          str={'From'} 
          amt={amount} 
          setAmt={setAmount} 
          optionsList={options} 
          selectedCurrency={from} 
          changeCurrency={setFrom}
          inputAccessibility={false}
        />
        <button 
          className=' z-10  swap rounded-md'
          onClick={() => {
              let temp = amount
              setAmount(convtAmount)
              setConvtAmount(temp)

              let curr = from
              setFrom(to)
              setTo(curr)
          }} 
        >Swap</button>
        <InputBox 
          str={'to'} 
          amt={convtAmount} 
          setAmt={setConvtAmount} 
          optionsList={options} 
          selectedCurrency={to} 
          changeCurrency={setTo}
          inputAccessibility={true} 
        />
      </div>
      <button 
        className='boxButton rounded-md'
        onClick={() => {
          if(amount == 0) setAmount(0)
          setConvtAmount(amount*currencyInfo[to])
        }}
      
      >Convert {from} to {to} </button>
    </div>
  )
}

export default Box
