import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../Component/Navbar';

const Contact = () => {
  return (
    <div>
      <div className="container-fluid se px-5 bg-light py-lg-3" style={{ display: 'none' }}>
        <div className="container px-5">
          <input type="search" placeholder="Search products in our store" className="form-control text-uppercase" />
        </div>
      </div>
    <Navbar/>
      <div className="container-fluid text-center p-2 mb-2 text-light" style={{ background: '#88c8bc' }}>
        <h3>25% off (Almost) Everything! Use Code: Summer Sale</h3>
      </div>
      <div className="container mb-5">
        <Link className="text-decoration-none ms-5" to="/" style={{ color: '#88c8bc' }}>HOME</Link> / <Link to="/contact" className="text-dark text-decoration-none">CONTACT US</Link>
        <div className="container-fluid pt-5 ps-5 text-light" style={{ background: 'url(images/img_bg_2.jpg) no-repeat center', height: '70vh', backgroundSize: 'cover' }}>
          <h1>CONTACT US</h1>
        </div>
        <center>
          <div className="perent py-5">
            <h1>Contact Form</h1>
            <div className="div1">
              <div className="div">
                <i className="fa-solid fa-location-dot"></i>
                <p>Address:</p>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className="div">
                <i className="fa-solid fa-phone"></i>
                <p>Phone:</p>
                <p>+ 1235 2355 98</p>
              </div>
              <div className="div">
                <i className="fa-solid fa-paper-plane"></i>
                <p>Email:</p>
                <p>info@yoursite.com</p>
              </div>
            </div>
            <div className="gt">
              <h1 id="h1">Get in touch with us</h1>
              <input type="text" placeholder="Enter Your Name" className="form-control" /><br />
              <div className="input-group">
                <span className="input-group-text" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>@</span>
                <input type="email" placeholder="Enter Your Email" className="form-control" /><br />
              </div><br />
              <input type="text" placeholder="Enter Your Subject" className="form-control" /><br />
              <input type="text" placeholder="Message" className="form-control" /><br />
             
              <br /><br /><button type="button" className="form-control" style={{ color: 'black', backgroundColor: '#bc9864', border: 'none' }}>SEND MESSAGE</button>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Contact;
