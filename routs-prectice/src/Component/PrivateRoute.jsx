import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({Children}) => {
  const isLogin=false
    return (
    isLogin?Children:<Navigate to={"/Login"}/>
  )
}

export default PrivateRoute