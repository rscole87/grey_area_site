import React from "react";
import { Container, Row, Col } from "reactstrap";
import iconDocuments from "../images/icon-documents.png"
import iconBinoculars from "../images/icon-binoculars.png"
import iconPeople from "../images/icon-people.png"

export default function Services() {
  return (
    <>
      <section id="services-section">
        <Container>
          <h3 className="text-center">How We Can Help</h3>

          <Row id="service-options-div" className="pt-3 " >
            <Col className="service text-center p-3" sm="4" data-aos="fade-down" data-aos-duration="1000">
              <img src={iconDocuments} className="service-icon" alt="" />
              <h4 className="service-heading">Records Search</h4>
              <p className="service-description">Whether background checks, property records, criminal records or undisclosed assets, our team is well equipped to find the information you need.</p>
            </Col>

            <Col className="service text-center p-3" sm="4" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">
              <img src={iconBinoculars} className="service-icon" alt="" />
              <h4 className="service-heading">Investigative Services</h4>
              <p className="service-description">We offer a variety of investigative services including surveillance operations, infidelity investigation, workers compensation claims, and more.</p>
            </Col>

            <Col className="service text-center p-3" sm="4" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="600">
              <img src={iconPeople} className="service-icon" alt="" />
              <h4 className="service-heading">Missing Persons</h4>
              <p className="service-description">Locating a missing person can be a challenging process for anyone, so let our team loctate them for you and give you peace of mind.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
