import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import GetStarted from '../../Components/Common/Buttons/GetStarted'
import AboutUsForm from '../../Components/Common/AboutUsForm/AboutUsFrom'
import SocialMediaContact from '../../Components/Common/SocialMediaContact'
import SMPPROCESS from './SocialmediaMarketingProcess'
import './socialmediamarketing.css'
import '../../Layout/HomePageLayout/HomePage.css'
import '../../Layout/AboutUsPageLayout/AboutPage.css'
import AboutSmm from './AboutSmm';
import PagesLayout from '../PagesLayout';

const SocialMediaMarketing = () => {
   return <PagesLayout>
      <div className="">
         <div className="socialmediamarketing">
            <Container>
               <Row>
                  <Col lg={6} className="m-auto">
                     <div className="smartWork mt-5 mb-5">
                        <svg width="100%">
                           <defs>
                              <linearGradient id="gradient" y1="0" y2="1">
                                 <stop stopColor="#054084" offset="0" />
                                 <stop stopColor="#054084" offset="1" />
                              </linearGradient>
                           </defs>
                           <g>
                              <text
                                 id="text"
                                 y="103"
                                 strokeWidth="1"
                                 stroke="url(#gradient)"
                                 fill="rgb(0, 0, 0,0.2)"
                              >
                                 SMM
                              </text>
                           </g>
                        </svg>
                        <h1>Social Media Marketing</h1>
                        <h3>Social Media Marketing</h3>
                        <p>
                           Social Media Marketing
                        </p>
                        <p>
                           <strong>
                              <Link to='/web-development-services' className='text-decoration-none'>Outsource Web Design And Development Services</Link>
                           </strong>
                           To A Well-Known <strong>Digital Outsourcing Agency In The United States</strong> To Expand Your Business Online. Let's Grow As One!
                        </p>
                        <Row>
                           <Col lg={4}>
                              <GetStarted buttonText="Get Started" buttonClass="getStarted-btn" />
                           </Col>
                        </Row>
                     </div>
                  </Col>
                  <Col lg={6} className="pt-5">
                     <AboutUsForm />
                  </Col>
               </Row>
            </Container>
         </div>
         <SocialMediaContact />
      </div>
      <SMPPROCESS />
      <AboutSmm />
   </PagesLayout>;
};

export default SocialMediaMarketing;
