import React, { useEffect, useRef, useState, } from "react";
import { Container, Nav, Navbar, NavDropdown, } from "react-bootstrap";
import "./header.css"
import LogIn from '../../../Assets/Icons/login.png'
import loGo from '../../../Assets/logo/logo.png'
import { NavLink } from "react-router-dom";

function Header() {
  const [toggleButtonForHamburger, setToggleButtonForHamburger] = useState(false)
  window.onscroll = function () {
    var navbar = document.querySelector('.mainNav')
    if (window.pageYOffset > 0) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  }
  const ref = useRef()
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="mainNav">
        <Container>
          <Navbar.Brand><img className="w-100" src={loGo}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"
            onClick={() => {
              setToggleButtonForHamburger(!toggleButtonForHamburger)
            }}
          >
            <span className="">
              <i className={!toggleButtonForHamburger ? `fas fa-bars text-light` : 'fas fa-times text-light'}></i>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav"
            ref={ref}
            onClick={() => {
              ref.current.classList.remove('collapse')
            }}

          >
            <Nav className="m-auto mobileMenu">
              <NavLink className='nav-link' to="/home"> HOME</NavLink>
              <NavLink className='nav-link' to="/about-us" > ABOUT US </NavLink>
              <NavLink className='nav-link' to="/plans" > PLANS </NavLink>
              <NavLink className='nav-link' to="/services" > SERVICES  </NavLink>
              <NavLink className='nav-link' to="/pricing" > PRICING </NavLink>
              <NavLink className='nav-link' to="/portfolio" > PORTFOLIO </NavLink>
              <NavLink className='nav-link' to="/blog" > BLOG </NavLink>
              <NavLink className='nav-link' to="/contact" > CONTACT </NavLink>
              <NavLink to="/login" className="adminLink">LOGIN <img src={LogIn}></img> </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
