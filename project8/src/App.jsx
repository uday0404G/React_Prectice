import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componenet/Navbar'
import MainRout from './Routes/MainRout'


function App() {

  return (
    <>
      <Navbar/>
      <MainRout/>
    </>
  )
}

export default App
