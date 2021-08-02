import React, { useEffect, } from "react";
import { Container, Nav, Navbar, NavDropdown, } from "react-bootstrap";
import "./header.css"
import LogIn from '../../../Assets/Icons/login.png'
import loGo from '../../../Assets/logo/logo.png'
import { NavLink } from "react-router-dom";

function Header() {
  window.onscroll = function () {
    var navbar = document.querySelector('.mainNav')
    if (window.pageYOffset > 0) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="mainNav">
        <Container>
          <Navbar.Brand><img className="w-100" src={loGo}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav bg-light" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">

              <NavLink className='nav-link' to="/home"> HOME</NavLink>
              <NavLink className='nav-link' to="/about-us"> ABOUT US </NavLink>
              <NavLink className='nav-link' to="/plans" > PLANS </NavLink>
              <NavLink className='nav-link' to="/services" > SERVICES  </NavLink>
              <NavLink className='nav-link' to="/pricing" > PRICING </NavLink>
              <NavLink className='nav-link' to="/portfolio" > PORTFOLIO </NavLink>
              <NavLink className='nav-link' to="/blog" > BLOG </NavLink>
              <NavLink className='nav-link' to="/contact" > CONTACT </NavLink>
            </Nav>
            <Nav>
              <NavLink to="/login" className="adminLink">LOGIN <img src={LogIn}></img> </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
