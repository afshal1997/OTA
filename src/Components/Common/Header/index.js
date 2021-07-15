import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./header.css"
import LogIn from '../../../Assets/Icons/login.png'
import loGo from '../../../Assets/logo/logo.png'

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="mainNav">
        <Container>
          <Navbar.Brand href="/"><img className="w-100" src={loGo}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav  bg-light" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">

              <Nav.Link href="/"> HOME</Nav.Link>
              <Nav.Link href="/"> ABOUT US </Nav.Link>
              <Nav.Link href="/"> PLANS </Nav.Link>
              <Nav.Link href="/"> SERVICES  </Nav.Link>
              <Nav.Link href="/"> PRICING </Nav.Link>
              <Nav.Link href="/"> PORTFOLIO </Nav.Link>
              <Nav.Link href="/"> BLOG </Nav.Link>
              <Nav.Link href="/"> CONTACT </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/" className="adminLink">LOGIN <img src={LogIn}></img> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
