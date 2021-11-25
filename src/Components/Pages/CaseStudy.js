import React from "react";
import CaseStudyBanner from "../../Layout/CaseStudyLayout/Banner";
import CaseStudies from "../../Layout/CaseStudyLayout/CaseStudies";
import HomePageBannerThree from "../../Layout/HomePageLayout/HomePageBannerThree";
import WhiteLabellingPackages from "../../Layout/PlansPageLayout/WhiteLabellingPageLayout/WhiteLabellingPackages";
import ClientSlider from "../Common/ClientSlider/ClientSlider";
import TestmonialsSlider from "../Common/Testmonials/TestmonialsSlider";

const CaseStudy = () => {
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
  };
  return (
    <>
      <CaseStudyBanner />
      <HomePageBannerThree />
      <CaseStudies />
      <WhiteLabellingPackages />
      <ClientSlider />
      <TestmonialsSlider testmonialTitle={testmonialsSliderData} />
    </>
  );
};

export default CaseStudy;
