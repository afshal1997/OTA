import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import WebDevelopmentImage02 from '../../../Assets/Services/WebDevelopment/WebDevelopmentImage02.png'
import CallCenterIcon01 from '../../../Assets/Services/Icons/Icon01.png'
import CallCenterIcon02 from '../../../Assets/Services/Icons/Icon02.png'
import CallCenterIcon03 from '../../../Assets/Services/Icons/Icon03.png'
import CallCenterIcon04 from '../../../Assets/Services/Icons/Icon04.png'
import CallCenterIcon09 from '../../../Assets/Services/Icons/Icon09.png'
import CallCenterIcon10 from '../../../Assets/Services/Icons/Icon10.png'
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom'
const WebDevelopmentProcess = () => {
    return (
        <div>
            <Container>
                <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
                    <div className="StartUp">
                        <span class="BgText">Process</span>
                        <div className="OurServicesHeading">
                            <Zoom right cascade>
                                <h1>Web Development</h1>
                            </Zoom>
                            <p>
                                For perfect execution of <strong>custom web <Link to='/ios-android-app-development' className='text-decoration-none'>application development</Link></strong>, we develop and undergo a concrete plan and strategy based exclusively on your needs and requirements.
                            </p>
                        </div>
                    </div>
                </Col>
                <div className="WhyChooseUs">
                    <img className="w-100 processImg" src={WebDevelopmentImage02} alt="WebDevelopmentImage02"></img>
                    <Row className="mobile-view">
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={CallCenterIcon01} alt="CallCenterIcon01"></img>
                                    <p><b>Brief</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Mock-Up</b></p>
                                    <img className="w-50 position-relative mb-4" src={CallCenterIcon02} alt="CallCenterIcon02"></img>
                                </Col>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={CallCenterIcon03} alt="CallCenterIcon03"></img>
                                    <p><b>Design Approval</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Development</b></p>
                                    <img className="w-50 position-relative mb-4" src={CallCenterIcon04} alt="CallCenterIcon04"></img>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={CallCenterIcon10} alt="CallCenterIcon10"></img>
                                    <p><b>Testing</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Delivery</b></p>
                                    <img className="w-50 position-relative mb-4" src={CallCenterIcon09} alt="CallCenterIcon09"></img>
                                </Col>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default WebDevelopmentProcess
