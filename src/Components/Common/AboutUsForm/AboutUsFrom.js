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
    formData.append('type', 'banner-form')
    let obj = {};
    for (var pair of formData.entries()) {
      obj[pair[0]] = pair[1];
    }

    axios
      .post(
        `https://api.outsourcetoasia.io/`,
        obj
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
          <h3>Meet Your </h3>
          <h2>
            <Zoom right cascade>
              <span> Virtual Production</span>
            </Zoom>{" "}
          </h2>
          <h3>Team Today!</h3>
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
                name="email"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="number">
                <i className="fas fa-phone-volume"></i>
              </InputGroup.Text>
              <FormControl
                required
                placeholder="Enter Your Phone Number"
                aria-label="number"
                aria-describedby="number"
                minLength="10"
                name="phone"
              />
            </InputGroup>
            {error && (
              <div className="alert alert-danger" role="alert">
                <Zoom right cascade>
                  There is an error in the form. Please fill the form correctly.
                </Zoom>
              </div>
            )}
            <Button className="my-4 get-started-form" type="submit">
              Apply Now
            </Button>
          </Form>
          <div className="d-flex justify-content-center getstarted-text"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsFrom;
