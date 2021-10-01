import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Image4 from '../../../Assets/PlansAssets/DigitalStartup/DigitalStartupImg04.png'

const LeadGeneration = () => {
    return (
        <div className="StartupServicesSection">
            <Container>
                <Row>
                    <Col lg={5} className="m-auto">
                        <Bounce left cascade>
                            <img className="w-100" src={Image4} alt=""></img>
                        </Bounce>
                    </Col>
                    <Col lg={7} className="m-auto">
                        <Bounce right cascade>
                            <div className="StartUp pt-5 mt-5">
                                <span class="BgText">LG</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        <Zoom right cascade>
                                            <h1>Lead Generation</h1>
                                        </Zoom>
                                        <Fade>
                                            <h6>
                                                <b>
                                                    We offer a great opportunity to get high-quality lead generation services. The service adds more to your customer base and multiplies you brand’s growth the right way.
                                                </b>
                                            </h6>
                                            <li>
                                                <b>More customers</b>
                                            </li>
                                            <li>
                                                <b>Increased sales</b>
                                            </li>
                                            <li>
                                                <b>Generate awareness</b>
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

export default LeadGeneration
