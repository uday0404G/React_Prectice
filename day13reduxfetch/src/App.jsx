import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from './Redux/action'

function App() {
  const dispatch=useDispatch()
  const handalClick=()=>{
    fetchdata(dispatch)
  }
  const dataa=useSelector((s)=>s)
  console.log(dataa);

  return (
    <>
    {
      dataa.isLoading?<h1>loading</h1>:
      
<div >

          <h1>{dataa.data.username}</h1>

</div>
     
    }
     <button onClick={handalClick}>Fetchdata</button>
    </>
  )
}

export default App
