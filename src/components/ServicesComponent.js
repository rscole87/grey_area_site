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
          </Row>
        </Container>

        <Container>
          <Collapse id="services-list-div" className="p-5" isOpen={isOpen}>
            <h6>Investigation and Business Intelligence Services</h6>
            <ol>
              <li>Process Serving</li>
              <li>Background Checks</li>
              <li>
                Litigation
                <ul>
                  <li>Child Custody</li>
                  <li>Infidelity/Divorce</li>
                  <li>Claims Against Law Enforcement</li>
                </ul>
              </li>
              <li>Insurance – Full Suite of Services</li>

              <li>
                Support to Corporate Security and Legal Departments
                <ul>
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
                </ul>
              </li>
            </ol>

            <h6>Security Services</h6>
            <ol>
              <li>Specializing in low visibility or discreet activity</li>
              <li>VIP, executive protection, and personal security - Armed or unarmed</li>
              <li>High value item protection and transport</li>
              <li>Sobriety Supervisors, Sobriety Chaperones, Sober Companions, or Sober Escorts</li>
            </ol>

            <h6>Our Approach</h6>
            <ol>
              <li>Discreet surveillance – Digital and physical</li>
              <li>
                Site/scene forensics, documentation, and analysis
                <ul>
                  <li>Law enforcement ready reports</li>
                  <li>Photo and video recording</li>
                  <li>2D and 3D digital modeling</li>
                </ul>
              </li>
              <li>UAV (Drone) support with licensed drone pilots</li>
              <li>Polygraph – in-house certified polygrapher</li>
              <li>Electronic data recovery</li>
              <li>Video and audio analysis</li>
              <li>International travel ready</li>
              <li>Foreign language proficiency</li>
            </ol>
          </Collapse>
          <Row>
            <Col className="d-flex justify-content-center">
              <div className="mx-auto">
                <button className="input-bttn" onClick={() => toggleServicesList()}>
                  {isOpen ? "Hide" : "Show"} all services
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
