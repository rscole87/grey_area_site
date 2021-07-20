import React, { useState } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Container, Row, Col } from "reactstrap";
import ClientFullBrand from "../images/grey-area-full-branding-02.png";
import navLinks from "../shared/navLinks";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    if (isNavOpen == true) {
      toggleNav()
    }
  }

  const links = navLinks.map((link) => {
    return (
      <NavItem key={link.id} onClick={() => closeNav()}>
        <a className="nav-link" href={link.url} >
          {link.text}
        </a>
      </NavItem>
    );
  });

  return (
    <>
      <Navbar id="main-nav" dark expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <img className="client-branding" src={ClientFullBrand} height="30" width="30" alt="Grey Area Services" />
          </NavbarBrand>
          <NavbarToggler onClick={toggleNav} />
          <Collapse isOpen={isNavOpen} className="justify-content-end" navbar>
            <Nav className="text-center" navbar>
              {links}
              <NavItem>
                <a id="contact-link" className="nav-link" href="" onClick={() => toggleNav()}>Contact</a>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>

      <section id="header-section">
        <Container>
          <Row id="header">
            <Col id="header-content-container" className="mx-auto my-auto d-flex">
              <div id="header-content" className="text-center align-self-center">
                <div className="row">
                  <h1 id="main-heading">It's all about the Grey.</h1>
                  <p>We operate in the Grey Area to help you find the infomation you need. <br /> Efficient. Discreet. Confidential.</p>
                </div>
                <div className="row">
                  <div>
                    <button className="input-bttn ">View More</button>
                    <button className="input-bttn ">Get Started</button>
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
