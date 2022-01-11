import React from 'react'
import Consultation from '../../Layout/HomePageLayout/Consultation'
import DigitalMarketingLeadGeneration from '../../Layout/ServicesPageLayout/DigitalMarketing/DigitalMarketingLeadGeneration'
import DigitalMarketingMainBanner from '../../Layout/ServicesPageLayout/DigitalMarketing/DigitalMarketingMainBanner'
import DigitalMarketingOnline from '../../Layout/ServicesPageLayout/DigitalMarketing/DigitalMarketingOnline'
import DigitalMarketingPricing from '../../Layout/ServicesPageLayout/DigitalMarketing/DigitalMarketingPricing'
import DigitalMarketingProcess from '../../Layout/ServicesPageLayout/DigitalMarketing/DigitalMarketingProcess'
import DigitalMarketingSeo from '../../Layout/ServicesPageLayout/DigitalMarketing/DigitalMarketingSeo'
import DigitalMarketingSocialMediaMarketing from '../../Layout/ServicesPageLayout/DigitalMarketing/DigitalMarketingSocialMediaMarketing'
import ClientSlider from "../Common/ClientSlider/ClientSlider";
import TestmonialsSlider from "../Common/Testmonials/TestmonialsSlider";
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'
import { testimonialSliderData } from '../../Constants/testimonialSliderData'

const DigitalMarketing = () => {
    return (
        <div>
            <DigitalMarketingMainBanner />
            <DigitalMarketingOnline />
            <DigitalMarketingProcess />
            <DigitalMarketingSeo />
            <DigitalMarketingSocialMediaMarketing />
            <DigitalMarketingLeadGeneration />
            <DigitalMarketingPricing />
            <ClientSlider />
            <TestmonialsSlider testmonialTitle={testimonialSliderData} />
            <Consultation />
        </div>
    )
}

export default DigitalMarketing
