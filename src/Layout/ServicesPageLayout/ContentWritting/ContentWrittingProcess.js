import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import ContentWrittingProcessImg from '../../../Assets/Services/ContentWritting/ContentWrittingProcessImg.png'
import ContentWrittingIcon01 from '../../../Assets/Services/Icons/Icon01.png'
import ContentWrittingIcon03 from '../../../Assets/Services/Icons/Icon03.png'
import ContentWrittingIcon06 from '../../../Assets/Services/Icons/Icon06.png'
import ContentWrittingIcon07 from '../../../Assets/Services/Icons/Icon07.png'
import ContentWrittingIcon08 from '../../../Assets/Services/Icons/Icon08.png'
import ContentWrittingIcon09 from '../../../Assets/Services/Icons/Icon09.png'
import Zoom from 'react-reveal/Zoom';

const ContentWrittingProcess = () => {
    return (
        <div>
            <Container>
                <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
                    <div className="StartUp">
                        <span class="BgText">Process</span>
                        <div className="OurServicesHeading">
                            <Zoom right cascade>
                                <h1>Content Writing</h1>
                            </Zoom>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum has been the industry's
                            </p>
                        </div>
                    </div>
                </Col>
                <div className="WhyChooseUs">
                    <img className="w-100" src={ContentWrittingProcessImg} alt=""></img>
                    <Row>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={ContentWrittingIcon01} alt=""></img>
                                    <p><b>Brief</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Brain Storming</b></p>
                                    <img className="w-50 position-relative mb-4" src={ContentWrittingIcon03} alt=""></img>
                                </Col>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={ContentWrittingIcon06} alt=""></img>
                                    <p><b>Wireframe</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Keyword Research</b></p>
                                    <img className="w-50 position-relative mb-4" src={ContentWrittingIcon07} alt=""></img>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <img className="w-50 position-relative mb-4" src={ContentWrittingIcon08} alt=""></img>
                                    <p><b>Writing</b></p>
                                </Col>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="WhyChooseUSCards text-dark">
                                <Col lg={8} className="m-auto text-center p-0">
                                    <p><b>Delivery</b></p>
                                    <img className="w-50 position-relative mb-4" src={ContentWrittingIcon09} alt=""></img>
                                </Col>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default ContentWrittingProcess
