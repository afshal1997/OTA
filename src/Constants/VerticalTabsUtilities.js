import AppDevelopment from "../Components/Common/Tabs/AppDevelopment";
import BrandingAndDesigns from "../Components/Common/Tabs/BrandingAndDesigns";
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
];
