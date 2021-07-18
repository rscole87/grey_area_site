import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "../images/grey-area-logo-icon.png";

export default function CallToAction() {
  return (
    <>
      <section id="call-to-action-section">
        <Container>
          <Row id="values-content" className="align-items-center">
            <Col id="logo-bg-div" sm="4" className="text-center pb-4 pb-sm-0">
              <img src={Logo} alt="" />
            </Col>

            <Col id="call-to-action-text-div" className="ps-sm-5" sm="8">
              <h4 data-aos="fade-left" data-aos-duration="1500">
                Always Discreet. Always Confidential.
              </h4>
              <p className="body-copy">At Grey Area Services, <strong>maintaining our clients' privacy</strong> is our number one priorty. All investigative records are stored securely and subsequently shredded to ensure maximum security. </p>
              <p className="body-copy">We believe a strong moral compass is essential to successfully fullfilling our investigative duty to you. As such, we thoroughly vet all of our team members to ensure <strong>consistent integrity</strong> in our operations.</p>
              <p className="body-copy">When pursuing investigative services, you should be able to rest assured the information you receive is fully truthful and 100% accurate. Our <strong>attention to detail</strong> is a defining feature which sets us apart from the competition. You can always trust the results of our investigations to be thorough, truthful, accurate.</p>
              <div className="row">
                <div className="col d-flex justify-content-center justify-content-sm-start">
                  <button className="input-bttn no-left-margin">View More</button>
                  <button className="input-bttn">Get Started</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
