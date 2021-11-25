import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import WhyChooseUs from '../../../Assets/Services/CreativeDesign/CreativeDesigningImg02.png'
import CallCenterIcon01 from '../../../Assets/Services/Icons/Icon01.png'
import CallCenterIcon02 from '../../../Assets/Services/Icons/Icon02.png'
import CallCenterIcon03 from '../../../Assets/Services/Icons/Icon03.png'
import CallCenterIcon04 from '../../../Assets/Services/Icons/Icon04.png'
import CallCenterIcon05 from '../../../Assets/Services/Icons/Icon05.png'
import Zoom from 'react-reveal/Zoom';

const CreativeDesigningProcess = () => {
    return (
        <div>
            <Container>
                <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
                    <div className="StartUp">
                        <span class="BgText">Process</span>
                        <div className="OurServicesHeading">
                            <Zoom right cascade>
                                <h1>Creative Designing</h1>
                            </Zoom>
                            <p>
                                LRepresent Your Brand with State-of-the-Art Designs
                                That Explains Your Story Even Better – It Eventually
                                Becomes a Reality!


                            </p>
                        </div>
                    </div>
                </Col>
                <div className="WhyChooseUs">
                    <img className="w-100 processImg" src={WhyChooseUs} alt=""></img>
                    <Row>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={CallCenterIcon01} alt=""></img>
                                    <p><b>Brief</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Mock-Up</b></p>
                                    <img className="w-50 position-relative mb-4" src={CallCenterIcon02} alt=""></img>
                                </Col>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={CallCenterIcon03} alt=""></img>
                                    <p><b>Design Approval</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Finalize</b></p>
                                    <img className="w-50 position-relative mb-4" src={CallCenterIcon04} alt=""></img>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={CallCenterIcon05} alt=""></img>
                                    <p><b>Delivery</b></p>
                                </Col>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default CreativeDesigningProcess
