import React, { useState } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <Navbar light sticky="top" expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <img src="" height="30" width="30" alt="Grey Area Services" />
          </NavbarBrand>
          <NavbarToggler onClick={toggleNav} />
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link" to="/pricing">
                  Pricing
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>

      <section id="header-section">
        <Container>
          <Row id="header">
            <Col>
              <h1>It's all about the Grey</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <div className="row">
                <div className="col-3"></div>
                <div className="col-3">
                  <button className="input-bttn ">View More</button>
                </div>
                <div className="col-3">
                  <button className="input-bttn mx-auto">Get Started</button>
                </div>
                <div className="col-3"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
