import React from 'react'
import DevelopYourBrand from '../../Layout/PortfolioPageLayout/DevelopYourBrand'
import PortfolioBrand from '../../Layout/PortfolioPageLayout/PortfolioBrand'
import PortfolioMainBanner from '../../Layout/PortfolioPageLayout/PortfolioMainBanner'

const Portfolio = () => {
    return (
        <div>
            <PortfolioMainBanner />
            <PortfolioBrand />
            <DevelopYourBrand/>
        </div>
    )
}

export default Portfolio
