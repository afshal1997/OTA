import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CallCenterImg02 from '../../../Assets/PlansAssets/CallCenter/CallCenterImg02.png'
import Bounce from 'react-reveal/Bounce';

const CallCenterServices = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={4} className="m-auto">
                        <Bounce right cascade>
                            <img className="w-100" src={CallCenterImg02} alt=""></img>
                        </Bounce>
                    </Col>
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
                                        <text id="text" y="103" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Services</text>
                                    </g>
                                </svg>
                                <h1>Better <br></br> Services</h1>
                                <p>
                                    If you are in the service industry, you would know it is difficult to keep customers happy and make them feel like family. With the world growing at a faster pace and thousands of alternatives available in the market. It has become more and more difficult for companies to maintain their brand image or even keep themselves successful in the business. With great responsibility like customer handling, it requires a lot of investment, money, time, calm staff and a good infrastructure.
                                </p>
                                <Row>
                                    <Col lg={4}>
                                        <a href="" class="getStarted-btn">Get Started</a>
                                    </Col>
                                </Row>
                            </div>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CallCenterServices
