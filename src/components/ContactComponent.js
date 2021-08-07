import React, { useState } from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";
import clientBrandingBlack from "../images/ga-vertical-color.png";

const ContactModal = (props) => {
  const [investigation, setInvestigation] = useState(false);
  const [records, setRecords] = useState(false);
  const [processServer, setProcessServer] = useState(false);

  const toggleInvestigation = () => {
    setInvestigation(!investigation);
  };

  const toggleRecords = () => {
    setRecords(!records);
  };

  const toggleProcessServer = () => {
    setProcessServer(!processServer);
  };

  return (
    <Modal id="contact-form-modal" isOpen={props.isModalOpen} toggle={props.toggleModal} size="lg">
      <ModalHeader toggle={props.toggleModal}>Contact Us</ModalHeader>
      <ModalBody>
        <p>Please complete the below form and we will contact you shortly to discuss how we can best assist you.</p>
        <small>* Indicates a required field.</small>
        <form id="client-inquiry-form" name="client-inquiry-form" method="POST" data-netlify="true">
          <Row>
            <Col sm={6}>
              <FormGroup>
                <input type="hidden" name="form-name" value="client-inquiry-form" />
                <Label htmlFor="first-name" hidden>
                  First Name
                </Label>
                <Input type="text" id="first-name" name="first-name" placeholder="First Name *" required />
              </FormGroup>
            </Col>

            <Col sm={6}>
              <FormGroup>
                <Label htmlFor="last-name" hidden>
                  Last Name
                </Label>
                <Input type="text" id="last-name" name="last-name" placeholder="Last Name *" required />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col sm={6}>
              <FormGroup>
                <Label htmlFor="email" hidden>
                  Email Address
                </Label>
                <Input type="email" id="email" name="email" placeholder="Email" />
              </FormGroup>
            </Col>

            <Col sm={6}>
              <FormGroup>
                <Label htmlFor="phone" hidden>
                  Phone Number
                </Label>
                <Input type="phone" id="phone" name="phone" placeholder="Phone *" required />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col className="py-3">
              <label htmlFor="service-types">
                <strong>Services Needed</strong>
              </label>
              <div id="service-types">
                <div className="form-check-inline">
                  <input className="form-check-input" type="checkbox" value={records ? "Yes" : "No"} checked={records} onClick={() => toggleRecords()} name="records-search" id="records-search" />
                  <label className="form-check-label" hmtlFor="records-search">
                    Records Search
                  </label>
                </div>
                <div className="form-check-inline">
                  <input className="form-check-input" type="checkbox" value={investigation ? "Yes" : "No"} checked={investigation} onClick={() => toggleInvestigation()} name="investigation" id="investigation" />
                  <label className="form-check-label" hmtlFor="investigation">
                    Investigative Service
                  </label>
                </div>
                <div className="form-check-inline">
                  <input className="form-check-input" type="checkbox" value={processServer ? "Yes" : "No"} checked={processServer} onClick={() => toggleProcessServer()} name="process-serving" id="process-serving" />
                  <label className="form-check-label" hmtlFor="process-serving">
                    Process Serving
                  </label>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="py-3">
              <label htmlFor="comments">
                <strong>Comments</strong>
              </label>
              <textarea name="comments" id="comments" rows="3" className="form-control" placeholder="Please provide any additional comments or context here."></textarea>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button type="submit" value="submit" className="customBlue-bttn">
                Submit
              </Button>

              <Button color="secondary" className="ml-3" onClick={props.toggleModal}>
                Cancel
              </Button>
            </Col>
          </Row>

          <ModalFooter className="d-block">
            <Row>
              <Col className="text-center pt-3">
                <address>
                  <img src={clientBrandingBlack} className="client-branding mb-3" alt="Grey Area Services" /> <br />
                  P.O. Box 7715 <br /> St. Petersburg, FL 33734 <br />
                  <a href="tel:+17273354774">(727) 335-4774 </a> <br />
                  <a href="mailto:information@greyareaservices.com">information@greyareaservices.com</a>
                </address>
              </Col>
            </Row>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default ContactModal;
