import React from 'react'
import Feachers from './Feachers'
import Footer from './Footer'
import Fect from './Fect'
import Product from './Product'
import Brands from './Brands'
import Header from './Header'
import Navbar from '../Component/Navbar'
const Home = () => {
  
  return (
    <div>
        <header>
          <Navbar/>
          <Header/>

        </header>
        <Feachers/>
        <Product/>
      <Brands/>
        <Fect/>
        <Footer/>

    </div>
  )
}

export default Home