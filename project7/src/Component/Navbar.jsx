import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid fixed-top">
      <nav className="navbar navbar-light bg-white navbar-expand-xl">
                    <a  className="navbar-brand">
                        <h1 className=" display-6">Fruitables</h1>
                    </a>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <a  className="nav-item nav-link active">Home</a>
                            <a className="nav-item nav-link">Shop</a>
                          
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                    <a className="dropdown-item">Cart</a>
                                    <a className="dropdown-item">Chackout</a>
                                    <a className="dropdown-item">Testimonial</a>
                                    <a className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a className="nav-item nav-link">Order Details</a>

                            <a className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="d-flex m-3 me-0">
                            <button
                                className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                                data-bs-toggle="modal" data-bs-target="#searchModal"id="se" ><i className="fas fa-search "
                                     ></i></button>
                            <a className="position-relative me-4 my-auto">
                          
                           
                                
                            
                                </a>
                            <a className="my-auto">
                                <i className="fas fa-user fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </nav>
      </div>
    </>
  );
};

export default Navbar;
