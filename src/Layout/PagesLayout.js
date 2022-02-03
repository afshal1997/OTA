import React from 'react';
import ClientSlider from '../Components/Common/ClientSlider/ClientSlider'
import TestmonialsSlider from '../Components/Common/Testmonials/TestmonialsSlider'
import { testimonialSliderData } from '../Constants/testimonialSliderData';
import Consultation from '../Layout/HomePageLayout/Consultation'
const PagesLayout = ({ children }) => {
   return <>
      {children}
      <ClientSlider />
      <TestmonialsSlider testmonialTitle={testimonialSliderData} />
      <Consultation />
   </>;
};

export default PagesLayout;
