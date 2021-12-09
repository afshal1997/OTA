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
                                <h1>App Development</h1>
                            </Zoom>
                            <p>
                                With advanced technology in the world where mobile phones have become a total necessity and new softwares taking the world by storm; you don’t have to worry a thing about it!
                            </p>
                        </div>
                    </div>
                </Col>
                <div className="WhyChooseUs">
                    <img className="w-100 processImg" src={AppDevelopmenimg02} alt=""></img>
                    <Row className="mobile-view">
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={AppDevelopment01} alt="AppDevelopment01"></img>
                                    <p><b>Brief</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Proposal</b></p>
                                    <img className="w-50 position-relative mb-4" src={AppDevelopment02} alt="AppDevelopment02"></img>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={AppDevelopment03} alt="AppDevelopment03"></img>
                                    <p><b>Wireframe</b></p>
                                </Col>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Mockup</b></p>
                                    <img className="w-50 position-relative mb-4" src={AppDevelopment11} alt="AppDevelopment11"></img>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={AppDevelopment09} alt="AppDevelopment09"></img>
                                    <p><b>Development</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={AppDevelopment10} alt="AppDevelopment10"></img>
                                    <p><b>Testing</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Delivery</b></p>
                                    <img className="w-50 position-relative mb-4" src={AppDevelopment12} alt="AppDevelopment12"></img>
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
