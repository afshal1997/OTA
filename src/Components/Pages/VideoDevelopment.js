import React from 'react'
import VideoDevelopmentCharacterAnimation from '../../Layout/ServicesPageLayout/VideoDevelopment/VideoDevelopmentCharacterAnimation'
import VideoDevelopmentMainBanner from '../../Layout/ServicesPageLayout/VideoDevelopment/VideoDevelopmentMainBanner'
import VideoDevelopmentMotionGraphics from '../../Layout/ServicesPageLayout/VideoDevelopment/VideoDevelopmentMotionGraphics'
import VideoDevelopmentOnline from '../../Layout/ServicesPageLayout/VideoDevelopment/VideoDevelopmentOnline'
import VideoDevelopmentPlans from '../../Layout/ServicesPageLayout/VideoDevelopment/VideoDevelopmentPlans'
import VideoDevelopmentProcess from '../../Layout/ServicesPageLayout/VideoDevelopment/VideoDevelopmentProcess'
import VideoDevelopmentScreenCast from '../../Layout/ServicesPageLayout/VideoDevelopment/VideoDevelopmentScreenCast'
import ClientSlider from '../Common/ClientSlider/ClientSlider'
import TestmonialsSlider from '../Common/Testmonials/TestmonialsSlider'
import Consultation from '../../Layout/HomePageLayout/Consultation'
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'
import { testimonialSliderData } from '../../Constants/testimonialSliderData'

const VideoDevelopment = () => {
    return (
        <div>
            <VideoDevelopmentMainBanner />
            <VideoDevelopmentOnline />
            <VideoDevelopmentProcess />
            <VideoDevelopmentMotionGraphics />
            <VideoDevelopmentCharacterAnimation />
            <VideoDevelopmentScreenCast />
            <VideoDevelopmentPlans />
            <ClientSlider />
            <TestmonialsSlider testmonialTitle={testimonialSliderData} />
            <Consultation />
        </div>
    )
}

export default VideoDevelopment
