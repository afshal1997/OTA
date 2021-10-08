import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import { MotionGraphicsServices, WowMakeCustomersGoService } from '../../../Constants/VideoDevelopmentServices';

const VideoDevelopmentMotionGraphics = () => {
    return (
        <div className="mt-5 pt-4">
            <Container>
                <Row>
                    <Col lg={4} className="m-auto">
                        <Bounce right cascade>
                            <div className="StartUp">
                                <span class="BgText">{WowMakeCustomersGoService.heading}</span>
                                <Row className="OurServicesHeading">
                                    <Col className="col-1"></Col>
                                    <Col className="col-1 m-auto">
                                        <i class="fas fa-long-arrow-alt-right text-primary"></i>
                                    </Col>
                                    <Col className="col-10">
                                        <Zoom right cascade>
                                            <h1>{WowMakeCustomersGoService.title}</h1>
                                            <h4>{WowMakeCustomersGoService.title2}</h4>
                                        </Zoom>
                                    </Col>
                                </Row>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={7} className="m-auto">
                        <Bounce right>
                            <h6>
                                <b>
                                    {WowMakeCustomersGoService.description}
                                </b>
                            </h6>
                        </Bounce>
                    </Col>
                </Row>
                <Row>
                    <Col lg={5} className="m-auto">
                        <Bounce left cascade>
                            <img className="w-100" src={MotionGraphicsServices.MotionGraphicsServicesImgPath} alt=""></img>
                        </Bounce>
                    </Col>
                    <Col lg={7} className="m-auto">
                        <Bounce right cascade>
                            <div className="StartUp pt-5 mt-5">
                                <span class="BgText">{MotionGraphicsServices.heading}</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        <Zoom right cascade>
                                            <h1>{MotionGraphicsServices.title}</h1>
                                        </Zoom>
                                        <Fade>
                                            <h6>
                                                <b>
                                                    {MotionGraphicsServices.description}
                                                </b>
                                            </h6>
                                            <Row>
                                                {MotionGraphicsServices.list.map((li, id) => {
                                                    if (id < 4) {
                                                        return (
                                                            <Col lg={6}>
                                                                <li>
                                                                    <b>{li}</b>
                                                                </li>
                                                            </Col>

                                                        )
                                                    } return (
                                                        <Col lg={6}>
                                                            <li>
                                                                <b>{li}</b>
                                                            </li>
                                                        </Col>
                                                    )
                                                })}
                                            </Row>
                                        </Fade>
                                        <Col lg="3">
                                            <a href="" class={`${MotionGraphicsServices.button[1]}`}>{MotionGraphicsServices.button[0]}</a>
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

export default VideoDevelopmentMotionGraphics
