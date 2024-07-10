import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Public/Home'
import Man from '../Public/Man'
import Singlepage from '../Public/Singlepage'
import Women from '../Public/Women'


const Rout = () => {
  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Man" element={<Man />} />
      <Route path="/Singlepage/:id" element={<Singlepage />} />
      <Route path="/Women" element={<Women />} />
    </Routes>
  )
}

export default Rout                            
