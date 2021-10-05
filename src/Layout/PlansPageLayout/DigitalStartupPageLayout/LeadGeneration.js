import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { leadgenarationpagecontent } from '../../../Constants/DigitalStartupServicesDiscription'
const LeadGeneration = () => {
    return (
        <div className="StartupServicesSection">
            <Container>
                <Row>
                    <Col lg={5} className="m-auto">
                        <Bounce left cascade>
                            <img className="w-100" src={leadgenarationpagecontent.ProvideSupportingToolsImagePath} alt=""></img>
                        </Bounce>
                    </Col>
                    <Col lg={7} className="m-auto">
                        <Bounce right cascade>
                            <div className="StartUp pt-5 mt-5">
                                <span class="BgText">LG</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        <Zoom right cascade>
                                            <h1>{leadgenarationpagecontent.heading}</h1>
                                        </Zoom>
                                        <Fade>
                                            <h6>
                                                <b>
                                                    {leadgenarationpagecontent.description}
                                                </b>
                                            </h6>
                                            {leadgenarationpagecontent.list.map((li) => {
                                                return (
                                                    <li>
                                                        <b>{li}</b>
                                                    </li>

                                                )
                                            })}
                                        </Fade>
                                        <Col lg="3">
                                            <a href="" class={`${leadgenarationpagecontent.button[1]}`}>{leadgenarationpagecontent.button[0]}</a>
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

export default LeadGeneration
