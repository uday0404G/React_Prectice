import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const islogin=localStorage.getItem('isLogin');
    return (
    
        islogin ? children :<Navigate to={'/login'} />
   
  )
}

export default PrivateRoute