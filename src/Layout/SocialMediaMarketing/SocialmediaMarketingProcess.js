import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import SMP from '../../Assets/Services/WebDevelopment/WebDevelopmentImage02.png'
import Zoom from 'react-reveal/Zoom';
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'
import Brief from '../../Assets/Services/Icons/Icon01.png'
import Targeting from '../../Assets/Services/Icons/Icon11.png'
import AdDevelopment from '../../Assets/Services/Icons/Icon04.png'
import SplitTesting from '../../Assets/Services/Icons/Icon03.png'
import Execution from '../../Assets/Services/Icons/Icon12.png'
import Reporting from '../../Assets/Services/Icons/Icon09.png'
const SMPPROCESS = () => {
   return (
      <div>
         <Container>
            <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
               <div className="StartUp">
                  <span class="BgText">Process</span>
                  <div className="OurServicesHeading">
                     <Zoom right cascade>
                        <h1>Social Media Marketing Process</h1>
                     </Zoom>
                     <p>
                        Our <strong>Cyber Security Specialists</strong> successfully tackle and resolve cyber attacks and threats by following an effective method that is easy to comprehend.
                     </p>
                  </div>
               </div>
            </Col>
            <div className="WhyChooseUs">
               <img className="w-100 processImg" src={SMP} alt="SocialmediaMarketingProcess"></img>
               <Row className="mobile-view">
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={Brief} alt="Identity"></img>
                           <p><b>Brief</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Targeting</b></p>
                           <img className="w-50 position-relative mb-4" src={Targeting} alt="Prepare"></img>
                        </Col>
                     </Card>
                  </Col>

                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={AdDevelopment} alt="Detect"></img>
                           <p><b>Ad Development</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Split Testing</b></p>
                           <img className="w-50 position-relative mb-4" src={SplitTesting} alt="Respond"></img>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={Execution} alt="Resolve"></img>
                           <p><b>Execution</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Reporting</b></p>
                           <img className="w-50 position-relative mb-4" src={Reporting} alt="Deliver"></img>
                        </Col>
                     </Card>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   )
}

export default SMPPROCESS
