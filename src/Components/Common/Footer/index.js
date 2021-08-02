import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className="footer">
                <Container>
                    <Row>
                        <Col lg={3} className="p-4 m-auto">
                            <p>
                                There are many variations of passages of lorem ipsum available, but the majority suffered.
                            </p>
                        </Col>
                        <Col lg={2}>
                            <h5 className="mb-5">Quick Links</h5>
                            <div className="footerUl">
                                <ul>
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Portfolio</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/">FAQ</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <h5 className="mb-5">Outsourcing Plans </h5>
                            <div className="footerUl">
                                <ul>
                                    <li>
                                        <Link href="/">White Labelling</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Digital Startup Legal</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Security Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Refund Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <h5 className="mb-5">Services </h5>
                            <div className="footerUl">
                                <ul>
                                    <li>
                                        <Link href="/">Creative & Design</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Web Development</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Digital Marketing</Link>
                                    </li>
                                    <li>
                                        <Link href="/">App Development</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Video Animation</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Content Writing</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <h5 className="mb-5">Contact </h5>
                            <div className="footerUl footerContact position-relative">
                                <ul>
                                    <li>
                                        <p>
                                            Gradsy building, Plot E2, Block 7/8,
                                            Shahrah-e-Faisal, Karachi Pakistan.
                                        </p>
                                        <p><a href="mailto:info@outsourcetoasia.co">info@outsourcetoasia.co</a></p>
                                        <p><a href="tel:+92 21-34804850">+92 21-34804850</a></p>
                                    </li>
                                    <li>
                                        <p>
                                            63 Charles Street Dept. 5001
                                            New York, NY 10014
                                        </p>
                                        <p><a href="mailto:info@outsourcetoasia.co">info@outsourcetoasia.co</a></p>
                                        <p><a href="tel:+1 631-250-6471">+1 631-250-6471</a></p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr></hr>
                <Container>
                    <Row className="pt-4 ">
                        <Col lg={8}>
                            <p>© Copyright 2021 by <strong>Outsource to Asia</strong>, All Rights Reserved.</p>
                        </Col>
                        <Col lg={4}>
                            <div className="footerSocialLink text-center">
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer
