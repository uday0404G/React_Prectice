  import { useState } from 'react'
  import './App.css'
  import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

import Feachers from './Component/Feachers';
import Product from './Component/Product';
import Header1 from './Component/Header1';
import Branding from './Component/Branding';
import Subscribe from './Component/Subscribe';
import Bestsellert from './Component/Bestsellert';




  function App() {
    

    return (
      <>
        <header>
    <Navbar/>
<Header1/>
        </header>
        <Feachers/>
        <Product/>
        <Bestsellert/>
<Subscribe/>
<Branding/>
        <Footer/>
      </>
    )
  }

  export default App
