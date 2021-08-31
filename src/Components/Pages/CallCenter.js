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
        "Beyondant has been pleased to have entered into a joint venture with Outsource To Asia. The JV provides offshore resources as an augmentation to our U.S back office departments....",
    Client1: "Marc Rubin",
    ClientDesignation1: "CEO of Beyondant",
    Paragraph2:
        "My digital marketing business as grown faster than expected causing me troubles finding quality employees supporting our growth. When I found out about OTA Ihad to give them a shot in supporting my team. They have met every.....",
    Client2: "William Harris",
    ClientDesignation2: "Founder of The Hustle",
    Paragraph3:
        "Working with Outsource an Asia have been incredible. They have became strong partners helping me to scale my business. Not only do they provide excellent services, they’re always there to...",
    Client3: "Jules Day",
    ClientDesignation3: "CEO of Marketer Foundation",

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
