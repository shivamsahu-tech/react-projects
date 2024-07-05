import React from 'react'

function InputBox({
    str,
    amt,
    setAmt,
    optionsList = [],
    selectedCurrency,
    changeCurrency,
    inputAccessibility

})

 {

  console.log(selectedCurrency)

 
  return (
    <div className='inputbox rounded-md  '>
      <div className="left">
        <label htmlFor="">{str}</label>
        <input type="number" name="" id="" 
        onChangeCapture={(e) => {setAmt(e.target.value)}}
        value={amt}
        disabled={inputAccessibility}
         />
      </div>
      <div className="right">
        <label htmlFor="">Current Type</label>
        <select  className=' rounded-md'
        value={selectedCurrency}
        onChange={(e) => {changeCurrency(e.target.value)}}
        >
            {optionsList.map((currency) => (
                <option key={currency} value={currency}>
                {currency}
                </option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox
