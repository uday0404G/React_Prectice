import React from "react";
import { Link } from "react-router-dom";

// Import Bootstrap's JavaScript dependencies where needed, for example in your Navbar component:
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <Link className="navbar-brand" to="/"><img src="../public/images/shoe-logo-new_300x300.avif" alt="" className="img-fluid"/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link text-dark active" to="/">HOME</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link text-dark dropdown-toggle" to="#" id="navbarDropdownMenuLinkMen" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    MEN
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkMen">
                    <li><Link className="dropdown-item" to="men.html">MEN</Link></li>
                    <li><Link className="dropdown-item" to="adtocart.html">SHOPPING CART</Link></li>
                    <li><Link className="dropdown-item" to="checkout.html">CHECKOUT</Link></li>
                    <li><Link className="dropdown-item" to="wishlist.html">WISHLIST</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link text-dark dropdown-toggle" to="#" id="navbarDropdownMenuLinkWomen" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    WOMEN
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkWomen">
                    <li><Link className="dropdown-item" to="women.html">WOMEN</Link></li>
                    <li><Link className="dropdown-item" to="adtocart.html">SHOPPING CART</Link></li>
                    <li><Link className="dropdown-item" to="ordercomplete.html">ORDER COMPLETE</Link></li>
                    <li><Link className="dropdown-item" to="wishlist.html">WISHLIST</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="about.html">ABOUT</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="product.html">PRODUCT</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="contact.html">CONTACT</Link>
                </li>
              </ul>
              <div className="col-2 d-flex justify-content-evenly text-end">
                <i className="fa fa-search text-dark" id="search-icon"></i>
                <Link to="adtocart.html">
                  <i className="fa fa-cart-shopping text-dark"> CART <sup className="bg-light p-1 rounded-circle">3</sup></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>  
        <div className="container-fluid h-75 d-flex align-items-center justify-content-center">
          <div className="col-12 col-lg-6 text-light text-center">
            <h1 className="display-3 fw-bolder">MEN'S</h1>
            <h3>SHOES</h3>
            <h1>COLLECTION</h1>
            <p>New trending shoes</p>
            <button type="button" className="btn btn-secondary">SHOP COLLECTION</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
