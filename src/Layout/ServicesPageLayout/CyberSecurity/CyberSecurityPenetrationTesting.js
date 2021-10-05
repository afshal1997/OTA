import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { PenetrationTestingService } from '../../../Constants/CyberSecurityServicesDiscription';

const CyberSecurityPenetrationTesting = () => {
    return (
            <div>
                <Container>
                    <Row>
                        <Col lg={5} className="m-auto">
                            <Bounce right cascade>
                                <img className="w-100" src={PenetrationTestingService.PenetrationTestingImagePath} alt=""></img>
                            </Bounce>
                        </Col>
                        <Col lg={7} className="m-auto">
                            <Bounce right cascade>
                                <div className="StartUp pt-5 mt-5">
                                    <span class="BgText">{PenetrationTestingService.heading}</span>
                                    <div className="OurServicesHeadingUl">
                                        <ul>
                                            <Zoom right cascade>
                                                <h1>{PenetrationTestingService.title}</h1>
                                            </Zoom>
                                            <Fade>
                                                <p>
                                                    <b>
                                                        {PenetrationTestingService.description}
                                                    </b>
                                                </p>
                                                <Row>
                                                    {PenetrationTestingService.list.map((li, id) => {
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
                                                <a href="" class={`${PenetrationTestingService.button[1]}`}>{PenetrationTestingService.button[0]}</a>
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

export default CyberSecurityPenetrationTesting
