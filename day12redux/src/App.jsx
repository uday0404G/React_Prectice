import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Dec, Inc } from './Redux/actiontype'

function App() {
  const dispatch =useDispatch()
  const obj=useSelector((count)=>count)
  return (
    <>
    <h1>{obj.count}</h1>
     <button onClick={()=>dispatch({type:Inc})}>+</button>
     <button onClick={()=>dispatch({type:Dec})}>-</button>
    </>
  ) 
}

export default App
