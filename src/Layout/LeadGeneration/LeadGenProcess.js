import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import AppDevelopmenimg02 from '../../Assets/Services/AppDevelopment/AppDevelopmenimg02.png'
import AppDevelopment01 from '../../Assets/Services/Icons/Icon01.png'
import AppDevelopment02 from '../../Assets/Services/Icons/Icon14.png'
import AppDevelopment03 from '../../Assets/Services/Icons/Icon02.png'
import AppDevelopment09 from '../../Assets/Services/Icons/Icon04.png'
import AppDevelopment10 from '../../Assets/Services/Icons/Icon10.png'
import AppDevelopment11 from '../../Assets/Services/Icons/Icon15.png'
import AppDevelopment12 from '../../Assets/Services/Icons/Icon16.png'
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom'
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'

const LeadGenProcess = () => {
   return (
      <div>
         <Container>
            <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
               <div className="StartUp">
                  <span class="BgText">Process</span>
                  <div className="OurServicesHeading">
                     <Zoom right cascade>
                        <h1>Lead Generation</h1>
                     </Zoom>
                     <p>
                        <strong><Link to='/creative-design-packages' className='text-decoration-none'>Our designers offer</Link></strong> groundbreaking <strong>app development services</strong> by coordinating consistently into your project and conveying <strong><Link to='/call-center-outsourcing' className='text-decoration-none'>remarkable experiences for your customers</Link></strong>.
                     </p>
                  </div>
               </div>
            </Col>
            <div className="WhyChooseUs">
               <img className="w-100 processImg" src={AppDevelopmenimg02} alt=""></img>
               <Row className="mobile-view">
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={AppDevelopment01} alt="AppDevelopment01"></img>
                           <p><b>Brief</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Brain Storming</b></p>
                           <img className="w-50 position-relative mb-4" src={AppDevelopment02} alt="AppDevelopment02"></img>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={AppDevelopment03} alt="AppDevelopment03"></img>
                           <p><b>Campaign Idea</b></p>
                        </Col>
                     </Card>
                  </Col>

                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Ad Development</b></p>
                           <img className="w-50 position-relative mb-4" src={AppDevelopment11} alt="AppDevelopment11"></img>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={AppDevelopment09} alt="AppDevelopment09"></img>
                           <p><b>Campaign Design</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <img className="w-50 position-relative mb-4" src={AppDevelopment10} alt="AppDevelopment10"></img>
                           <p><b>Execution</b></p>
                        </Col>
                     </Card>
                  </Col>
                  <Col>
                     <Card className="WhyChooseUSCards text-dark">
                        <Col lg={8} className="m-auto text-center p-0">
                           <p><b>Optimization</b></p>
                           <img className="w-50 position-relative mb-4" src={AppDevelopment12} alt="AppDevelopment12"></img>
                        </Col>
                     </Card>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   )
}

export default LeadGenProcess
