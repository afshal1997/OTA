import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bounce, Zoom, Fade } from 'react-reveal';
import GetStarted from '../../Components/Common/Buttons/GetStarted';
import { BasicSMM, DesignCustomSMM } from '../../Constants/SMMServices';
import { testimonialSliderData } from '../../Constants/testimonialSliderData'
import SMM2 from '../../Assets/Services/SMM/SMM2.png'
import SMM3 from '../../Assets/Services/SMM/SMM3.png'
import SMM4 from '../../Assets/Services/SMM/SMM4.png'
import SMM5 from '../../Assets/Services/SMM/SMM5.png'
import OurService from "../../Components/Common/OurService/OurService";
import Heading from "../../Components/Common/PagesHeadings/Heading";
import VideoTestimonal from "../../Components/Common/VideoTestimonal/VideoTestimonal";
import ClientSlider from '../../Components/Common/ClientSlider/ClientSlider'
import TestmonialsSlider from '../../Components/Common/Testmonials/TestmonialsSlider'
import Consultation from '../HomePageLayout/Consultation'

import { SMMPricing } from './SMMPricing';

const AboutSmm = () => {
   return <>
      <Container>
         <Row>
            <Col lg={4} className="m-auto">
               <Bounce right cascade>
                  <div className="StartUp">
                     <span class="BgText">{"SMM"}</span>
                     <Row className="OurServicesHeading">
                        <Col className="col-1"></Col>
                        <Col className="col-1 m-auto">
                           <i class="fas fa-long-arrow-alt-right text-primary"></i>
                        </Col>
                        <Col className="col-10">
                           <Zoom right cascade>
                              <h3 className='font-weight-bolder'>{"Social Media Marketing"}</h3>
                              <h4>{'Social Media MArketing'}</h4>
                           </Zoom>
                        </Col>
                     </Row>
                  </div>
               </Bounce>
            </Col>
            <Col lg={7} className="m-auto">
               <Bounce right>
                  <h6>
                     <b>{"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."}</b>
                  </h6>
               </Bounce>
            </Col>
         </Row>
         <Row className='my-5'>
            <Col lg={5} className="m-auto">
               <Bounce left cascade>
                  <img
                     className="w-100"
                     src={BasicSMM.BasicWebsiteImagePath}
                     alt="BasicWebsite.BasicWebsiteImagePath"
                  ></img>
               </Bounce>
            </Col>
            <Col lg={7} className="m-auto">
               <Bounce right cascade>
                  <div className="StartUp pt-5 mt-5">
                     <span class="BgText">{BasicSMM.heading}</span>
                     <div className="OurServicesHeadingUl">
                        <ul>
                           <Zoom right cascade>
                              <h1>{BasicSMM.title}</h1>
                           </Zoom>
                           <Fade>
                              <h6>
                                 Improve your business standing with <strong>highly responsive web designs</strong> . Whether you want to generate leads, contact prospective clients, or advertise your business, our basic <strong>website development package</strong> is the perfect match, by being:
                              </h6>
                              <Row>
                                 {React.Children.toArray(
                                    BasicSMM.list.map((li, id) => {
                                       if (id < 4) {
                                          return (
                                             <Col lg={6}>
                                                <li>
                                                   <b>{li}</b>
                                                </li>
                                             </Col>
                                          );
                                       }
                                       return (
                                          <Col lg={6}>
                                             <li>
                                                <b>{li}</b>
                                             </li>
                                          </Col>
                                       );
                                    })
                                 )}
                              </Row>
                           </Fade>
                           <Col lg="3">
                              <GetStarted buttonText={"Get Started"} buttonClass={`getStarted-btn`} />
                           </Col>
                        </ul>
                     </div>
                  </div>
               </Bounce>
            </Col>
         </Row>
         <Row className='my-5'>
            <Col lg={7} className="m-auto">
               <Bounce right cascade>
                  <div className="StartUp pt-5 mt-5">
                     <span class="BgText">{DesignCustomSMM.heading}</span>
                     <div className="OurServicesHeadingUl">
                        <ul>
                           <Zoom right cascade>
                              <h1>{DesignCustomSMM.title}</h1>
                           </Zoom>
                           <Fade>
                              <h6>
                                 Improve your business standing with <strong>highly responsive web designs</strong> . Whether you want to generate leads, contact prospective clients, or advertise your business, our basic <strong>website development package</strong> is the perfect match, by being:
                              </h6>
                              <Row>
                                 {React.Children.toArray(
                                    DesignCustomSMM.list.map((li, id) => {
                                       if (id < 4) {
                                          return (
                                             <Col lg={6}>
                                                <li>
                                                   <b>{li}</b>
                                                </li>
                                             </Col>
                                          );
                                       }
                                       return (
                                          <Col lg={6}>
                                             <li>
                                                <b>{li}</b>
                                             </li>
                                          </Col>
                                       );
                                    })
                                 )}
                              </Row>
                           </Fade>
                           <Col lg="3">
                              <GetStarted buttonText={"Get Started"} buttonClass={`getStarted-btn`} />
                           </Col>
                        </ul>
                     </div>
                  </div>
               </Bounce>
            </Col>
            <Col lg={5} className="m-auto">
               <Bounce left cascade>
                  <img
                     className="w-100"
                     src={SMM2}
                     alt="BasicWebsite.BasicWebsiteImagePath"
                  ></img>
               </Bounce>
            </Col>
         </Row>
         <Row className='my-5'>
            <Col lg={5} className="m-auto">
               <Bounce left cascade>
                  <img
                     className="w-100"
                     src={SMM3}
                     alt="BasicWebsite.BasicWebsiteImagePath"
                  ></img>
               </Bounce>
            </Col>
            <Col lg={7} className="m-auto">
               <Bounce right cascade>
                  <div className="StartUp pt-5 mt-5">
                     <span class="BgText">{DesignCustomSMM.heading}</span>
                     <div className="OurServicesHeadingUl">
                        <ul>
                           <Zoom right cascade>
                              <h1>{DesignCustomSMM.title}</h1>
                           </Zoom>
                           <Fade>
                              <h6>
                                 Improve your business standing with <strong>highly responsive web designs</strong> . Whether you want to generate leads, contact prospective clients, or advertise your business, our basic <strong>website development package</strong> is the perfect match, by being:
                              </h6>
                              <Row>
                                 {React.Children.toArray(
                                    DesignCustomSMM.list.map((li, id) => {
                                       if (id < 4) {
                                          return (
                                             <Col lg={6}>
                                                <li>
                                                   <b>{li}</b>
                                                </li>
                                             </Col>
                                          );
                                       }
                                       return (
                                          <Col lg={6}>
                                             <li>
                                                <b>{li}</b>
                                             </li>
                                          </Col>
                                       );
                                    })
                                 )}
                              </Row>
                           </Fade>
                           <Col lg="3">
                              <GetStarted buttonText={"Get Started"} buttonClass={`getStarted-btn`} />
                           </Col>
                        </ul>
                     </div>
                  </div>
               </Bounce>
            </Col>

         </Row>
         <Row className='my-5'>

            <Col lg={7} className="m-auto">
               <Bounce right cascade>
                  <div className="StartUp pt-5 mt-5">
                     <span class="BgText">{DesignCustomSMM.heading}</span>
                     <div className="OurServicesHeadingUl">
                        <ul>
                           <Zoom right cascade>
                              <h1>{DesignCustomSMM.title}</h1>
                           </Zoom>
                           <Fade>
                              <h6>
                                 Improve your business standing with <strong>highly responsive web designs</strong> . Whether you want to generate leads, contact prospective clients, or advertise your business, our basic <strong>website development package</strong> is the perfect match, by being:
                              </h6>
                              <Row>
                                 {React.Children.toArray(
                                    DesignCustomSMM.list.map((li, id) => {
                                       if (id < 4) {
                                          return (
                                             <Col lg={6}>
                                                <li>
                                                   <b>{li}</b>
                                                </li>
                                             </Col>
                                          );
                                       }
                                       return (
                                          <Col lg={6}>
                                             <li>
                                                <b>{li}</b>
                                             </li>
                                          </Col>
                                       );
                                    })
                                 )}
                              </Row>
                           </Fade>
                           <Col lg="3">
                              <GetStarted buttonText={"Get Started"} buttonClass={`getStarted-btn`} />
                           </Col>
                        </ul>
                     </div>
                  </div>
               </Bounce>
            </Col>
            <Col lg={5} className="m-auto">
               <Bounce left cascade>
                  <img
                     className="w-100"
                     src={SMM4}
                     alt="BasicWebsite.BasicWebsiteImagePath"
                  ></img>
               </Bounce>
            </Col>
         </Row>
         <Row className='my-5'>
            <Col lg={5} className="m-auto">
               <Bounce left cascade>
                  <img
                     className="w-100"
                     src={SMM5}
                     alt="BasicWebsite.BasicWebsiteImagePath"
                  ></img>
               </Bounce>
            </Col>
            <Col lg={7} className="m-auto">
               <Bounce right cascade>
                  <div className="StartUp pt-5 mt-5">
                     <span class="BgText">{DesignCustomSMM.heading}</span>
                     <div className="OurServicesHeadingUl">
                        <ul>
                           <Zoom right cascade>
                              <h1>{DesignCustomSMM.title}</h1>
                           </Zoom>
                           <Fade>
                              <h6>
                                 Improve your business standing with <strong>highly responsive web designs</strong> . Whether you want to generate leads, contact prospective clients, or advertise your business, our basic <strong>website development package</strong> is the perfect match, by being:
                              </h6>
                              <Row>
                                 {React.Children.toArray(
                                    DesignCustomSMM.list.map((li, id) => {
                                       if (id < 4) {
                                          return (
                                             <Col lg={6}>
                                                <li>
                                                   <b>{li}</b>
                                                </li>
                                             </Col>
                                          );
                                       }
                                       return (
                                          <Col lg={6}>
                                             <li>
                                                <b>{li}</b>
                                             </li>
                                          </Col>
                                       );
                                    })
                                 )}
                              </Row>
                           </Fade>
                           <Col lg="3">
                              <GetStarted buttonText={"Get Started"} buttonClass={`getStarted-btn`} />
                           </Col>
                        </ul>
                     </div>
                  </div>
               </Bounce>
            </Col>

         </Row>

      </Container>

   </>;
};

export default AboutSmm;
