import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({Children}) => {
  const isLogin=true
    return (
    isLogin?Children:<Navigate to={"/Login"}/>
  )
}

export default PrivateRoute