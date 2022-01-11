import React from 'react'
import CallCenterMainBanner from '../../Layout/PlansPageLayout/CallCenter/CallCenterMainBanner'
import CallCentreOutsourcingSection from '../../Layout/PlansPageLayout/CallCenter/CallCentreOutsourcingSection'
import HomePageBannerThree from '../../Layout/HomePageLayout/HomePageBannerThree'
import CallCenterOccSection from '../../Layout/PlansPageLayout/CallCenter/CallCenterOccSection'
import CallCenterServices from '../../Layout/PlansPageLayout/CallCenter/CallCenterServices'
import CallCenterChooseUs from '../../Layout/PlansPageLayout/CallCenter/CallCenterChooseUs'
import ClientSlider from "../Common/ClientSlider/ClientSlider";
import TestmonialsSlider from '../Common/Testmonials/TestmonialsSlider'
import Consultation from '../../Layout/HomePageLayout/Consultation'
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'
import { testimonialSliderData } from '../../Constants/testimonialSliderData'


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
            <TestmonialsSlider testmonialTitle={testimonialSliderData} />
            <Consultation />
        </div>
    )
}

export default CallCenter
