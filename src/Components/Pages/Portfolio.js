import React from 'react'
import DevelopYourBrand from '../../Layout/PortfolioPageLayout/DevelopYourBrand'
import PortfolioBrand from '../../Layout/PortfolioPageLayout/PortfolioBrand'
import PortfolioMainBanner from '../../Layout/PortfolioPageLayout/PortfolioMainBanner'
import CallCenterChooseUs from '../../Layout/PlansPageLayout/CallCenter/CallCenterChooseUs'
const Portfolio = () => {
    return (
        <div>
            <PortfolioMainBanner />
            <PortfolioBrand />
            <DevelopYourBrand />
            <CallCenterChooseUs />
        </div>
    )
}

export default Portfolio
