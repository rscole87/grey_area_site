import React, { useState } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Container, Row, Col } from "reactstrap";
import ClientFullBrand from "../images/grey-area-full-branding-02.png";
import navLinks from "./shared/navLinks";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const links = navLinks.map((link) => {
    return (
      <NavItem key={link.id}>
        <a className="nav-link" href={link.url} onClick={toggleNav}>
          {link.text}
        </a>
      </NavItem>
    );
  }); 

  return (
    <>
      <Navbar id="main-nav" dark sticky="top" expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <img id="client-branding" src={ClientFullBrand} height="30" width="30" alt="Grey Area Services" />
          </NavbarBrand>
          <NavbarToggler onClick={toggleNav} />
          <Collapse isOpen={isNavOpen} className="justify-content-end" navbar>
            <Nav className="text-center" navbar>
              {links}
            </Nav>
          </Collapse>
        </div>
      </Navbar>

      <section id="header-section">
        <Container>
          <Row id="header">
            <Col id="header-content-container" className="mx-auto my-auto">
              <div id="header-content" className="text-center">
                <div className="row">
                  <h1>It's all about the Grey.</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className="row">
                  <div>
                    <button className="input-bttn ">View More</button>
                    <button className="input-bttn mx-auto">Get Started</button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
