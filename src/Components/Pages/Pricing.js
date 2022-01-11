import React from "react";
import PricingMainBanner from "../../Layout/PricingPageLayout/PricingMainBanner";
import PricingPlansTabs from "../../Layout/PricingPageLayout/PricingPlansTabs";
import ClientSlider from "../Common/ClientSlider/ClientSlider";
import TestmonialsSlider from "../Common/Testmonials/TestmonialsSlider";
import Consultation from "../../Layout/HomePageLayout/Consultation";
import WatchVides from "../../Layout/BlogPageLayout/WatchVides";
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'
import { testimonialSliderData } from "../../Constants/testimonialSliderData";

const Pricing = () => {
  return (
    <div>
      <PricingMainBanner />
      <PricingPlansTabs />
      <TestmonialsSlider testmonialTitle={testimonialSliderData} />
      <WatchVides />
      <ClientSlider />
      <Consultation />
    </div>
  );
};

export default Pricing;
