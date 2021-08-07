import React from "react";
import { Container, Row, Col } from "reactstrap";
import ClientFullBrand from "../images/ga-vertical-white.png";
import ClientFullBrandHorizontal from "../images/ga-horizontal-white.png";
import MtLogo from "../images/MT-logo-WHITE.png";
import navLinks from "../shared/navLinks";

export default function Footer() {
  const links = navLinks.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.url} className="footer-link">
          {link.text}
        </a>
      </li>
    );
  });

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm="4" className="d-flex flex-column flex-lg-row justify-content-center justify-content-sm-start">
              <div className="align-self-center mb-4 mb-sm-0">
                <img src={ window.innerWidth <= 575 ? ClientFullBrand : ClientFullBrandHorizontal} className="client-branding" alt="Grey Area Services" />
              </div>
              <div className="d-none d-sm-block">
                <ul id="footer-nav" className="p-0 pl-lg-5 mt-3 mt-lg-0 d-flex flex-row flex-lg-column justify-content-around">
                  {links}
                </ul>
              </div>
            </Col>

            <Col sm="4" className="text-center text-sm-start mb-4 mb-sm-0 ps-sm-5 ">
              <address>
                P.O. Box 7715 <br /> St. Petersburg, FL 33734 <br />
                <a href="tel:+17273354774">(727) 335-4774 </a> <br />
                <a href="mailto:information@greyareaservices.com">information@greyareaservices.com</a> 
              </address>
            </Col>

            <Col sm="4" className="text-center">
              <p>Website designed and developed by:</p>
              <img src={MtLogo} id="mt-logo" alt="Marble Theory Design" />
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
