import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import line1 from '../../Assets/HomeAssets/BannerThreeLine1.png'
import line2 from '../../Assets/HomeAssets/BannerThreeLine2.png'
import line3 from '../../Assets/HomeAssets/BannerThreeLine3.png'
import Mobile from '../../Assets/HomeAssets/BannerThreeMobile.png'
import processImgOne from '../../Assets/HomeAssets/ProcessOneBg.png'
import ProcessTwoBg from '../../Assets/HomeAssets/ProcessTwoBg.png'
import ProcessThreeBg from '../../Assets/HomeAssets/ProcessThreeBg.png'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

const HomePageBannerThree = () => {
    return (
        <div>
            <div className="howWeWork">
                <Container>
                    <div className="howWeWorkBanner">
                        <Row>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col lg={6} className="m-auto">
                                <Fade left>
                                    <div className="line02">
                                        <img className="w-100" src={line2} alt=""></img>
                                    </div>
                                </Fade>
                            </Col>
                            <Col lg={3} className="position-relative m-auto">
                                <Zoom>
                                    <div className="Mobile">
                                        <img className="w-100" src={Mobile} alt=""></img>
                                    </div>
                                </Zoom>
                            </Col>
                            <Col lg={2} className="m-auto mt-0">
                                <Fade right>
                                    <div className="line01">
                                        <img className="w-100" src={line1} alt=""></img>
                                    </div>
                                </Fade>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={5}>
                                <Bounce>
                                    <div className="process">
                                        <span className="spanProcess">Process</span>
                                        <h1><span><i class="fas fa-long-arrow-alt-right text-primary"></i></span> How We Works<span>?</span></h1>
                                        <h6>Our Process the structure</h6>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum has been the industry's
                                        </p>
                                    </div>
                                </Bounce>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3}>
                                <Fade left>
                                    <div className="line03">
                                        <img className="w-100 m-auto ms-4" src={line3}></img>
                                    </div>
                                </Fade>
                            </Col>
                            <Col lg={3} className="m-auto">
                                <div className="process01 mt-5 pt-4">
                                    <Bounce>
                                        <Row>
                                            <Col lg={6} className="m-auto col-8">
                                                <h2>01</h2>
                                                <h6>Sign-UP</h6>
                                                <p className="text-muted">Register your free account on our Client Portal.</p>
                                            </Col>
                                            <Col lg={6} className="col-4">
                                                <img className="w-100" src={processImgOne}></img>
                                            </Col>
                                        </Row>
                                    </Bounce>
                                </div>
                            </Col>
                            <Col lg={3} className="m-auto">
                                <div className="process02 mt-5 pt-4">
                                    <Bounce>
                                        <Row>
                                            <Col lg={6} className="m-auto col-8">
                                                <h2>02</h2>
                                                <h6>Create Project</h6>
                                                <p className="text-muted">Provide brief and basic information of your project.</p>
                                            </Col>
                                            <Col lg={6} className="col-4">
                                                <img className="w-100" src={ProcessTwoBg}></img>
                                            </Col>
                                        </Row>
                                    </Bounce>
                                </div>
                            </Col>
                            <Col lg={3} className="m-auto">
                                <div className="process01 mt-5 pt-4">
                                    <Bounce>
                                        <Row>
                                            <Col lg={6} className="m-auto col-8">
                                                <h2>03</h2>
                                                <h6>Get Done</h6>
                                                <p className="text-muted">We will deliver your work in the shortest period of time.</p>
                                            </Col>
                                            <Col lg={6} className="col-4">
                                                <img className="w-100" src={ProcessThreeBg}></img>
                                            </Col>
                                        </Row>
                                    </Bounce>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default HomePageBannerThree
