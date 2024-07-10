import { useState } from 'react'
import './App.css'
import Rout from './Routs/Rout'
import Navbar1 from './Component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar1/>
     <Rout/>
    </>
  )
}

export default App
