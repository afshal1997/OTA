import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Image2 from '../../../Assets/PlansAssets/DigitalStartup/DigitalStartupImg02.png'

const StartupServices = () => {
    return (
        <div className="StartupServicesSection">
            <Container>
                <Row>
                    <Col lg={4} className="m-auto">
                        <Bounce right cascade>
                            <div className="StartUp">
                                <span class="BgText">Startup</span>
                                <Row className="OurServicesHeading">
                                    <Col className="col-1"></Col>
                                    <Col className="col-1 m-auto">
                                        <i class="fas fa-long-arrow-alt-right text-primary"></i>
                                    </Col>
                                    <Col className="col-10">
                                        <Zoom right cascade>
                                            <h1>Our Services</h1>
                                        </Zoom>
                                    </Col>
                                </Row>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={7} className="m-auto">
                        <Bounce right>
                            <h6>
                                <b>
                                    We hope to bring a transformation in the world of business through our cutting-edge services designed for digital startups. The services are comeptitively priced to give newer businesses a chance to revolutionize the world. The services have different categories that are designed to boost your business and make it a source of joy for you. We have a team of experts with well-versed knowledge and experience in the field of digital services.
                                </b>
                            </h6>
                        </Bounce>
                    </Col>
                </Row>
                <Row>
                    <Col lg={5} className="m-auto">
                        <Bounce left cascade>
                            <img className="w-100" src={Image2} alt=""></img>
                        </Bounce>
                    </Col>
                    <Col lg={7} className="m-auto">
                        <Bounce right cascade>
                            <div className="StartUp pt-5 mt-5">
                                <span class="BgText">DBP</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        <Zoom right cascade>
                                            <h1>Develop Brand Persona</h1>
                                        </Zoom>
                                        <Fade>
                                            <h6>
                                                <b>
                                                    We focus on deeply analyzing your brand preferences and personality to come up with the right strategies. The services include the following features:
                                                </b>
                                            </h6>
                                            <li>
                                                <b>Creativity</b>
                                            </li>
                                            <li>
                                                <b>Detailing</b>
                                            </li>
                                            <li>
                                                <b>High quality</b>
                                            </li>
                                        </Fade>
                                        <Col lg="3">
                                            <a href="" class="getStarted-btn">Get Started</a>
                                        </Col>
                                    </ul>
                                </div>

                            </div>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StartupServices
