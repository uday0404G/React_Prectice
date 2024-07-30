import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { data } from './Redux/action'

function App() {
 const dispatch=useDispatch()  
 const data1=useSelector((s)=>s) 
 
  const handlClick=()=>{
    data(dispatch)

  }
console.log(data1)
  return (
    <>
    <>{
      data1.data.map((el)=>{
        return (
          <div >
        <p>{el.title}</p>
        <img src={el.image} alt={el.title} width="150px" height="150px"/>
        </div>
        )
      })
      }</>
     <button onClick={handlClick}>Fetch</button>
    </>
  )
}

export default App
