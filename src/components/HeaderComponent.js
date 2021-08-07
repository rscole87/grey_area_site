import React, { useState } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Container, Row, Col } from "reactstrap";
import ClientFullBrand from "../images/ga-horizontal-white.png";
import navLinks from "../shared/navLinks";
import ContactModal from "./ContactComponent";

export default function Header(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    if (isNavOpen === true) {
      toggleNav();
    }
  };

  const links = navLinks.map((link) => {
    return (
      <NavItem key={link.id} onClick={() => closeNav()}>
        <a className="nav-link" href={link.url}>
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
                <span
                  id="contact-link"
                  className="nav-link"
                  onClick={() => {
                    closeNav();
                    props.toggleModal();
                  }}
                >
                  Contact
                </span>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>

      <ContactModal isModalOpen={props.isModalOpen} toggleModal={props.toggleModal} />

      <section id="header-section">
        <Container>
          <Row id="header">
            <Col id="header-content-container" className="mx-auto my-auto d-flex">
              <div id="header-content" className="align-self-center">
                <div className="row">
                  <h1 id="main-heading" className="mx-auto text-center">
                    It's all about the Grey.
                  </h1>
                  <p className="mx-auto text-center">
                    We operate in the Grey Area to help you find the infomation you need. <br /> Efficient. Discreet. Confidential.
                  </p>
                </div>
                <div className="row">
                  <div className="mx-auto">
                    <a className="input-bttn" href="#services-section">
                      View More
                    </a>
                    <a
                      className="input-bttn"
                      onClick={() => {
                        closeNav();
                        props.toggleModal();
                      }}
                    >
                      Get Started
                    </a>
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
