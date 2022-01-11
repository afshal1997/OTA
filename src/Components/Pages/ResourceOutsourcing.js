import React from 'react'
import Consultation from '../../Layout/HomePageLayout/Consultation'
import MainBannerResourcesOutsourcing from '../../Layout/PlansPageLayout/ResourcesOutsourcing/MainBannerResourcesOutsourcing'
import OutsourcingHumanResources from '../../Layout/PlansPageLayout/ResourcesOutsourcing/OutsourcingHumanResources'
import ResourceOutsourcingProcess from '../../Layout/PlansPageLayout/ResourcesOutsourcing/ResourceOutsourcingProcess'
import ResourcesOutsourcingBusiness from '../../Layout/PlansPageLayout/ResourcesOutsourcing/ResourcesOutsourcingBusiness'
import ClientSlider from "../Common/ClientSlider/ClientSlider";
import TestmonialsSlider from '../Common/Testmonials/TestmonialsSlider'
import '../../Layout/PlansPageLayout/PlansPage.css'
import '../../Layout/PlansPageLayout/PlanPageMediaQuery.css'
import { testimonialSliderData } from '../../Constants/testimonialSliderData'

const ResourceOutsourcing = () => {
    return (
        <div>
            <MainBannerResourcesOutsourcing />
            <ResourcesOutsourcingBusiness />
            <OutsourcingHumanResources />
            <ResourceOutsourcingProcess />
            <ClientSlider />
            <TestmonialsSlider testmonialTitle={testimonialSliderData} />
            <Consultation />
        </div>
    )
}

export default ResourceOutsourcing
