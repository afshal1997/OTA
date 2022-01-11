import React from "react";
import DevelopYourBrand from "../../Layout/PortfolioPageLayout/DevelopYourBrand";
import PortfolioBrand from "../../Layout/PortfolioPageLayout/PortfolioBrand";
import PortfolioMainBanner from "../../Layout/PortfolioPageLayout/PortfolioMainBanner";
import CallCenterChooseUs from "../../Layout/PlansPageLayout/CallCenter/CallCenterChooseUs";
import ClientSlider from "../Common/ClientSlider/ClientSlider";
import TestmonialsSlider from "../Common/Testmonials/TestmonialsSlider";
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'
import '../../Layout/PortfolioPageLayout/PortfolioPageLayout.css'
import { testimonialSliderData } from "../../Constants/testimonialSliderData";
const Portfolio = () => {

  return (
    <div>
      <PortfolioMainBanner />
      <PortfolioBrand />
      <DevelopYourBrand />
      <CallCenterChooseUs />
      <ClientSlider />
      <TestmonialsSlider testmonialTitle={testimonialSliderData} />
    </div>
  );
};

export default Portfolio;
