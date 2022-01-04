import React from 'react'
import { Person } from "schema-dts";
import { helmetJsonLdProp } from "react-schemaorg";
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom'
import { schema } from '../../../Constants/Schema';
const WebSchema = () => {
   let location = useLocation();
   return (
      <>
         <link rel="canonical" href={`https://www.outsourcetoasia.io/${schema[location.pathname.substring(1)]}`} />
         <link rel="alternate" href={`https://www.outsourcetoasia.io/${schema[location.pathname.substring(1)]}`} hreflang="en-us" />

         <Helmet
            script={[
               helmetJsonLdProp<Person>(schema[location.pathname.substring(1)])
            ]}
         />
      </>
   )
}

export default WebSchema
