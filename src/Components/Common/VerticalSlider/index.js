import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Slider from "react-slick";
import Slide_1 from "../../../Assets/HomeAssets/BetterSolutionImg1.png"
import Slide_2 from "../../../Assets/HomeAssets/Resources.png"
import Slide_3 from "../../../Assets/HomeAssets/Approach.png"
import Slide_4 from "../../../Assets/HomeAssets/Retention.png"
import Slide_5 from "../../../Assets/HomeAssets/Together.png"
import "./VerticalSlider.css"
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

const index = () => {
    const verticalSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true, autoplay: true,
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
                    initialSlide: 1,
                    autoplay: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    autoplay: false,
                }
            }
        ]
    };

    return (
        <div>
            <div>
                <Slider className="verticalSettings" {...verticalSettings}>
                    <div className="sliderbg1">
                        <Row>
                            <Col lg={6} className="p-0 slideImgBg">
                                <Zoom>
                                    <img className="w-100" src={Slide_1} alt="Slide_1"></img>
                                </Zoom>
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
                                    <Bounce>
                                        <h2 className="mb-0">Looking for a</h2>
                                        <h1><strong>better solution</strong></h1>
                                        <p>
                                            Stop staring at the problem, outsource it to us. Outsource to Asia™ is your ticket to survive in the ruthless digital world. We assist customers in the design and development of future-proof, substantial, and secure digital products that are based on the requirements of users and meet their business objectives.
                                        </p>
                                    </Bounce>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="sliderbg1">
                        <Row>
                            <Col lg={6} className="p-0 slideImgBg02">
                                <Zoom>
                                    <img className="w-100" src={Slide_2} alt="Slide_2"></img>
                                </Zoom>
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
                                        <text id="text" y="85" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Resources</text>
                                    </g>
                                </svg>
                                <div className="verticalSettingsContent">
                                    <Bounce>
                                        <h2 className="mb-0">Save Time, Money,</h2>
                                        <h1><strong>And Resources</strong></h1>
                                        <p>
                                            We are honest and forthright upfront, always offering a comprehensive breakdown of the time necessary to finish a project and how much it is going to cost when preparing a proposal for a potential customer. Letting us handle your digital needs relinquish your resources, so you can focus on more pressing matters.
                                        </p>
                                    </Bounce>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="sliderbg1">
                        <Row>
                            <Col lg={6} className="p-0 slideImgBg">
                                <Zoom>
                                    <img className="w-75" src={Slide_3} alt="Slide_3"></img>
                                </Zoom>
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
                                        <text id="text" y="85" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Approach</text>
                                    </g>
                                </svg>
                                <div className="verticalSettingsContent">
                                    <Bounce>
                                        <h2 className="mb-0">Customer-Centric</h2>
                                        <h1><strong>Approach</strong></h1>
                                        <p>
                                            Having helped brands generate better businesses, we have created several success stories. We will not sell you stuff you don’t require. In our endeavor of providing effective services and solutions, we have made great relations with our clients. Our professionals leave no stone unturned to ensure good returns from every penny invested in the project.
                                        </p>
                                    </Bounce>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="sliderbg1">
                        <Row>
                            <Col lg={6} className="p-0 slideImgBg02">
                                <Zoom>
                                    <img className="w-100" src={Slide_4} alt="Slide_4"></img>
                                </Zoom>
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
                                        <text id="text" y="85" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Retention</text>
                                    </g>
                                </svg>
                                <div className="verticalSettingsContent">
                                    <Bounce>
                                        <h2 className="mb-0">Unmatched Customer</h2>
                                        <h1><strong>Retention Rate</strong></h1>
                                        <p>
                                            From SEO & PPC to Social Media marketing & management, all of our consultants are experts in their professions. We are quite pleased with our great client retention rate, which is only possible because we consistently deliver positive outcomes! We are so confident in our abilities that we will never bind you to a long-term commitment.
                                        </p>
                                    </Bounce>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="sliderbg1">
                        <Row>
                            <Col lg={6} className="p-0 slideImgBg">
                                <Zoom>
                                    <img className="w-75" src={Slide_5} alt="Slide_5"></img>
                                </Zoom>
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
                                        <text id="text" y="85" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">Together</text>
                                    </g>
                                </svg>
                                <div className="verticalSettingsContent">
                                    <Bounce>
                                        <h2 className="mb-0">What Are You</h2>
                                        <h1><strong>Waiting For?</strong></h1>
                                        <p>
                                            Drop your Projects in the Pipeline Today!
                                            Signup Now and start outsourcing your projects to your geeky friends from Asia.
                                        </p>
                                    </Bounce>
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
