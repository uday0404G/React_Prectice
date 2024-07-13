import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
   const [state, setstate] = useState({
    email: '',
    password: ''
  }) 
  const nav=useNavigate()
const  handalChange=(e)=>{
  let {name,value}=e.target;
  setstate({...state,[name]:value})
  }
 const handalSubmit=(e)=>{
  e.preventDefault()
if(state.email)
{
  fetch(`http://localhost:3000/users?email=${state.email}`)
  .then((res)=>res.json())
  .then((res)=>{
    if(res.length>0){
      if(res[0].password==state.password){
        alert("login Successfull")
        localStorage.setItem("isLogin",true)
        nav('/')
      }
      else{
        alert("password mismatch")
      }
    }else{
      alert("invalid email or password")
    }
  })
  .catch((err)=>{
    console.log(err);
  })
}
else{
  alert("pLEASE FILL THE FORM")
}


  }
  return (
    <><form onSubmit={handalSubmit}>
    <input type="email" name='email' value={state.email} onChange={handalChange} placeholder='Email' />
    <input type="password" name='password' value={state.password} onChange={handalChange} placeholder='PassWord' />
    <input type="submit" />
    </ form></>
  )
}

export default Login