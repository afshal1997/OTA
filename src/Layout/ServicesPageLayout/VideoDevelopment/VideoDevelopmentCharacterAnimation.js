import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import { CharacterAnimationService } from '../../../Constants/VideoDevelopmentServices';

const VideoDevelopmentCharacterAnimation = () => {
    return (
        <div className="mt-5 pt-4">
            <Container>
                <Row>
                    <Col lg={7} className="m-auto">
                        <Bounce right cascade>
                            <div className="StartUp pt-5 mt-5">
                                <span class="BgText">{CharacterAnimationService.heading}</span>
                                <div className="OurServicesHeadingUl">
                                    <ul>
                                        <Zoom right cascade>
                                            <h1>{CharacterAnimationService.title}</h1>
                                        </Zoom>
                                        <Fade>
                                            <h6>
                                                <b>
                                                    {CharacterAnimationService.description}
                                                </b>
                                            </h6>
                                            <Row>
                                                {CharacterAnimationService.list.map((li, id) => {
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
                                            <a href="" class={`${CharacterAnimationService.button[1]}`}>{CharacterAnimationService.button[0]}</a>
                                        </Col>
                                    </ul>
                                </div>

                            </div>
                        </Bounce>
                    </Col>
                    <Col lg={5} className="m-auto">
                        <Bounce left cascade>
                            <img className="w-100" src={CharacterAnimationService.CharacterAnimationServiceImagePath} alt=""></img>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default VideoDevelopmentCharacterAnimation
