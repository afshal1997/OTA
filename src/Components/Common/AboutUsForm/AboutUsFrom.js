import axios from "axios";
import React, { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { useHistory } from "react-router";

const AboutUsFrom = () => {
  const [error, setError] = useState(false);
  const history = useHistory();
  const submitFreeTrainingForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let obj = {};
    for (var pair of formData.entries()) {
      obj[pair[0]] = pair[1];
    }
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
  };
  return (
    <div className="">
      <div className="applyNow pt-5">
        <div className="card">
          <h3>Apply Now</h3>
          <h1>
            for a{" "}
            <Zoom right cascade>
              <span>Free Training!</span>
            </Zoom>{" "}
          </h1>
          <Form className="" onSubmit={submitFreeTrainingForm}>
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
            {error && (
              <div class="alert alert-danger" role="alert">
                <Zoom right cascade>
                  There is an error in the form. Please fill the form correctly.
                </Zoom>
              </div>
            )}
            <Button className="my-4 get-started-form" type="submit">
              let's Get Started
              <i className="fa fa-user-edit mx-2" aria-hidden="true"></i>
            </Button>
          </Form>
          <div className="d-flex justify-content-center getstarted-text"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsFrom;
