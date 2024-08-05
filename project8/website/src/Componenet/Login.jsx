import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loginauth } from '../Redux/RegistrationReducer/LoginAction';

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });
  const dispatch=useDispatch();
  const nav=useNavigate()
  const Selector=useSelector((s)=>s.RegReducer)
  const [showPassword, setShowPassword] = useState(false);
const handleChange=(e)=>{
      let {name,value}=e.target
      setLogin({...login,[name]:value})
}
  const handleSubmit = (e) => {
    e.preventDefault();
   Loginauth(dispatch)(login)
   setLogin({
    email: "",
    password: ""
  })
  
  
  if(localStorage.getItem("isLogin",true)){
    nav('/')
  }
};


 
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="email" 
            name="email" 
            onChange={handleChange} 
            value={login.email} 
         
          />

        </div>
        <div className="form-group password-group">
          <label htmlFor="password">Password:</label>
          <input 
            type={showPassword ? 'text' : 'password'} 
            name="password" 
            onChange={ handleChange} 
            value={login.password} 
            
          />
          <i 
            className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`} 
            onClick={togglePasswordVisibility}
          ></i>
        </div>
        <input type="submit" className="login-button"/>
        <Link to={"/signup"}>Signup</Link>
      </form>
    </div>
  );
}

export default Login;
