import axios from "axios";
import React from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

const AboutUsFrom = () => {
  const submitFreeTrainingForm = (event) => {
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
      <div className="applyNow">
        <div className="card">
          <h3>Apply Now</h3>
          <h1>
            for a{" "}
            <Zoom right cascade>
              <span>Free Training!</span>
            </Zoom>{" "}
          </h1>
          <Form className="mb-4 mt-4" onSubmit={submitFreeTrainingForm}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="Name">
                <i className="fas fa-user"></i>
              </InputGroup.Text>
              <FormControl
                required
                placeholder="Enter Your Name"
                aria-label="Name"
                aria-describedby="Name"
                name="user_name"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="Email">
                <i className="fas fa-envelope-open"></i>
              </InputGroup.Text>
              <FormControl
                required
                placeholder="Enter Your Email Address"
                aria-label="Email"
                aria-describedby="Email"
                type="email"
                name="user_email"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="number">
                <i class="fas fa-phone-volume"></i>
              </InputGroup.Text>
              <FormControl
                required
                placeholder="Enter Your Phone Number"
                aria-label="number"
                aria-describedby="number"
                minLength="10"
                name="user_phone"
              />
            </InputGroup>
            <Button className="my-4 get-started-form" type="submit">
              let's Get Started
              <i className="fa fa-user-edit mx-2" aria-hidden="true"></i>
            </Button>
          </Form>
          <div className="d-flex justify-content-center getstarted-text">
            <p className="font-size-12 w-75">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsFrom;
