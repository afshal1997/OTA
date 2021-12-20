import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import { CHANGE_MODAL } from "../../../Store/Action";
const ApplyNowModal = ({ show }) => {
  const history = useHistory();
  const { modalReducer: { isScheduleCall } } = useSelector(state => state)
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(CHANGE_MODAL(false));
  };

  const submitContactForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let obj = {};
    for (var pair of formData.entries()) {
      obj[pair[0]] = pair[1];
    }
    axios
      .post(
        `https://api.outsourcetoasia.io/`,
        formData
      )
      .then((response) => {
        history.push("/thank-you");
        handleClose();
      })
      .catch((error) => {
        setError(true);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 6000);
  }, [error]);
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
          <h6>Get In Touch With Us</h6>
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
                    name="email"
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
                    name="company"
                    placeholder="Company"
                    aria-label="Company"
                    aria-describedby="Company"
                    type="text"
                  />
                </InputGroup>
              </Col>
              <Col lg={6}>
                <input
                  name="phone"
                  placeholder="Enter Your Phone"
                  aria-label="phone"
                  aria-describedby="phone"
                  minLength="10"
                  required
                  className="w-100"
                />
              </Col>
            </Row>
            {isScheduleCall &&
              <Row className="">
                <Col lg={6}>
                  <InputGroup className="">
                    <FormControl
                      required
                      name="time"
                      placeholder="time"
                      aria-label="time"
                      aria-describedby="time"
                      type="time"
                    />
                  </InputGroup>
                </Col>
                <Col lg={6}>
                  <input
                    required
                    name="date"
                    type="date"
                    placeholder="Meeting Date"
                    aria-label="Meeting Date"
                    aria-describedby="Meeting Date"
                    minLength="10"
                    required
                    className="w-100"
                  />
                </Col>
              </Row>}
            <Row>
              <Col lg={12}>
                <InputGroup>
                  <FormControl
                    name="message"
                    as="textarea"
                    aria-label="With textarea"
                    placeholder="Message"
                    className="my-2"
                    rows="2"
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
            {error && (
              <div class="alert alert-danger" role="alert">
                <Zoom right cascade>
                  There is an error in the form. Please fill the form correctly.
                </Zoom>
              </div>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ApplyNowModal;
