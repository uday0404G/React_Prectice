import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Singlepage = () => {
  const id=useParams()
  const [state,setState] = useState({})

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id.id}`)
    .then((res)=>res.json())
    .then((res)=>{
       setState(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <>
    <img src={state.image} alt="" width="150px" height="150px"/>
        <h1>{state.title} - ₹{state.price}</h1>
    </>
  )
}

export default Singlepage