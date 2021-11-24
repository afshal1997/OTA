import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CHANGE_MODAL } from "../../../Store/Action";
const ApplyNowModal = ({ show }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(CHANGE_MODAL(false));
  };
  const submitContactForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    axios
      .post("https://www.outsourcetoasia.io/sign-up", formData)
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="xl"
        className="ota-modal"
      >
        <Modal.Header>
          <h4>Get In Touch With Us</h4>
          <i className="fas fa-times font-size-24" onClick={handleClose}></i>
        </Modal.Header>
        <Modal.Body>
          <Form className="" onSubmit={submitContactForm}>
            <Row className="">
              <Col lg={6}>
                <InputGroup className="">
                  <FormControl
                    required
                    name="user_name"
                    placeholder="Name"
                    aria-label="Name"
                    aria-describedby="Name"
                  />
                </InputGroup>
              </Col>
              <Col lg={6}>
                <InputGroup className="">
                  <FormControl
                    required
                    name="user_email"
                    placeholder="Enter Your Email"
                    type="email"
                    aria-label="email"
                    aria-describedby="email"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row className="">
              <Col lg={6}>
                <InputGroup className="">
                  <FormControl
                    name="user_company"
                    placeholder="Company"
                    aria-label="Company"
                    aria-describedby="Company"
                    type="text"
                  />
                </InputGroup>
              </Col>
              <Col lg={6}>
                <div className="input-group">
                  <input
                    name="user_phone"
                    placeholder="Enter Your Phone"
                    type="number"
                    aria-label="phone"
                    aria-describedby="phone"
                    min="10"
                    required
                    className="w-100"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <InputGroup>
                  <FormControl
                    name="user_message"
                    as="textarea"
                    aria-label="With textarea"
                    placeholder="Message"
                  />
                </InputGroup>
              </Col>
            </Row>
            <div className="col-lg-4 m-auto">
              <Button
                className="my-4 w-100 m-auto d-block getStarted-btn"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ApplyNowModal;
