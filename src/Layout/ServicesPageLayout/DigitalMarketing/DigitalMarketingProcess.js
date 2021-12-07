import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import WebDevelopmentImage02 from '../../../Assets/Services/WebDevelopment/WebDevelopmentImage02.png'
import DigitalMarketing01 from '../../../Assets/Services/Icons/Icon01.png'
import DigitalMarketing02 from '../../../Assets/Services/Icons/Icon11.png'
import DigitalMarketing03 from '../../../Assets/Services/Icons/Icon04.png'
import DigitalMarketing04 from '../../../Assets/Services/Icons/Icon03.png'
import DigitalMarketing10 from '../../../Assets/Services/Icons/Icon12.png'
import DigitalMarketing11 from '../../../Assets/Services/Icons/Icon13.png'
import Zoom from 'react-reveal/Zoom';

const DigitalMarketingProcess = () => {
    return (
        <div>
            <Container>
                <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
                    <div className="StartUp">
                        <span class="BgText">Process</span>
                        <div className="OurServicesHeading">
                            <Zoom right cascade>
                                <h1>Digital Marketing</h1>
                            </Zoom>
                            <p>
                            Outline your brand with exclusive digital marketing that interprets what it’s like to be extraordinary. We help brands that are as smart as they're efficient.


                            </p>
                        </div>
                    </div>
                </Col>
                <div className="WhyChooseUs">
                    <img className="w-100 processImg" src={WebDevelopmentImage02} alt=""></img>
                    <Row className="mobile-view">
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={DigitalMarketing01} alt=""></img>
                                    <p><b>Brief</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Targeting</b></p>
                                    <img className="w-50 position-relative mb-4" src={DigitalMarketing02} alt=""></img>
                                </Col>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={DigitalMarketing03} alt=""></img>
                                    <p><b>Ad Development</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Split Testing</b></p>
                                    <img className="w-50 position-relative mb-4" src={DigitalMarketing04} alt=""></img>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={DigitalMarketing10} alt=""></img>
                                    <p><b>Execution</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Reporting</b></p>
                                    <img className="w-50 position-relative mb-4" src={DigitalMarketing11} alt=""></img>
                                </Col>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default DigitalMarketingProcess
