import React from 'react';
import { useLocation } from 'react-router-dom';
import { ReactTitle, MetaTags } from 'react-meta-tags';
import { metaDetails } from './metadetails';

const OTAMeTagsAndDescriptions = () => {
   const { pathname } = useLocation()
   return (
      <MetaTags>
         <ReactTitle title={metaDetails[`${pathname.substring(1)}`].title} />
         <meta name="description" content={metaDetails[`${pathname.substring(1)}`].description} />
      </MetaTags>
   );
};

export default OTAMeTagsAndDescriptions;
