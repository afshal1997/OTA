import React from 'react'
import Consultation from '../../Layout/HomePageLayout/Consultation'
import HomePageBannerThree from '../../Layout/HomePageLayout/HomePageBannerThree'
import BusinessAndSolutions from '../../Layout/PlansPageLayout/WhiteLabellingPageLayout/BusinessAndSolutions'
import DigitalMarketing from '../../Layout/PlansPageLayout/WhiteLabellingPageLayout/DigitalMarketing'
import WeDo from '../../Layout/PlansPageLayout/WhiteLabellingPageLayout/WeDo'
import WhiteLabellingMainBanner from '../../Layout/PlansPageLayout/WhiteLabellingPageLayout/WhiteLabellingMainBanner'
import WhiteLabellingPackages from '../../Layout/PlansPageLayout/WhiteLabellingPageLayout/WhiteLabellingPackages'
import WhiteLabellingPractices from '../../Layout/PlansPageLayout/WhiteLabellingPageLayout/WhiteLabellingPractices'
import ClientSlider from '../Common/ClientSlider/ClientSlider'
import TestmonialsSlider from '../Common/Testmonials/TestmonialsSlider'
import WhiteLabelPackages from '../Common/WhiteLabelPackages/WhiteLabelPackages'
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'
import { testimonialSliderData } from '../../Constants/testimonialSliderData'

const WhiteLabelling = () => {
    return (
        <div>
            <WhiteLabellingMainBanner />
            <WhiteLabellingPractices />
            <HomePageBannerThree />
            <WeDo />
            <DigitalMarketing />
            <BusinessAndSolutions />
            <WhiteLabelPackages />
            <WhiteLabellingPackages />
            <ClientSlider />
            <TestmonialsSlider testmonialTitle={testimonialSliderData} />
            <Consultation />
        </div>
    )
}

export default WhiteLabelling
