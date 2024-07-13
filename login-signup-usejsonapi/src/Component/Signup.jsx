import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [state,setState] = useState({
    username: '',
    email:'',
    password:''
  })
  const nav = useNavigate()
  const handalChange=(e)=>{
    let {name,value}=e.target;
    setState({...state,[name]:value})
  }


  const handalSubmit=(e)=>{
    e.preventDefault()
    
      fetch(`http://localhost:3000/users`,{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(state)
      })
      .then(res=>res.json())
      .then((res)=>{
       nav("/Login")
      })
      .catch(err=>console.log(err))
      setState({
        username: '',
        email:'',
        password:''
      })
    
    
  }
  
  return (
    <>
    <form onSubmit={handalSubmit}>
    <input type="text"  name='username' value={state.username} onChange={handalChange} placeholder='username' />
    <input type="email" name='email' value={state.email} onChange={handalChange} placeholder='Email' />
    <input type="password" name='password' value={state.password} onChange={handalChange} placeholder='PassWord' />
    <input type="submit" />
    </ form>
    </>
  )
}

export default Signup