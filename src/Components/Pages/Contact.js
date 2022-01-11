import React from "react";
import ContactUsMainBanner from "../../Layout/ContactPageLayout/ContactUsMainBanner";
import WatchVides from "../../Layout/BlogPageLayout/WatchVides";
import ClientSlider from "../Common/ClientSlider/ClientSlider";
import TestmonialsSlider from "../Common/Testmonials/TestmonialsSlider";
import Consultation from "../../Layout/HomePageLayout/Consultation";
import ContactWithUs from "../../Layout/ContactPageLayout/ContactWithUs";
import '../../Layout/AboutUsPageLayout/AboutPage.css'
import '../../Layout/AboutUsPageLayout/AboutUsMediaQuery.css'
import { testimonialSliderData } from "../../Constants/testimonialSliderData";
const Contact = () => {

  return (
    <>
      <ContactUsMainBanner />
      <ContactWithUs />
      <WatchVides />
      <ClientSlider />
      <TestmonialsSlider testmonialTitle={testimonialSliderData} />
      <Consultation />
    </>
  );
};

export default Contact;
