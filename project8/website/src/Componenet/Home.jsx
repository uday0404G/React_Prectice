import React from 'react'
import '../Home/maincss.css'
import Navbar from '../Home/Navbar'
import Header from '../Home/Header'
import OurProduct from '../Home/OurProduct'
import DealOfTheDay from '../Home/DealOfTheDay'
import About from '../Home/About'
import Benner from '../Home/Benner'
import OurNws from '../Home/OurNws'
import Logo from '../Home/Logo'
import Footer from '../Home/Footer'


const Home = () => {
  return (
    <div>
     
      <Navbar/>
      <Header/>
      <OurProduct/>
      <DealOfTheDay/>
      <About/>
      <Benner/>
      <OurNws/>
      <Logo/>
      <Footer/>
    </div>
  )
}

export default Home