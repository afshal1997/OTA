import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Slider from "react-slick";
import Slide_1 from "../../../Assets/HomeAssets/solutionSliderimg01.png"
import "./VerticalSlider.css"

const index = () => {
    const verticalSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div>
            <div>
                <Slider className="verticalSettings" {...verticalSettings}>
                    <div>
                        <Row>
                            <Col lg={6} className="p-0">
                                <img className="w-100" src={Slide_1} alt=""></img>
                            </Col>
                            <Col lg={6} className="m-auto">
                                <svg width="100%">
                                    <defs>
                                        <linearGradient id="gradient" y1="0" y2="1">
                                            <stop stopColor="#696368" offset="0" />
                                            <stop stopColor="#76485f" offset="1" />
                                        </linearGradient>
                                    </defs>
                                    <g>
                                        <text id="text" y="85" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Solutions</text>
                                    </g>
                                </svg>
                                <div className="verticalSettingsContent">
                                    <h2 className="mb-0">Looking for a</h2>
                                    <h1><strong>better solution</strong></h1>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col lg={6} className="p-0">
                                <img className="w-100" src={Slide_1} alt=""></img>
                            </Col>
                            <Col lg={6} className="m-auto">
                                <svg width="100%">
                                    <defs>
                                        <linearGradient id="gradient" y1="0" y2="1">
                                            <stop stopColor="#696368" offset="0" />
                                            <stop stopColor="#76485f" offset="1" />
                                        </linearGradient>
                                    </defs>
                                    <g>
                                        <text id="text" y="85" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Solutions</text>
                                    </g>
                                </svg>
                                <div className="verticalSettingsContent">
                                    <h2 className="mb-0">Looking for a</h2>
                                    <h1><strong>better solution</strong></h1>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default index
