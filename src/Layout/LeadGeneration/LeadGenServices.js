import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bounce, Zoom, Fade } from 'react-reveal';
import { LeadGenServices1, LeadGenServices2, LeadGenServices3, LeadGenServiceTagLine } from '../../Constants/LeadGenerationServices';
import GetStarted from '../../Components/Common/Buttons/GetStarted';
const LeadGenServices = () => {
   return (
      <Container>
         <Row>
            <Col lg={4} className="m-auto">
               <Bounce right cascade>
                  <div className="StartUp">
                     <span class="BgText">{LeadGenServiceTagLine.heading}</span>
                     <Row className="OurServicesHeading">
                        <Col className="col-1"></Col>
                        <Col className="col-1 m-auto">
                           <i class="fas fa-long-arrow-alt-right text-primary"></i>
                        </Col>
                        <Col className="col-10">
                           <Zoom right cascade>
                              <h1>{LeadGenServiceTagLine.title}</h1>
                           </Zoom>
                        </Col>
                     </Row>
                  </div>
               </Bounce>
            </Col>
            <Col lg={7} className="m-auto">
               <Bounce right>
                  <h6>
                     <p>
                        Lead generation is the art of getting most relevant leads for the business and we are the artist.Outsource your lead generation to us and enjoy the oerks of becoming our partner and take your business to new heights.
                     </p>
                  </h6>
               </Bounce>
            </Col>
         </Row>
         <Row>
            <Col lg={5} className="m-auto">
               <Bounce left cascade>
                  <img
                     className="w-100"
                     src={LeadGenServices1.DevelopBrandPersonaImagePath}
                     alt="LeadGenServices1.BlogWritingServiceImgPath"
                  ></img>
               </Bounce>
            </Col>
            <Col lg={7} className="m-auto">
               <Bounce right cascade>
                  <div className="StartUp pt-5 mt-5">
                     <span class="BgText">{LeadGenServices1.heading}</span>
                     <div className="OurServicesHeadingUl">
                        <ul>
                           <Zoom right cascade>
                              <h1>{LeadGenServices1.title}</h1>
                           </Zoom>
                           <Fade>
                              <h6>
                                 <b>{LeadGenServices1.description}</b>
                              </h6>
                              <Row>
                                 {LeadGenServices1.list.map((li, id) => {
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
                                 })}
                              </Row>
                           </Fade>
                           <Col lg="3">
                              <GetStarted buttonClass="getStarted-btn" buttonText='Get Started' />
                           </Col>
                        </ul>
                     </div>
                  </div>
               </Bounce>
            </Col>
         </Row>
         <Row>
            <Col lg={7} className="m-auto">
               <Bounce right cascade>
                  <div className="StartUp pt-5 mt-5">
                     <span class="BgText">{LeadGenServices2.heading}</span>
                     <div className="OurServicesHeadingUl">
                        <ul>
                           <Zoom right cascade>
                              <h1>{LeadGenServices2.title}</h1>
                           </Zoom>
                           <Fade>
                              <h6>
                                 <b>{LeadGenServices2.description}</b>
                              </h6>
                              <Row>
                                 {LeadGenServices2.list.map((li, id) => {
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
                                 })}
                              </Row>
                           </Fade>
                           <Col lg="3">
                              <GetStarted buttonClass="getStarted-btn" buttonText='Get Started' />
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
                     src={LeadGenServices2.DevelopBrandPersonaImagePath}
                     alt="LeadGenServices2.BlogWritingServiceImgPath"
                  ></img>
               </Bounce>
            </Col>
         </Row>
         <Row>
            <Col lg={5} className="m-auto">
               <Bounce left cascade>
                  <img
                     className="w-100"
                     src={LeadGenServices2.DevelopBrandPersonaImagePath}
                     alt="LeadGenServices2.BlogWritingServiceImgPath"
                  ></img>
               </Bounce>
            </Col>
            <Col lg={7} className="m-auto">
               <Bounce right cascade>
                  <div className="StartUp pt-5 mt-5">
                     <span class="BgText">{LeadGenServices3.heading}</span>
                     <div className="OurServicesHeadingUl">
                        <ul>
                           <Zoom right cascade>
                              <h1>{LeadGenServices3.title}</h1>
                           </Zoom>
                           <Fade>
                              <h6>
                                 <b>{LeadGenServices3.description}</b>
                              </h6>
                              <Row>
                                 {LeadGenServices3.list.map((li, id) => {
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
                                 })}
                              </Row>
                           </Fade>
                           <Col lg="3">
                              <GetStarted buttonClass="getStarted-btn" buttonText='Get Started' />
                           </Col>
                        </ul>
                     </div>
                  </div>
               </Bounce>
            </Col>

         </Row>
      </Container>
   )

};

export default LeadGenServices;
