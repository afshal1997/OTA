import React from "react";
import Consultation from "../../Layout/HomePageLayout/Consultation";
import HomePageBannerThree from "../../Layout/HomePageLayout/HomePageBannerThree";
import DigitalStartupMainBanner from "../../Layout/PlansPageLayout/DigitalStartupPageLayout/DigitalStartupMainBanner";
import DigitalStartupPricing from "../../Layout/PlansPageLayout/DigitalStartupPageLayout/DigitalStartupPricing";
import LeadGeneration from "../../Layout/PlansPageLayout/DigitalStartupPageLayout/LeadGeneration";
import ProvideSupportingtools from "../../Layout/PlansPageLayout/DigitalStartupPageLayout/ProvideSupportingtools";
import ServicesProvidingBanner from "../../Layout/PlansPageLayout/DigitalStartupPageLayout/ServicesProvidingBanner";
import StartupServices from "../../Layout/PlansPageLayout/DigitalStartupPageLayout/StartupServices";
import ClientSlider from "../Common/ClientSlider/ClientSlider";
import TestmonialsSlider from "../Common/Testmonials/TestmonialsSlider";
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'
import { testimonialSliderData } from "../../Constants/testimonialSliderData";
const DigitalStartup = () => {
    return (
        <div>
            <DigitalStartupMainBanner />
            <ServicesProvidingBanner />
            <HomePageBannerThree />
            <StartupServices />
            <ProvideSupportingtools />
            <LeadGeneration />
            <DigitalStartupPricing />
            <ClientSlider />
            <TestmonialsSlider testmonialTitle={testimonialSliderData} />
            <Consultation />
        </div>
    )
}

export default DigitalStartup