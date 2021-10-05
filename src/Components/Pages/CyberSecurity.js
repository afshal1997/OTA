import React from 'react'
import HomePageBannerThree from '../../Layout/HomePageLayout/HomePageBannerThree'
import CyberSecurityMainBanner from '../../Layout/ServicesPageLayout/CyberSecurity/CyberSecurityMainBanner'
import SafeCyberSecurity from '../../Layout/ServicesPageLayout/CyberSecurity/SafeCyberSecurity'

const CyberSecurity = () => {
    return (
        <div>
            <CyberSecurityMainBanner/>
            <SafeCyberSecurity/>
            <HomePageBannerThree />
        </div>
    )
}

export default CyberSecurity
