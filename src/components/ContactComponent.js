import React from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody, Form, FormGroup, Input, Label, Button } from "reactstrap";

const ContactModal = (props) => {
  return (
    <Modal isOpen={props.isModalOpen} toggle={props.toggleModal} size="lg">
      <ModalHeader toggle={props.toggleModal}>Contact Us</ModalHeader>
      <ModalBody>
        <p>Please complete the below form and we will contact you shortly to discuss how we can best assist you.</p>
        <Form>
          <FormGroup>
            <Label htmlFor="first-name" className="visually-hidden">
              First Name
            </Label>
            <Input type="text" id="first-name" name="first-name" placeholder="First Name" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="last-name" className="visually-hidden">
              Last Name
            </Label>
            <Input type="text" id="last-name" name="last-name" placeholder="Last Name" />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email" className="visually-hidden">
              Email Address
            </Label>
            <Input type="email" id="email" name="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone" className="visually-hidden">
              Phone Number
            </Label>
            <Input type="phone" id="phone" name="phone" placeholder="Phone" />
          </FormGroup>

          <ModalFooter>
            <Button type="submit" value="submit" color="primary">
              Submit
            </Button>

            <Button type="cancel" value="cancel" color="secondary" onClick={props.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ContactModal;
