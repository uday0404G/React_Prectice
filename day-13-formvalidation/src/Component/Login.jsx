import React, { useState } from 'react'


const Login = () => {
  const [login,setLogin] = useState(true)
  const [passToggle,setPassToggle] = useState(false)
  const [validation,setValidation] = useState({
     email : false,
     password : false,
     username : false
  })
  const [data,setData] = useState({
    username:"",
    email:"",
    password:""
  })
  const [logindata,setLoginData] = useState({
    username:"",
    email:"",
    password:""
  })
  let [arr,setArr] = useState([])
  const handalChange=(e)=>{
    let {name , value}=e.target;
    
    setData({...data,[name]:value})
  }

 const handalSignup=(e)=>{
  e.preventDefault();
  if(data.password===data.password2){

    setArr([...arr,data])
    setLogin(false)
  }else{
    alert("please enter same password")

  }
  
 
 }
 const loginData=(e)=>{
  let {name,value}=e.target;
  setLoginData({...logindata,[name]:value})
 }
 const handalLogin=(e)=>{
  e.preventDefault();
  const userExists = arr.filter(
    (el) => el.email === logindata.email && el.password === logindata.password
  );

  if (userExists.length>0) {
    alert("Login success");
  } else {
    alert("Login failed");
  }

// if(arr.map((el)=>el.email===logindata.email&&el.password===logindata.password))
//   {
//     alert("login succsess")
//   }else{
//     alert("login gfaild")
//   }
 }
 
 const handleBlur = (e) => {
   let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
   
   if (!regex.test(data.password)) {
     setValidation({...validation,password : true})
    }
    else{
     setValidation({...validation,password : false})

    }
   

  

};
const handleBlur1 = (e) => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  if(!validRegex.test(data.email)) {
    setValidation({...validation,email : true})
  } else{
    setValidation({...validation,email : false})
  
   }

 

};
const handleBlur2 = (e) => {
  
var username = /^[0-9A-Za-z]{6,16}$/;
if (!username.test(data.username)) {
  setValidation({...validation,username:true})
} else{
  setValidation({...validation,username : false})

 }
  

 

};


  

  return (
    <>
   {
    login?
     <div id="login-box">
    <div className="left-box">
      <h1> Sign Up </h1>
      <form onSubmit={handalSignup}>
      <input type="text" name="username" onChange={handalChange} placeholder="Username"  onBlur={handleBlur2}/>
      {
      validation.username?<p style={{color:"red"}}>Please enter valid Username</p>:null 

      } 
      <input type="text" name="email" onChange={handalChange} placeholder="Email"  onBlur={handleBlur1} required/>
      {
      validation.email? <p style={{color:"red"}}>Please enter valid email</p>:null

      }
      <input type={passToggle?'text':"password"} name="password" onChange={handalChange}  placeholder="Password" onBlur={handleBlur} required/>
      {
      validation.password? <p style={{color:"red"}}>Please enter valid password</p>:null

      }
      <input type={passToggle?'text':"password"} name="password2" onChange={handalChange}  placeholder="Retype Password" onBlur={handleBlur}/>
      {
      validation.password? <p style={{color:"red"}}>Please enter valid password</p>:null

      }
      <>
      {  passToggle? <>
      <span onClick={()=>setPassToggle(false)} className="material-symbols-outlined">
          visibility
      </span>Hide Password
      </>:<>
      <span onClick={()=>setPassToggle(true)} className="material-symbols-outlined">
          visibility_off
      </span>Show Password
      </>
      }
      </>
   
      <input type="submit" name="singup-button" placeholder="Sing Up"/>
        <span onClick={()=>setLogin(false)}>Login</span>
      </form>
    </div>
    <div className="right-box">
      <span className="signinwith">Sign in with<br/>Social Network </span>
      <button className="social facebook">Log in with Facebook</button>
      <button className="social twitter">Log in with Twitter</button>
      <button className="social google">Log in with Google+</button>
    </div>
    <div className="or">OR</div>
  </div> 
  :
  <div id="login-box">
  <div className="left-box">
    <h1> Login </h1>
    <form onSubmit={handalLogin}>

    <input type="text" name="email" placeholder="Email" value={logindata.email} onChange={loginData} required/>
    <input type="password" name="password" value={logindata.password} placeholder="Password" onChange={loginData} required/>
    <input type="submit" name="singup-button" placeholder="Sing Up"/>
    <span  onClick={()=>setLogin(true)}>Signup</span>
</form>
  </div>
  <div className="right-box">
    <span className="signinwith">Sign in with<br/>Social Network </span>
    <button className="social facebook">Log in with Facebook</button>
    <button className="social twitter">Log in with Twitter</button>
    <button className="social google">Log in with Google+</button>
  
  </div>
  <div className="or">OR</div>
</div> 
  }

    </>

  )
}

export default Login