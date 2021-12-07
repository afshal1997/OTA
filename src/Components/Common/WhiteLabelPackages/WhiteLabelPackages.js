import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Slider from 'react-slick'
import { CHANGE_MODAL } from '../../../Store/Action'
import OurService from '../OurService/OurService'
import Heading from '../PagesHeadings/Heading'

const WhiteLabelPackages = () => {
    const dispatch = useDispatch()
    const settings = {
        className: "WhiteLabliblingSlider",
        centerMode: false,
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        centerPadding: '0px',
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        focusOnSelect: false,
        appendDots: (dots) => (
            <div className="bg-primary">
                <ul> {dots} </ul>
            </div>
        ),
        customPaging: (i) => <div className="video-pagination-dots">{""}</div>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2,
                    centerPadding: '0px'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1,
                    centerPadding: '0px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0px'
                }
            }
        ]
    };
    return (
        <div>
            <div className="DigitalStartupPricing">
                <OurService>
                    <Container>
                        <Row>
                            <Col lg={12} className="m-auto text-center">
                                <Heading
                                    Heading="Starting Prices"
                                    tagline="With us you will get multiple benefits such as :"
                                    MainHeading="Pricing"
                                />
                            </Col>
                        </Row>
                        <div className="whitelabeling-price-category mt-5">
                            <Slider {...settings}>
                                <div className="card PricingCard WhiteLabliblingSliderCards text-center">
                                    <h3 className="mb-0"><span>USD $100</span></h3>
                                    <h4><b>Web Development</b></h4>
                                    <p>USD 100</p>
                                </div>
                                <div className="card PricingCard WhiteLabliblingSliderCards text-center">
                                    <h3 className="mb-0"><span>USD $10/hour</span></h3>
                                    <h4><b>App Development</b></h4>
                                    <p>USD 10/hour</p>
                                </div>
                                <div className="card PricingCard WhiteLabliblingSliderCards text-center">
                                    <h3 className="mb-0"><span>USD $150</span></h3>
                                    <h4><b>Video Animation</b></h4>
                                    <p>USD 150</p>
                                </div>
                                <div className="card PricingCard WhiteLabliblingSliderCards text-center">
                                    <h3 className="mb-0"><span>USD $50</span></h3>
                                    <h4><b>Logo Design</b></h4>
                                    <p>USD 50</p>
                                </div>
                            </Slider>
                        </div>
                        <Col className="m-auto pt-5 mt-4" lg={2}>
                            <a className="getStarted" onClick={() => dispatch(CHANGE_MODAL(true))}>
                                Get Started
                            </a>
                        </Col>
                    </Container>
                </OurService>
            </div>
        </div>
    )
}

export default WhiteLabelPackages
