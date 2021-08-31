import React from 'react'
import ResourcesOutsourcingBusinessImg02 from '../../../Assets/PlansAssets/ResourcesOutsourcing/ResourcesOutsourcingBusinessImg02.png'
import Bounce from 'react-reveal/Bounce';
import { Col, Container, Row } from 'react-bootstrap';

const OutsourcingHumanResources = () => {
    return (
        <div className="pt-5 pb-5">
            <Container>
                <Row>
                    <Col lg={6}>
                        <Bounce left cascade>
                            <div className="planServicesSvg">
                                <svg width="100%">
                                    <defs>
                                        <linearGradient id="gradient" y1="0" y2="1">
                                            <stop stopColor="#054084" offset="0" />
                                            <stop stopColor="#054084" offset="1" />
                                        </linearGradient>
                                    </defs>
                                    <g>
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Resource</text>
                                    </g>
                                </svg>
                                <h1>Outsourcing <br></br> Human Resources</h1>
                                <p>
                                    <b><i>
                                        We make sure that your dream candidate will walk right
                                        through your doors.
                                    </i></b>
                                </p>
                                <p>
                                    Being the most difficult process in the company which is directly related to the performance of a firm is just made easy by our human resources professional who extracts the right people for your organization making sure that needs are met and when we say we will do it, then we make sure it happens!
                                </p>
                                <Row>
                                    <Col lg={4}>
                                        <a href="" class="getStarted-btn">Get Started</a>
                                    </Col>
                                </Row>
                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={4} className="m-auto">
                        <Bounce right cascade>
                            <img className="w-100" src={ResourcesOutsourcingBusinessImg02} alt=""></img>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OutsourcingHumanResources
