import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Header from './Pages/Header'
import Features from './Pages/Feachers'
import Product from './Pages/Product'

function App() {

  return (
    <>
    <Navbar/>
    <Header/>
    <Features/>
    <Product/>
    </>
  )
}

export default App
