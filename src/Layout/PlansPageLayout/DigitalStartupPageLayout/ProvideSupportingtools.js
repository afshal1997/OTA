import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Image3 from '../../../Assets/PlansAssets/DigitalStartup/DigitalStartupImg03.png'

const ProvideSupportingtools = () => {
    return (
        <div className="StartupServicesSection">
            <Container>
                <Row>
                    <Col lg={7} className="m-auto">
                        <Bounce right cascade>
                            <div className="StartUp pt-5 mt-5">
                                <span class="BgText">PST</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        <Zoom right cascade>
                                            <h1>Provide Supporting Tools</h1>
                                        </Zoom>
                                        <Fade>
                                            <p>
                                                <b>
                                                    We provide high-performing supporting tools, you get to experience exceptional results provided by the Dial Pad and Zendesk Chat integration. Desired results in no time.
                                                </b>
                                            </p>
                                            <li>
                                                <b>Seamless communication</b>
                                            </li>
                                            <li>
                                                <b>Continuous customer support</b>
                                            </li>
                                            <li>
                                                <b>Most advance tools.</b>
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
                    <Col lg={5} className="m-auto">
                        <Bounce right cascade>
                            <img className="w-100" src={Image3} alt=""></img>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProvideSupportingtools
