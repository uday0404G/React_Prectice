import React, { useState } from 'react'

const Form = () => {
    const [data,setData] = useState({})
    const [arr,setArr] = useState([])
    const [state,setstate] = useState(false)
    const handalChange=(e)=>{
        let {name,value}=e.target;
        setData({...data,[name]:value});
    }
 
    const handalClick = (e) =>{
      e.preventDefault()
      setArr([...arr,data]);
    setData({
      name:"",email:"",pass:""
    })
    }

  return (
    
    <body>
  <div className="wrapper">
    <form onSubmit={handalClick}>
      <h2>Login</h2>
        <div className="input-field">
        <input type="text" required value={data.name} name='name' onChange={handalChange}/>
        <label>Enter your UserName</label>
      </div>
      <div className="input-field">
        <input type="Email" required value={data.email} name='email' onChange={handalChange}/>
        <label>Enter your Email</label>
      </div>
      <div className="input-field">
        <input type={state ? "text" : "password"} required value={data.pass} name='pass' onChange={handalChange}/>
        <label>Enter your password</label>
      </div>
      <div className="forget">
          

          {
            state ?    
        <label for="remember">
              <span class="material-symbols-outlined" onClick={()=>setstate(!state)}>
            visibility
        </span> <p>Hide Password</p> 
        </label>
        
        : <label for="remember">
        <span class="material-symbols-outlined" onClick={()=>setstate(!state)}>
      visibility_off
  </span> <p>Show Password</p> 
  </label>
          }
          {/*  */}
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit">Log In</button>
      <div className="register">
        <p>Don't have an account? <a href="#">Register</a></p>
      </div>
    </form>
  </div>
</body>
   
  )
}

export default Form