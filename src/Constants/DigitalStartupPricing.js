export const StartupPricing = [
    {
        type: 'BASIC',
        pricing: '$499',
        description: 'In this plan we are offering you basic services so you can start up your new home based business in very low amount.',
        services: ['Logo Design', 'Brand Website',  'Social Media Presence', 'Marketing Material','Operational Support','Dialpad & Zendesk', '-', '-','-','-'],
        classes: '',
        applyNowButton: { buttonText: 'Apply Now', linkText: 'abc', buttonStyling: 'PricingApplyNowBtn w-100' }
    },
    {
        type: "STANDARD",
        pricing: '$1,499',
        description: 'In this plan we are offering you standard services so you can start up your new home based business in very low amount.',
        services: ['Logo Design', 'Brand Website',  'Social Media Presence', 'Marketing Material','Operational Support','Dialpad & Zendesk', 'Hosting for 6 Month', 'Lead Generation (PPC or Facebook USD 400)','-','-'],
        classes: 'ActivePricingCard',
        applyNowButton: { buttonText: 'Apply Now', linkText: 'abcd', buttonStyling: 'PricingApplyNowBtn w-100' },

    },
    {
        type: 'ELITE',
        pricing: '$1,999',
        description: 'In this plan we are offering you Elite services so you can start up your new home based business in very low amount.',
        services: ['Logo Design', 'Brand Website',  'Social Media Presence', 'Marketing Material','Operational Support','Dialpad & Zendesk', 'Hosting for 6 Month', 'Lead Generation (PPC or Facebook USD 400)','Content','Live Agent'],
        applyNowButton: { buttonText: 'Apply Now', linkText: 'abce', buttonStyling: 'PricingApplyNowBtn w-100' },
        classes: ''

    }
]