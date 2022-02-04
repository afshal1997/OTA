import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OurService from '../../Components/Common/OurService/OurService'
import Heading from '../../Components/Common/PagesHeadings/Heading'
import VideoTestimonal from '../../Components/Common/VideoTestimonal/VideoTestimonal'
import TabLeadGeneration from '../../Components/Common/Tabs/TabLeadGeneration'
const LeadGenerationPricingcomponent = () => {
   return (
      <>
         <Container fluid>
            <Row>
               <OurService>
                  <Container>
                     <Row>
                        <Col lg={12} className="m-auto">
                           <Heading
                              Heading="Lead Generation"
                              tagline="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. "
                           />
                        </Col>
                     </Row>
                     <Row>
                        <TabLeadGeneration />
                     </Row>
                     <Row className="mt-5">
                        <Col lg={4}></Col>
                        <Col lg={6} className="m-auto">
                           <div className="watch">
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
                                       Watch
                                    </text>
                                 </g>
                              </svg>
                           </div>
                        </Col>
                     </Row>
                     <VideoTestimonal />
                  </Container>
               </OurService>
            </Row>

         </Container>
      </>
   )

};

export default LeadGenerationPricingcomponent;
