import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import AppDevelopmenimg02 from '../../../Assets/Services/AppDevelopment/AppDevelopmenimg02.png'
import AppDevelopment01 from '../../../Assets/Services/Icons/Icon01.png'
import AppDevelopment02 from '../../../Assets/Services/Icons/Icon14.png'
import AppDevelopment03 from '../../../Assets/Services/Icons/Icon02.png'
import AppDevelopment09 from '../../../Assets/Services/Icons/Icon04.png'
import AppDevelopment10 from '../../../Assets/Services/Icons/Icon10.png'
import AppDevelopment11 from '../../../Assets/Services/Icons/Icon15.png'
import AppDevelopment12 from '../../../Assets/Services/Icons/Icon16.png'
import Zoom from 'react-reveal/Zoom';

const AppDevelopmentProcess = () => {
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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum has been the industry's
                            </p>
                        </div>
                    </div>
                </Col>
                <div className="WhyChooseUs">
                    <img className="w-100" src={AppDevelopmenimg02} alt=""></img>
                    <Row>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={AppDevelopment01} alt=""></img>
                                    <p><b>Brief</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Proposal</b></p>
                                    <img className="w-50 position-relative mb-4" src={AppDevelopment02} alt=""></img>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={AppDevelopment03} alt=""></img>
                                    <p><b>Wireframe</b></p>
                                </Col>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Mockup</b></p>
                                    <img className="w-50 position-relative mb-4" src={AppDevelopment11} alt=""></img>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={AppDevelopment09} alt=""></img>
                                    <p><b>Development</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={AppDevelopment10} alt=""></img>
                                    <p><b>Testing</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Delivery</b></p>
                                    <img className="w-50 position-relative mb-4" src={AppDevelopment12} alt=""></img>
                                </Col>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default AppDevelopmentProcess
