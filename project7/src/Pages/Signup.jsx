import React, { useState } from 'react'
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
    
      fetch(`http://localhost:3000/Users`,{
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
    <div className="main w-100 h-100 bg-drak" style={{background:"black"}}>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form onSubmit={handalSubmit}>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" name='username' value={state.username} onChange={handalChange} placeholder="UserName"  />
        <label for="username">Email</label>
        <input type="emailz" name='email' value={state.email} onChange={handalChange} placeholder="Email or Phone" id="email" />

        <label for="password">Password</label>
        <input type="password" name='password' value={state.pa} onChange={handalChange} placeholder="Password" id="password" />

        <button>Log In</button>
        <div class="social">
          <div class="go">
            <i class="fab fa-google"></i> Google
          </div>
          <div class="fb">
            <i class="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default Signup