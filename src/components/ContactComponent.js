import React from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody, Form, FormGroup, Input, Label, Button, Row, Col, Collapse } from "reactstrap";

const ContactModal = (props) => {
  return (
    <Modal isOpen={props.isModalOpen} toggle={props.toggleModal} size="xl">
      <ModalHeader toggle={props.toggleModal}>Contact Us</ModalHeader>
      <ModalBody>
        <p>Please complete the below form and we will contact you shortly to discuss how we can best assist you.</p>
        <form id="client-inquiry-form" name="client-inquiry-form" method="POST" data-netlify="true">
          <Row>
            <Col sm={6}>
              <FormGroup>
                <input type="hidden" name="form-name" value="client-inquiry-form" />
                <Label htmlFor="first-name" hidden>
                  First Name
                </Label>
                <Input type="text" id="first-name" name="first-name" placeholder="First Name" />
              </FormGroup>
            </Col>

            <Col sm={6}>
              <FormGroup>
                <Label htmlFor="last-name" hidden>
                  Last Name
                </Label>
                <Input type="text" id="last-name" name="last-name" placeholder="Last Name" />
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
                <Input type="phone" id="phone" name="phone" placeholder="Phone" />
              </FormGroup>
            </Col>
          </Row>

          <ModalFooter>
            <Button type="submit" value="submit" className="customBlue-bttn">
              Submit
            </Button>

            <Button color="secondary" onClick={props.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default ContactModal;
