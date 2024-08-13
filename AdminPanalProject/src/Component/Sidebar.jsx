import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar pe-4 pb-3">
        <nav className="navbar bg-secondary navbar-dark">
          <a href="index.html" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>DarkPan</h3>
          </a>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }}/>
              <div className="bg-success rounded-circle border b  order-2 border-white position-absolute end-0 bottom-0 p-1"></div>
            </div>
            <div className="ms-3">
              <h6 className="mb-0">John Doe</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <NavLink to="/" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</NavLink>
            <Link to="/AddProduct" className="nav-item nav-link "><i className="fa fa-tachometer-alt me-2"></i>Add Products</Link>
            <Link to="/Product" className="nav-item nav-link "><i className="fa fa-tachometer-alt me-2"></i>Products</Link>
            <Link to="/Users" className="nav-item nav-link "><i className="fa fa-tachometer-alt me-2"></i>Users</Link>
      
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2"></i>Pages</a>
              <div className="dropdown-menu bg-transparent border-0">

                <Link to="/Signup" className="dropdown-item">Sign Up</Link>
                <Link to="*" className="dropdown-item">404 Error</Link>
               
              </div>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default Sidebar