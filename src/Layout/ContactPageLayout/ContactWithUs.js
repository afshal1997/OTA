import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import OurService from "../../Components/Common/OurService/OurService";
import ContactUSDemo from "../../Assets/Contact-Us/contact-us-demo-template.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./contact-use.css";
import { ContactUsInformation } from "../../Constants/ContactUsInformation";
import { useHistory } from "react-router";
import axios from "axios";
const ContactWithUs = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const history = useHistory()
  const [error, setError] = useState({});
  const changeInputFields = ({ target: { name, value } }) => {
    if (value.trim().length < 3) {
      setError({
        ...error,
        [name]: `${name.replaceAll("_", " ")} greater than three chars`,
      });
    } else if (name === "email") {
      if (!emailRegex.test(value)) {
        setError({
          ...error,
          [name]: `${name.replaceAll("_", " ")} is not in the correct format`,
        });
      } else {
        setError({
          ...error,
          [name]: null,
        });
      }
    } else {
      setError({
        ...error,
        [name]: null,
      });
    }
  };
  const focusInputFields = ({ target: { name, value } }) => {
    if (value.trim().length < 3) {
      setError({
        ...error,
        [name]: `This field is required`,
      });
    }
  };
  const inputProps = {
    className:
      "form-control bg-transparent border-0 border-bottom rounded-0 text-light",
    onChange: changeInputFields,
    onFocus: focusInputFields,
    required: true,
  };
  const submitContactForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let obj = {};
    for (var pair of formData.entries()) {
      obj[pair[0]] = pair[1];
    }
    e.preventDefault();
    if (Object.values(error).filter(Boolean).length === 0) {
      e.target.reset();
      axios
        .get(
          `https://api.outsourcetoasia.io/index.php?name=${obj.user_name}&email=${obj.user_email}&phone=${obj.user_phone}&company=${obj.user_company}&message=${obj.user_message}`,
          formData
        )
        .then((response) => {
          history.push("/thank-you");
        })
        .catch((error) => {
          setError(true);
        });
    }
  };

  return (
    <OurService>
      <Container>
        <ToastContainer />
        <Row className="contact-with-us">
          <Col sm={12} lg={7}>
            <div className="smartWork">
              <svg width="100%">
                <defs>
                  <linearGradient id="gradient" y1="0" y2="1">
                    <stop stopColor="#054084" offset="0" />
                    <stop stopColor="#054084" offset="1" />
                  </linearGradient>
                </defs>
                <g>
                  <text
                    id="text"
                    y="103"
                    strokeWidth="1"
                    stroke="url(#gradient)"
                    fill="rgb(0, 0, 0,0.2)"
                  >
                    With Us
                  </text>
                </g>
              </svg>
              <h1>Get In Touch</h1>
              <p>
                Whether you’re on the east coast or the west coast, we’ve got
                you covered.
              </p>
            </div>
            <div>
              <Form onSubmit={submitContactForm}>
                <Row className="my-5">
                  <Col lg={6} sm={12}>
                    <div className="form-floating mb-3">
                      <input
                        {...inputProps}
                        type="text"
                        id="floatingInput"
                        placeholder="Enter Your Name"
                        name="user_name"
                      />
                      <label for="floatingInput" className="text-light">
                        Enter Your Name
                      </label>
                      <p className="text-danger">{error?.name}</p>
                    </div>
                  </Col>
                  <Col lg={6} sm={12}>
                    <div className="form-floating mb-3">
                      <input
                        {...inputProps}
                        type="email"
                        name="user_email"
                        id="floatingInput"
                        placeholder="Enter Your Email Address"
                      />
                      <label for="floatingInput" className="text-light">
                        Enter Your Email Address
                      </label>
                      <p className="text-danger">{error?.email}</p>
                    </div>
                  </Col>
                </Row>
                <Row className="my-5">
                  <Col lg={6} sm={12}>
                    <div className="form-floating mb-3">
                      <input
                        {...inputProps}
                        name="user_company"
                        type="text"
                        id="floatingInput"
                        placeholder="Enter Your Company Name"
                      />
                      <label for="floatingInput" className="text-light">
                        Enter Your Company Name
                      </label>
                      <p className="text-danger">{error?.company_name}</p>
                    </div>
                  </Col>
                  <Col lg={6} sm={12}>
                    <div className="form-floating mb-3">
                      <input
                        {...inputProps}
                        name="user_phone"
                        type="number"
                        id="floatingInput"
                        minLength="11"
                        placeholder="Enter Your Phone Number"
                      />
                      <label for="floatingInput" className="text-light">
                        Enter Your Phone Number
                      </label>
                      <p className="text-danger">{error?.your_phone_number}</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} sm={12}>
                    <div className="form-floating">
                      <textarea
                        {...inputProps}
                        name="user_message"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        maxlength="500"
                        style={{ height: "200px", resize: "none" }}
                      ></textarea>
                      <label for="floatingTextarea2" className="text-light">
                        Type Message Here
                      </label>
                      <p className="text-danger">{error?.your_comment}</p>
                    </div>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-end mt-4">
                  <div className="col-lg-4">
                    <Button type="submit" className="getStarted-btn">
                      Get Started
                    </Button>
                  </div>
                </Row>
              </Form>
            </div>
          </Col>
          <Col sm={12} lg={5}>
            <div className="d-flex justify-content-center align-items-start flex-column text-light mx-2 contact-use-info">
              <img src={ContactUSDemo} alt='ContactUSDemo' />
              <h2 className="fw-bold mx-3">Contact Info! </h2>
              {React.Children.toArray(
                ContactUsInformation.map(
                  ({ text, heading, className, containerClasses }) => {
                    return (
                      <div className={containerClasses}>
                        <i className={className}></i>
                        <span className="mx-1">
                          <h5 className="fw-bold">{heading}</h5>
                          <p>{text}</p>
                        </span>
                      </div>
                    );
                  }
                )
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </OurService>
  );
};

export default ContactWithUs;
