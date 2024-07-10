import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Home from '../Public/Home'
import Man from '../Public/Man'
import Singlepage from '../Public/Singlepage'
import Women from '../Public/Women'
import PrivateRoute from '../Component/PrivateRoute'
import Login from '../Public/Login'
import Error from '../Public/Error'



const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/Man" element={<PrivateRoute><Man />   </PrivateRoute>} />
   
      <Route path="/Women" element={<Women />} />
      <Route path="/Singlepage/:id" element={<Singlepage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="*" element={<Error />} />
    
    </Routes>

  )
}

export default Rout                            
