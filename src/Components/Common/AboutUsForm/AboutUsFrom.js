import React from 'react'
import { Form, FormControl, InputGroup } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';

const AboutUsFrom = () => {
    return (
        <div>
            <div className="applyNow">
                <div className="card">
                    <h3>Apply Now</h3>
                    <h3>for a <Zoom right cascade><span>Free Training!</span></Zoom> </h3>
                    <Form className="mb-4 mt-4">
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="Name"><i className="fas fa-user"></i></InputGroup.Text>
                            <FormControl
                                placeholder="Enter Your Name"
                                aria-label="Name"
                                aria-describedby="Name"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="Email"><i className="fas fa-envelope-open"></i></InputGroup.Text>
                            <FormControl
                                placeholder="Enter Your Email Address"
                                aria-label="Email"
                                aria-describedby="Email"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="number"><i class="fas fa-phone-volume"></i></InputGroup.Text>
                            <FormControl
                                placeholder="Enter Your Phone Number"
                                aria-label="number"
                                aria-describedby="number"
                            />
                        </InputGroup>
                        <a href="" className="apply-btn mt-5 mb-3">Get Started</a>
                    </Form>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsFrom
