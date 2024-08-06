import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MainRout from './Routes/MainRout'
import Navbar from './Home/Navbar'



function App() {

  return (
    <>
      <Navbar/>
      <MainRout/>
    </>
  )
}

export default App
