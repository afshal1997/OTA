import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Video from '../Videos/Video'
import Fade from 'react-reveal/Fade'
const VideoTestimonal = () => {
    return (
        <Row className="videoSection">
            <Col lg={6} className="p-0 position-relative">
                <div className="laptop-wrapper">
                    <Fade left><Video /></Fade>
                </div>
            </Col>
            <Col lg={5} className="p-0">
                <Fade right>
                    <div className="watchContent position-relative mt-4"><div className="watch">
                    </div>
                        <h4>
                            What Our
                        </h4>
                        <h2>
                            Clients Say
                        </h2>
                        <span>Happy clients generate healthy business</span>
                        <p>Watch how we help our clients walk through the world wide web directly from their perspective.</p>
                    </div>
                </Fade>
            </Col>
        </Row>
    )
}

export default VideoTestimonal
