import React, { useCallback, useEffect, useState } from 'react';

function PassGen() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState('https://res.cloudinary.com/dfl8h4on4/image/upload/v1720170826/poor_jegpqu.png');
  const [imgType, setImgType] = useState('poor')
  const [length, setLength] = useState(8);
  const [input, setInput] = useState([false, false, false]);
  const [flag, setFlag] = useState(true);
   const [copied, setCopied] = useState(false);

  const updateImg = (stren) => {
    if(stren === 'poor'){
      setStrength("https://res.cloudinary.com/dfl8h4on4/image/upload/v1720170826/poor_jegpqu.png")
      setImgType('poor')
    }
    else if(stren == 'good') {
      setStrength("https://res.cloudinary.com/dfl8h4on4/image/upload/v1720171067/good_zfy7p2.png")
      setImgType('good')
    }
    else {
      setStrength("https://res.cloudinary.com/dfl8h4on4/image/upload/v1720171108/strong_jhnccj.png")
      setImgType('strong')
    }
  }

  useEffect(() => {
    let str = "qwertyuiopasdfghjklzxcvbnm";
    if(input[0]) str += "QWERTYUIOPLKJHGFDSAZXCVBNM"
    if(input[1]) str += "09876543210987654321"
    if(input[2]) str += "!@#$%^&*()<>?/|{[]}~!@#$%^&*()<>?/|{[]}~"
    let len = str.length;
    let pass = "";
    for(let i = 0; i < length; i ++){
        let rand = Math.floor(Math.random()*len+1);
        pass += str.charAt(rand);
    }
    if(input[0] && input[1] && input[2] && length > 10) updateImg('strong')
    else if((((input[0] && input[1]) || (input[2] && input[1]) || (input[0] && input[2])) && length > 10) || length > 20 ) updateImg('good')
    else updateImg('poor')
    setPassword(pass);
  },[length, flag])

  return (
    <div className=' w-screen h-screen flex flex-col items-center' style={{ backgroundColor: "#16324F" }}>
      <div className=' bg-zinc-700 my-10 rounded-md border-2 border-blue-700 flex flex-col items-center box'>
        {/* for input and copy button */}
        <div className='w-4/5 h-3/6 flex items-center justify-center'>
          <input type="text" value={password} className='w-5/6 h-2/5 bg-zinc-400 font-medium text-2xl px-4 py-5 rounded-md high'  />
          <button className='w-1/5 h-2/5 text-slate-300 text-xl font-bold rounded-md mx-1 px-1 hover:text-white' onClickCapture={() => { window.navigator.clipboard.writeText(password);  }} style={{ backgroundColor: "#16324F" }}>Copy Me!</button>
        </div>
        {/* for showing password strength */}
        <div className='w-4/5 flex justify-start -my-6 text-white'>
          <div className='px-5 '><img src={strength} alt="" style={{width:'30px', height:'30px' }} /></div>
          <h5 className='text-xl font-bold -ml-3'>{imgType}</h5>
        </div>
        {/* for input */}
        <div className=' check-input w-4/5 h-2/5 mt-10 text-white text-xl font-bold flex items-center justify-between -ml-4'>
          <div className='size-2/5'>
            <input type="range" min={5} max={25} defaultValue={length} onChangeCapture={(e) => { setLength(e.target.value) }} className='w-4/5 ' />
            <p>Current length: {length}</p>
          </div>
          <div className='flex gap-2 justify-center items-center'>
            <input type="checkbox" onChange={(e) => { let inp = input; inp[0] = e.target.checked; setFlag(flag => !flag); setInput(inp) }} className='size-6 bg-blue-700 rounded-xl' />
            <h1>A-Z</h1>
          </div>
          <div className='flex gap-2 justify-center items-center'>
            <input type="checkbox" onChange={(e) => { let inp = input; inp[1] = e.target.checked; setFlag(flag => !flag); setInput(inp) }} className='size-6' />
            <p>0-9</p>
          </div>
          <div className='flex gap-2 justify-center items-center'>
            <input type="checkbox" onChange={(e) => { let inp = input; inp[2] = e.target.checked; setFlag(flag => !flag); setInput(inp) }} className='size-6' />
            <p>@#$%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PassGen;
