import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Man = () => {
  const [state,setState] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then((res)=>{
      setState(res)
    })
    .catch((err)=>console.log(err))
  },[])
  console.log(state);
  return (
    <>
    {
    state.map((el)=>{
      return(
      <Link key={el.id} to={`/Singlepage/${el.id}`}>
      <div  className="d-flex ">

        <img src={el.image} alt={el.title} width="150px" height="150px"/>
        <h1>{el.title}</h1>
        <h1>{el.price}</h1>
      </div>
      </Link>
      
      )
    })
    }
    </>
  )
}

export default Man