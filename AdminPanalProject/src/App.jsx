import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRoute from './Router/MainRoute'
import Sidebar from './Component/Sidebar'
import Nev from './Component/Nev'
// import Content from './Component/Content'

function App() {

  return (
    <>

    <Nev/>
    <Sidebar/>
    <MainRoute/>
    {/* <Content/> */}
    </>
  )
}

export default App
