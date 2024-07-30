import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { myContext } from './context/Context'

function App() {
  const {state,dispatch}=useContext(myContext)

  return (
    <>
    <h1>{state}</h1>
      <button onClick={dispatch({type:"ADD"})}>+</button>
      <button onClick={dispatch({type:"SUB"})}>-</button>

    </>
  )
}

export default App
