import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function CallToAction() {
  return (
    <>
      <section id="call-to-action-section">
        <Container>
          <Row>
            <Col id="logo-bg-div" sm="4">
              <img src="" alt="" />
            </Col>

            <Col id="call-to-action-text-div" sm="8">
              <h4>Always Discreet. Always Confidential.</h4>
              <p className="body-copy">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
              <button className="input-bttn">View More</button>
              <button className="input-bttn">Get Started</button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
