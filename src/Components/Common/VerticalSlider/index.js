import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Slider from "react-slick";

import "./VerticalSlider.css"
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import { importAll } from '../../../Constants/functions'


const InnerSLide = ({ context1, context2, context3, text, sideImage }) => {
    return (
        <Row>
            <Col lg={6} className="p-0 slideImgBg">
                <Zoom>
                    <img className="w-75" src={sideImage} alt="Slide_1"></img>
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
                        <text id="text" y="85" strokeWidth="1" stroke="url(#gradient)" fill="rgb(0, 0, 0,0.2)">{context3}</text>
                    </g>
                </svg>
                <div className="verticalSettingsContent">
                    <Bounce>
                        <h2 className="mb-0">{context1}</h2>
                        <h2><strong>{context2}</strong></h2>
                        <p>
                            {text}
                        </p>
                    </Bounce>
                </div>
            </Col>
        </Row>
    );
}


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

    const homeSlidesData = [
        {
            context1: 'Looking for a',
            context2: 'better solution',
            context3: 'Solutions',
            text: "Stop staring at the problem; outsource it to us. Outsource to Asia™ is your ticket to survive in the ruthless world of digital marketing. We assist customers in designing and developing future-proof, substantial, and secure digital products based on users' requirements and meet their business objectives."
        },
        {
            context1: 'Save Time, Money,',
            context2: 'And Resources',
            context3: 'Resources',
            text: "We are honest and forthright upfront, always offering a comprehensive breakdown of the time necessary to finish a project and how much it will cost when preparing a proposal for a potential customer. Letting us handle your digital needs relinquish your resources so that you can focus on more pressing matters."
        },
        {
            context1: 'Customer-Centric',
            context2: 'And Resources',
            context3: 'Approach',
            text: "Having helped brands generate better businesses, we have created several success stories. We will not unnecessarily pitch you stuff you don’t require. We have made excellent relations with our clients through our endeavor of providing effective services and solutions. Ourdigital marketing services ensure that every cent spent is an investment for the future."
        },
        {
            context1: 'Unmatched Customer',
            context2: 'Retention Rate',
            context3: 'Retention',
            text: "Be it SEO & PPC or Social Media marketing & management, all our consultants boast proven expertise in their profession. We are rather pleased with our distinguished client retention rate, which is only possible because we consistently deliver positive outcomes! We employ a holistic understanding of requirements interpreted from not just the client but also through the competitive analysis of the market."
        },
        {
            context1: 'What Are You',
            context2: 'Waiting For ?',
            context3: 'Together',
            text: "Drop your Projects in the Pipeline Today! Signup Now and start outsourcing your projects to your geeky friends from Asia."
        },

    ]
    return (
        <div className="sliderbg1" >
            <div>
                <Slider className="verticalSettings" {...verticalSettings}>
                    {React.Children.toArray(
                        Object.entries(importAll(require.context('../../../Assets/HomeAssets/slider', false, /\.(png|jpe?g|svg)$/))).map((data, index) => {
                        
                            return (
                                <InnerSLide context1={homeSlidesData[index].context1} context2={homeSlidesData[index].context2} context3={homeSlidesData[index].context3} text={homeSlidesData[index].text} sideImage={data[1].default} />
                            )
                        })
                    )}

                </Slider>
            </div>
        </div>
    )
}

export default index
