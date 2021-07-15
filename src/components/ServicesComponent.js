import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Element } from "react-scroll";
import Fade from 'react-reveal/Fade';

export default function Services() {
  return (
    <>
      <section id="services-section">
        <Element id="services" name="services">
          <Container>
            <h3>How We Can Help</h3>
            <Fade top duration={2000}>
              <Row id="service-options-div">
                <Col className="service text-center" sm="4">
                  <img src="" alt="" />
                  <h4>Service</h4>
                  <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>

                <Col className="service text-center" sm="4">
                  <img src="" alt="" />
                  <h4>Service</h4>
                  <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>

                <Col className="service text-center" sm="4">
                  <img src="" alt="" />
                  <h4>Service</h4>
                  <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
              </Row>
            </Fade>
          </Container>
        </Element>
      </section>
    </>
  );
}
