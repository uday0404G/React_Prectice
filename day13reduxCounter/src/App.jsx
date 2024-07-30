import { useState } from 'react'

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { counter } from './Redux/action'

function App() {
  const dispatch=useDispatch()
  const count=useSelector((s)=>s)
console.log(count);
  return (
    <>
    <h1>{count.count}</h1>
    <h1>{count.count2}</h1>

     <button onClick={()=>dispatch({type:"inc"})}>+</button>
     <button onClick={()=>dispatch(counter())}>+5</button>

    </>
  )
}

export default App
