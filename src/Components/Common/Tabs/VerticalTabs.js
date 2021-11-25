import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./TabsStyle.css";
import { verticalTabsUtilities } from "../../../Constants/VerticalTabsUtilities";
import { Link } from "react-router-dom";

const VerticalTabs = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          {React.Children.toArray(
            verticalTabsUtilities.map(({ tab }) => {
              return (
                <>
                  <Tab>
                    <p>
                      <Link>{tab}</Link>
                    </p>
                  </Tab>
                </>
              );
            })
          )}
        </TabList>

        {React.Children.toArray(
          verticalTabsUtilities.map(({ panel }) => {
            return <TabPanel>{panel}</TabPanel>;
          })
        )}
      </Tabs>
    </div>
  );
};

export default VerticalTabs;
