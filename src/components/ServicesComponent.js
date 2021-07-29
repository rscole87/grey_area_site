import React, { useState } from "react";
import { Container, Row, Col, Collapse } from "reactstrap";
import iconDocuments from "../images/icon-documents.png";
import iconBinoculars from "../images/icon-binoculars.png";
import iconSheild from "../images/icon-sheild.png";

export default function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleServicesList = () => setIsOpen(!isOpen);

  return (
    <>
      <section id="services-section">
        <Container>
          <h3 className="text-center">How We Can Help</h3>

          <Row id="service-options-div" className="pt-3 ">
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
              <img src={iconSheild} className="service-icon" alt="" />
              <h4 className="service-heading">Security Services</h4>
              <p className="service-description">If you have concerns about your physical safety or the safety of high value items, our military-trained team is available to help put your mind at ease.</p>
            </Col>
            <Row>
              <Col className="d-flex justify-content-center">
                <button className="input-bttn" onClick={() => toggleServicesList()}>{isOpen ? 'Hide' : 'Show'} all services</button>
              </Col>
            </Row>
          </Row>
        </Container>

        <Collapse id="services-list-div" isOpen={isOpen}>
          <Row>
            <Col sm="6" lg="4" className="order-sm-1 order-lg-1">
              <h6>Investigation and Business Intelligence Services</h6>
              <ul>
                <li>Process Serving</li>
                <li>Background Checks</li>
                <li>
                  Litigation
                  <ol>
                    <li>Child Custody</li>
                    <li>Infidelity/Divorce</li>
                    <li>Claims Against Law Enforcement</li>
                  </ol>
                </li>
                <li>Insurance – Full Suite of Services</li>
              </ul>
            </Col>

            <Col sm="12" lg="4" className="order-sm-3 order-lg-2">
              <ul>
                <li>
                  Support to Corporate Security and Legal Departments
                  <ol>
                    <li>Compliance assessments</li>
                    <li>Threat Assessments</li>
                    <li>Vulnerability Assessments</li>
                    <li>
                      Security Assessment (Physical)
                      <ul>
                        <li>Scalable and flexible</li>
                        <li>Personnel, systems, and procedures</li>
                        <li>Announced or unannounced</li>
                        <li>Overt or discreet presence and activity</li>
                      </ul>
                    </li>
                    <li>
                      Internal Investigations
                      <ul>
                        <li>Physical Security Breach</li>
                        <li>Theft</li>
                        <li>Damage to property</li>
                        <li>Employee misconduct</li>
                        <li>Sexual harassment</li>
                        <li>Discrimination</li>
                      </ul>
                    </li>
                    <li>Due diligence to support mergers, acquisitions, and sub-contracting</li>
                  </ol>
                </li>
              </ul>
            </Col>

            <Col sm="6" lg="4" className="order-sm-2 order-lg-3">
              <h6>Security Services</h6>
              <ul>
                <li>Specializing in low visibility or discreet activity</li>
                <li>VIP, executive protection, and personal security - Armed or unarmed</li>
                <li>High value item protection and transport</li>
                <li>Sobriety Supervisors, Sobriety Chaperones, Sober Companions, or Sober Escorts</li>
              </ul>
            </Col>
          </Row>
        </Collapse>
      </section>
    </>
  );
}
