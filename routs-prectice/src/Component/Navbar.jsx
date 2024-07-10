
import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
const Navbar1 = () => {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Man">Man</NavLink>
            <NavLink to="/Women">Women</NavLink>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Navbar1

