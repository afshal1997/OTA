import React, { useEffect, useRef, useState } from "react";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./header.css";
import LogIn from "../../../Assets/Icons/login.png";
import loGo from "../../../Assets/logo/logo.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [toggleButtonForHamburger, setToggleButtonForHamburger] =
    useState(false);
  window.onscroll = function () {
    var navbar = document.querySelector(".mainNav");
    if (window.pageYOffset > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };
  const ref = useRef();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="mainNav">
        <Container>
          <Navbar.Brand>
            <img className="w-100" src={loGo}></img>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              setToggleButtonForHamburger(!toggleButtonForHamburger);
            }}
          >
            <span className="">
              <i
                id="toggler"
                className={
                  !toggleButtonForHamburger
                    ? `fas fa-bars text-light`
                    : "fas fa-times text-light"
                }
              ></i>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            ref={ref}
            onClick={() => {
              ref.current.classList.remove("collapse");
            }}
          >
            <Nav className="m-auto mobileMenu">
              <NavLink
                className="nav-link"
                to="/home"
                onClick={() => {
                  document.getElementById("toggler").click();
                  setToggleButtonForHamburger(false);
                }}
              >
                HOME
              </NavLink>
              <NavLink
                className="nav-link"
                to="/about-us"
                onClick={() => {
                  document.getElementById("toggler").click();
                  setToggleButtonForHamburger(false);
                }}
              >
                
                ABOUT US
              </NavLink>
              <Dropdown className="nav-link">
                <Dropdown.Toggle id="dropdown-basic" className="plansDropdown">
                  PLANS
                </Dropdown.Toggle>
                <Dropdown.Menu className="shadow-lg">
                  <Dropdown.Item>
                    <Link
                      onClick={() => {
                        document.getElementById("toggler").click();
                        setToggleButtonForHamburger(false);
                      }}
                      to="/white-labelling"
                    >
                      
                      White Labelling
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      onClick={() => {
                        document.getElementById("toggler").click();
                        setToggleButtonForHamburger(false);
                      }}
                      to="/digital-startup"
                    >
                      Digital Startup
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      onClick={() => {
                        document.getElementById("toggler").click();
                        setToggleButtonForHamburger(false);
                      }}
                      to="/resource-outsourcing"
                    >
                      Resource Outsourcing
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      onClick={() => {
                        document.getElementById("toggler").click();
                        setToggleButtonForHamburger(false);
                      }}
                      to="/call-center"
                    >
                      Call Center
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="nav-link">
                <Dropdown.Toggle id="dropdown-basic" className="plansDropdown">
                  SERVICES
                </Dropdown.Toggle>
                <Dropdown.Menu className="shadow-lg">
                  <Dropdown.Item>
                    <Link
                      onClick={() => {
                        document.getElementById("toggler").click();
                        setToggleButtonForHamburger(false);
                      }}
                      to="/creative-design"
                    >
                      
                      Creative & Design
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      onClick={() => {
                        document.getElementById("toggler").click();
                        setToggleButtonForHamburger(false);
                      }}
                      to="/web-development"
                    >
                      Web Development
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      onClick={() => {
                        document.getElementById("toggler").click();
                        setToggleButtonForHamburger(false);
                      }}
                      to="/digital-marketing"
                    >
                      Digital Marketing
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      onClick={() => {
                        document.getElementById("toggler").click();
                        setToggleButtonForHamburger(false);
                      }}
                      to="/app-development"
                    >
                      App Development
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      onClick={() => {
                        document.getElementById("toggler").click();
                        setToggleButtonForHamburger(false);
                      }}
                      to="/video-development"
                    >
                      Video Animation
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      onClick={() => {
                        document.getElementById("toggler").click();
                        setToggleButtonForHamburger(false);
                      }}
                      to="/content-writting"
                    >
                      Content Writing
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      onClick={() => {
                        document.getElementById("toggler").click();
                        setToggleButtonForHamburger(false);
                      }}
                      to="/cyber-security"
                    >
                      Cyber Security
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <NavLink
                className="nav-link"
                onClick={() => {
                  document.getElementById("toggler").click();
                  setToggleButtonForHamburger(false);
                }}
                to="/pricing"
              >
                
                PRICING
              </NavLink>
              <NavLink
                className="nav-link"
                onClick={() => {
                  document.getElementById("toggler").click();
                  setToggleButtonForHamburger(false);
                }}
                to="/portfolio"
              >
                
                PORTFOLIO
              </NavLink>
              <NavLink
                className="nav-link"
                onClick={() => {
                  document.getElementById("toggler").click();
                  setToggleButtonForHamburger(false);
                }}
                to="/blog"
              >
                
                BLOG
              </NavLink>
              <NavLink
                className="nav-link"
                onClick={() => {
                  document.getElementById("toggler").click();
                  setToggleButtonForHamburger(false);
                }}
                to="/contact"
              >
                
                CONTACT
              </NavLink>
              <NavLink
                onClick={() => {
                  document.getElementById("toggler").click();
                  setToggleButtonForHamburger(false);
                }}
                to="/login"
                className="adminLink"
              >
                LOGIN <img src={LogIn}></img>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
