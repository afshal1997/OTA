import React from 'react'
import CallCenterMainBanner from '../../Layout/PlansPageLayout/CallCenter/CallCenterMainBanner'
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'
import CallCentreOutsourcingSection from '../../Layout/PlansPageLayout/CallCenter/CallCentreOutsourcingSection'
import HomePageBannerThree from '../../Layout/HomePageLayout/HomePageBannerThree'
import CallCenterOccSection from '../../Layout/PlansPageLayout/CallCenter/CallCenterOccSection'
import CallCenterServices from '../../Layout/PlansPageLayout/CallCenter/CallCenterServices'
import CallCenterChooseUs from '../../Layout/PlansPageLayout/CallCenter/CallCenterChooseUs'
import ClientSlider from "../Common/ClientSlider/ClientSlider";
import TestmonialsSlider from '../Common/Testmonials/TestmonialsSlider'
import Consultation from '../../Layout/HomePageLayout/Consultation'

const testmonialsSliderData = {
    Paragraph1:
        "Beyondant has been pleased to have entered into a joint venture with Outsource To Asia. The JV provides offshore resources as an augmentation to our U.S back office departments.",
    Client1: "Marc Rubin",
    ClientDesignation1: "CEO of Beyondant",
    Paragraph2:
        "My digital marketing business as grown faster than expected causing me troubles finding quality employees supporting our growth. When I found out about OTA I had to give them a shot in supporting my team. They have met every expectation and been there every step of the way. Quality work and Quality service 24/7!",
    Client2: "William Harris",
    ClientDesignation2: "Founder of The Hustle Marketing And Design",
    Paragraph3:
        "Our Journey started with small projects and after seeing their skills and dedication, I felt I can  do more work with them. They have a great team and provide amazing work on time. Their Project Managers are always very concerned about delivery and quality of work, and they are easy to reach and communicate with. It feels as though they are sitting next to me. I highly recommend their services to anyone looking to outsource and scale their business. I have also provided a Video Testimony to them.",
    Client3: " Jensen ",
    ClientDesignation3: " Founder of Adzum, LLC. ",

}

const CallCenter = () => {
    return (
        <div>
            <CallCenterMainBanner />
            <CallCentreOutsourcingSection />
            <HomePageBannerThree />
            <CallCenterServices />
            <CallCenterOccSection />
            <CallCenterChooseUs />
            <ClientSlider />
            <TestmonialsSlider testmonialTitle={testmonialsSliderData} />
            <Consultation />
        </div>
    )
}

export default CallCenter
