import React, { useState } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <Navbar dark sticky="top" expand="md" style={{ backgroundColor: "#128df1bd" }}>
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <img src="" height="30" width="30" alt="Grey Area Services" />
          </NavbarBrand>
          <NavbarToggler onClick={toggleNav} />
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <Link to="about-section" spy={true} smooth={true} className="some-class" activeClass="some-active-class">
                <NavItem>About</NavItem>
              </Link>

              <NavItem>
                <Link to="services-section" spy={true} smooth={true} className="some-class" activeClass="some-active-class">
                  Services
                </Link>
              </NavItem>
              <NavItem>
                <Link to="pricing" spy={true} smooth={true} className="some-class" activeClass="some-active-class">
                  Pricing
                </Link>
              </NavItem>
              <NavItem>
                <Link to="call-to-action-section" spy={true} smooth={true} className="some-class" activeClass="some-active-class">
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>

      <section id="header-section">
        <Container>
          <Row id="header">
            <Col id="header-content-container" className="mx-auto my-auto">
              <div id="header-content">
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
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
