import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hoc1 from './Component/Hoc1'
import Hoc5 from './Component/Hoc5'
import Hoc3 from './Component/Hoc3'
import Hoc2 from './Component/Hoc2'
import Hoc4 from './Component/Hoc4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Hoc1/>
   <Hoc2/>
   <Hoc3/>
   <Hoc4/>
   <Hoc5/>

    </>
  )
}

export default App
