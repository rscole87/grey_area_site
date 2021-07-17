import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function Services() {
  return (
    <>
      <section id="services-section">
        <Container>
          <h3 className="text-center">How We Can Help</h3>

          <Row id="service-options-div" className="pt-3 " >
            <Col className="service text-center" sm="4" data-aos="fade-down" data-aos-duration="1000">
              <img src="" alt="" />
              <h4>Service</h4>
              <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Col>

            <Col className="service text-center" sm="4" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">
              <img src="" alt="" />
              <h4>Service</h4>
              <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Col>

            <Col className="service text-center" sm="4" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="600">
              <img src="" alt="" />
              <h4>Service</h4>
              <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
