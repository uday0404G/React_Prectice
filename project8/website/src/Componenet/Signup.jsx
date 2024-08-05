import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './signup.css';
import { useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { SignupData } from '../Redux/RegistrationReducer/action';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [signup, setSignup] = useState({
    username:"",
    Email:"",
    Password:"",
    confirmPassword:""
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch=useDispatch()
  const storeSelector=useSelector((s)=>s.RegReducer)
  const nav=useNavigate()
      const handleChange=(e)=>{
          let {name,value}=e.target
          setSignup({...signup,[name]:value})
        }
  const handleSubmit = (e)=> {
    e.preventDefault();
    // Handle signup logic here
    SignupData(dispatch)(signup)
    nav("/")
    setSignup({
      username:"",
      Email:"",
      Password:"",
      confirmPassword:""
    })
    
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            name="username" 
            value={signup.username} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group ">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            name="Email" 
            value={signup.Email} 
            onChange={handleChange} 
            required 
          />
        
        </div>
        <div className="form-group password-group">
          <label htmlFor="password">Password:</label>
          <input 
            type={showPassword ? 'text' : 'password'} 
            name="Password" 
            value={signup.password} 
            onChange={handleChange} 
            required 
          />
          <i 
            className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`} 
            onClick={togglePasswordVisibility}
          ></i>
        </div>
        <div className="form-group password-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input 
            type={showPassword ? 'text' : 'password'} 
            name="confirmPassword" 
            value={signup.confirmPassword} 
            onChange={ handleChange} 
            required 
          />
          <i 
            className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`} 
            onClick={togglePasswordVisibility}
          ></i>
        </div>
        <button type="submit" className="signup-button">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
