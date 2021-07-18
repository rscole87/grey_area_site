import React from "react";
import { Container, Row, Col } from "reactstrap";
import ClientFullBrand from "../images/grey-area-full-branding-02.png";
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
              <div className="align-self-center ">
                <img src={ClientFullBrand} className="client-branding" alt="Grey Area Services" />
              </div>
              <div>
                <ul id="footer-nav" className="p-0 ps-lg-5 mt-3 mt-lg-0 d-flex flex-row flex-lg-column justify-content-around">
                  {links}
                </ul>
              </div>
            </Col>

            <Col sm="4" className="text-center text-sm-start ps-sm-5">
              <address>
                12345 Main Street St. Petersburg, FL 33700 <br />
                (727) 555-1234 <br />
                hello@greyareaservices.com
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
