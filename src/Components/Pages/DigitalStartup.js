import React from "react";
import HomePageBannerThree from "../../Layout/HomePageLayout/HomePageBannerThree";
import DigitalStartupMainBanner from "../../Layout/PlansPageLayout/DigitalStartupPageLayout/DigitalStartupMainBanner";
import DigitalStartupPricing from "../../Layout/PlansPageLayout/DigitalStartupPageLayout/DigitalStartupPricing";
import LeadGeneration from "../../Layout/PlansPageLayout/DigitalStartupPageLayout/LeadGeneration";
import ProvideSupportingtools from "../../Layout/PlansPageLayout/DigitalStartupPageLayout/ProvideSupportingtools";
import ServicesProvidingBanner from "../../Layout/PlansPageLayout/DigitalStartupPageLayout/ServicesProvidingBanner";
import StartupServices from "../../Layout/PlansPageLayout/DigitalStartupPageLayout/StartupServices";
import Video from "../Common/Videos/Video";

const DigitalStartup = () => {
    return (
        <div>
            <DigitalStartupMainBanner />
            <ServicesProvidingBanner />
            <HomePageBannerThree />
            <StartupServices/>
            <ProvideSupportingtools/>
            <LeadGeneration/>
            <DigitalStartupPricing/>
        </div>
    )
}

export default DigitalStartup