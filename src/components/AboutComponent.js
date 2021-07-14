import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function About() {
  return (
    <>
      <section id="about-section">
        <Container>
          <Row>
            <Col id="about-text-div" sm="8">
              <h3>Revealing the Truth</h3>
              <p className="body-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

              <p className="body-copy">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <p className="body-copy">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
            </Col>

            <Col id="about-form-div" sm="4">
              <p className="body-copy">Please fill in the fomr below and we will contact you for a free estimate based on your needs.</p>

              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea name="" id="" cols="30" rows="5" placeholder="Your questions:"></textarea>
              <button className="input-bttn">Free Consult</button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
