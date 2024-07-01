import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="img/logo.png" alt=""/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-center" id="navbarNav">
        <ul class="navbar-nav  m-auto d-flex gap-xl-5">
          <li class="nav-item">
            <a class="nav-link text-dark active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Shope</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Pages</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark ">Blogs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark ">contact</a>
          </li>
        </ul>
        <div class="col-3 d-flex gap-3 justify-content-end">
          <i class="fa fa-search"></i>
          <i class="fa-solid fa-heart"></i>
          <i class="fa fa-shopping-cart"><sup class="bg-danger rounded-circle text-white p-1">5</sup></i>


        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar