import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import VideoDevelopmentImage02 from '../../../Assets/Services/VideoDevelopment/VideoAnimationImg02.png'
import VideoDevelopmentImg01 from '../../../Assets/Services/Icons/Icon01.png'
import VideoDevelopmentImg02 from '../../../Assets/Services/Icons/Icon21.png'
import VideoDevelopmentImg03 from '../../../Assets/Services/Icons/Icon02.png'
import VideoDevelopmentImg04 from '../../../Assets/Services/Icons/Icon20.png'
import VideoDevelopmentImg09 from '../../../Assets/Services/Icons/Icon19.png'
import VideoDevelopmentImg10 from '../../../Assets/Services/Icons/Icon18.png'
import VideoDevelopmentImg11 from '../../../Assets/Services/Icons/Icon22.png'
import VideoDevelopmentImg12 from '../../../Assets/Services/Icons/Icon09.png'
import Zoom from 'react-reveal/Zoom';
import { Reveal } from 'react-reveal'

const VideoDevelopmentProcess = () => {
    return (
        <div>
            <Container>
                <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
                    <div className="StartUp">
                        <span class="BgText">Process</span>
                        <div className="OurServicesHeading">
                            <Zoom right cascade>
                                <h1>Video Animation</h1>
                            </Zoom>
                            <Reveal>
                                <p>
                                Whether we are <strong>outsourcing explainer or corporate video production service</strong>, we follow a simple yet highly efficient <strong>animation production process</strong> behind it:
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </Col>
                <div className="WhyChooseUs">
                    <img className="w-100 processImg" src={VideoDevelopmentImage02} alt="VideoDevelopmentImage02"></img>
                    <Row className="mobile-view">
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={VideoDevelopmentImg01} alt="VideoDevelopmentImg01"></img>
                                    <p><b>Brief</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Script</b></p>
                                    <img className="w-50 position-relative mb-4" src={VideoDevelopmentImg02} alt="VideoDevelopmentImg02"></img>
                                </Col>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={VideoDevelopmentImg03} alt="VideoDevelopmentImg03"></img>
                                    <p><b>Theme</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Storyboard</b></p>
                                    <img className="w-50 position-relative mb-4" src={VideoDevelopmentImg04} alt="VideoDevelopmentImg04"></img>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={VideoDevelopmentImg09} alt="VideoDevelopmentImg09"></img>
                                    <p><b>Illustration</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Animation</b></p>
                                    <img className="w-50 position-relative mb-4" src={VideoDevelopmentImg10} alt="VideoDevelopmentImg10"></img>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={VideoDevelopmentImg11} alt="VideoDevelopmentImg11"></img>
                                    <p><b>Voice Over</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Delivery</b></p>
                                    <img className="w-50 position-relative mb-4" src={VideoDevelopmentImg12} alt="VideoDevelopmentImg12"></img>
                                </Col>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default VideoDevelopmentProcess
