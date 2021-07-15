import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";
import Logo from "../images/grey-area-logo-icon.png"

export default function CallToAction() {
  return (
    <>
      <section id="call-to-action-section">
        <Element id="contact" name="contact">
          <Container>
            <Row>
              <Col id="logo-bg-div" sm="4">
                <img src={Logo} alt="" />
              </Col>

              <Col id="call-to-action-text-div" className="ps-5 pt-5" sm="8">
                <Fade top duration={2000}>
                  <h4>Always Discreet. Always Confidential.</h4>
                  <p className="body-copy">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
                  <button className="input-bttn">View More</button>
                  <button className="input-bttn">Get Started</button>
                </Fade>
              </Col>
            </Row>
          </Container>
        </Element>
      </section>
    </>
  );
}
