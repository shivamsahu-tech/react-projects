import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './Box'

function App() {
  

  return (
    <div className='w-screen h-screen flex justify-center items-center' style={{backgroundImage: 'url(https://res.cloudinary.com/dfl8h4on4/image/upload/v1720171675/bgc2_zmlmae.jpg)', backgroundSize: 'cover'}} >
          <Box/>
    </div>
  )
}

export default App
