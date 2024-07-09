import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Public/Home'
import Man from '../Public/Man'
import Women from '../Public/Women'
import Singlepage from '../Public/Singlepage'



const Rout = () => {
  return (
<Routes>
  <Route path="/" element={<Home/>} ></Route>
  <Route path="/men" element={<Man />} ></Route>
  <Route path="/Women" element={<Women />} ></Route>
  <Route path="/Singlepage/:id" element={<Singlepage />} ></Route>

</Routes>

  )
}

export default Rout                            
