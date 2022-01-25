import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import WebDevelopmentImage02 from '../../../Assets/Services/WebDevelopment/WebDevelopmentImage02.png'
import Deliver from '../../../Assets/Services/Icons/CyberSecurity/deliver.png'
import Detect from '../../../Assets/Services/Icons/CyberSecurity/detect.png'
import Identity from '../../../Assets/Services/Icons/CyberSecurity/identify.png'
import Prepare from '../../../Assets/Services/Icons/CyberSecurity/prepare.png'
import Respond from '../../../Assets/Services/Icons/CyberSecurity/respond.png'
import Resolve from '../../../Assets/Services/Icons/CyberSecurity/resolve.png'
import Zoom from 'react-reveal/Zoom';

const CyberSecurityProcess = () => {
   return (
      <div>
         <Container>
            <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
               <div className="StartUp">
                  <span class="BgText">Process</span>
                  <div className="OurServicesHeading">
                     <Zoom right cascade>
                        <h1>Cyber Security</h1>
                     </Zoom>
                     <p>
                        Our <strong>Cyber Security Specialists</strong> successfully tackle and resolve cyber attacks and threats by following an effective method that is easy to comprehend.
                     </p>
                  </div>
               </div>
            </Col>
            <div className="WhyChooseUs">
               <img className="w-100 processImg" src={WebDevelopmentImage02} alt="Cyber Security"></img>
               <Row className="mobile-view">
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={Identity} alt="Identity"></img>
                           <p><b>Identify</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Prepare</b></p>
                           <img className="w-50 position-relative mb-4" src={Prepare} alt="Prepare"></img>
                        </Col>
                     </Card>
                  </Col>

                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={Detect} alt="Detect"></img>
                           <p><b>Detect</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Respond</b></p>
                           <img className="w-50 position-relative mb-4" src={Respond} alt="Respond"></img>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={Resolve} alt="Resolve"></img>
                           <p><b>Ressolve</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Deliver</b></p>
                           <img className="w-50 position-relative mb-4" src={Deliver} alt="Deliver"></img>
                        </Col>
                     </Card>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   )
}

export default CyberSecurityProcess
