import { useCallback, useState } from 'react'
import './App.css'
import Component from './Component'

function App() {
  const [count, setCount] = useState(0)
const handlClick=useCallback(()=>{

},[])
  return (
    <>
     <Component hc={handlClick}/>
     <h1>{count}</h1>
     
     <button onClick={()=>setCount(count+1)}>+</button>
     <button disabled={count==0} onClick={()=>setCount(count-1)}>-</button>
    </>
  )
}

export default App
