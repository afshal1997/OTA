import React from "react";
import CaseStudyBanner from "../../Layout/CaseStudyLayout/Banner";
import CaseStudies from "../../Layout/CaseStudyLayout/CaseStudies";
import WhiteLabellingPackages from "../../Layout/PlansPageLayout/WhiteLabellingPageLayout/WhiteLabellingPackages";
import ClientSlider from "../Common/ClientSlider/ClientSlider";
import TestmonialsSlider from "../Common/Testmonials/TestmonialsSlider";
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'
import { testimonialSliderData } from "../../Constants/testimonialSliderData";
const CaseStudy = () => {

  return (
    <>
      <CaseStudyBanner />
      <CaseStudies />
      <WhiteLabellingPackages />
      <ClientSlider />
      <TestmonialsSlider testmonialTitle={testimonialSliderData} />
    </>
  );
};

export default CaseStudy;
