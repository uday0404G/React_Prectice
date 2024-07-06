import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Theam from './component/Theam'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Theam/>
    </>
  )
}

export default App
