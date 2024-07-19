import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <>
      
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <a className="navbar-brand" to="/"><img src="../public/images/shoe-logo-new_300x300.avif" alt="" className="img-fluid"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link text-dark active" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/product">PRODUCT</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/Contact">CONTACT</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/login">LOGIN</Link>
                </li>
              </ul>
              <div className="col-2 d-flex justify-content-evenly text-end">
              
                <Link to="adtocart.html">
                  <i className="fa fa-cart-shopping text-dark"> CART <sup className="bg-light p-1 rounded-circle">3</sup></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>  
     
      
    </>
  );
};

export default Navbar;
