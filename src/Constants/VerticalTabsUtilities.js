import AppDevelopment from "../Components/Common/Tabs/AppDevelopment";
import BrandingAndDesigns from "../Components/Common/Tabs/BrandingAndDesigns";
import ContentWriting from "../Components/Common/Tabs/ContentWriting";
import SearchEngineOptimization from "../Components/Common/Tabs/SearchEngineOptimization";
import SocialMediaMarketing from "../Components/Common/Tabs/SocialMediaMarketing";
import TabLeadGeneration from "../Components/Common/Tabs/TabLeadGeneration";
import WebDevelopment from "../Components/Common/Tabs/WebDevelopment";

export const verticalTabsUtilities = [
  {
    tab: "Branding & Design",
    panel: <BrandingAndDesigns />,
  },
  {
    tab: "Web Development",
    panel: <WebDevelopment />,
  },
  {
    tab: "App Development",
    panel: <AppDevelopment />,
  },
  {
    tab: "Lead Generation",
    panel: <TabLeadGeneration />,
  },
  {
    tab: "Content Writing",
    panel: <ContentWriting />,
  },
  {
    tab: "Social Media Marketing",
    panel: <SocialMediaMarketing />,
  },
  {
    tab: "Search Engine Optimization ",
    panel: <SearchEngineOptimization  />,
  },
];
