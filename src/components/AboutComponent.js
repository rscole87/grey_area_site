import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function About() {
  return (
    <>
      <section id="about-section">
        <Container>
          <Row>
            <Col id="about-text-div" className="pe-sm-5" sm="8">
              <h3 data-aos="fade-right" data-aos-duration="1500">Revealing the Truth</h3>
              <p className="body-copy">Grey Area Services is a veteran-owned and operated full service private investigative firm serving the Tampa Bay Area and surrounding communities. Our team is comprised of diverse, talented individuals who leverage years of law enforcement and military experience to provide a wide variety of services for our clients. </p>

              <p className="body-copy">We believe our investigative services provide a level of transparency everyone deserves, which is why we serve both commercial entities and private citizens. Uncovering the truth for you is our ultimate goal.</p>

              <p className="body-copy">The truth is what you're seeking, and it's our mission to get you there.</p>
            </Col>

            <Col id="about-form-div" className="ps-sm-5" sm="4">
              <p className="body-copy">Please fill in the form below and we will contact you for a free estimate based on your needs.</p>
              <form action="submit">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea name="" id="" cols="30" rows="3" placeholder="Your Questions:"></textarea>
                <button type="submit" className="input-bttn mx-auto">
                  Free Consult
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
