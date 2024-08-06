import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (
   <><div class="top-header-area" id="sticker">
   <div class="container">
     <div class="row">
       <div class="col-lg-12 col-sm-12 text-center">
         <div class="main-menu-wrap">
       
           <div class="site-logo">
             <a to="/">
               <img src="./public/img/logo.png" alt=""/>
             </a>
           </div>
         
           <nav class="main-menu">
             <ul>
               <li class="current-list-item"><NavLink to="/">Home</NavLink>
                
                  
               </li>
               <li><NavLink to="/about">About</NavLink></li>
               <li><NavLink to="/Product">Shop</NavLink>

               </li>
               <li><NavLink to="/news">News</NavLink>
               </li>
               <li><NavLink to="/contact">Contact</NavLink></li>
               
               <li>
                 <div class="header-icons">
                   <NavLink class="shopping-cart" to="/cart"><i class="fas fa-shopping-cart"></i></NavLink>
                   <NavLink class="mobile-hide search-bar-icon" to="/"><i class="fas fa-search"></i></NavLink>
                 </div>
               </li>
             </ul>
           </nav>
           <a class="mobile-show search-bar-icon" href="#"><i class="fas fa-search"></i></a>
           <div class="mobile-menu"></div>
          
         </div>
       </div>
     </div>
   </div>
 </div>

</>
  );
};

export default Navbar;
