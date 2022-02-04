import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { schema } from '../../../Constants/Schema';
const WebSchema = () => {
   let location = useLocation();
   useEffect(() => {
      const googleSchemaScript = document.createElement("script");
      googleSchemaScript.type = "application/ld+json";
      googleSchemaScript.innerHTML = JSON.stringify(
         schema[location.pathname.substring(1) ? location.pathname.substring(1) : 'home']
      );
      const googleCanonicalScriptSchema1 = document.createElement('link')
      const googleCanonicalScriptSchema2 = document.createElement('link')
      googleCanonicalScriptSchema1.setAttribute('href', `https://www.outsourcetoasia.io/${location.pathname.substring(1)}`)
      googleCanonicalScriptSchema1.setAttribute('rel', "canonical")
      googleCanonicalScriptSchema2.setAttribute('href', `https://www.outsourcetoasia.io/${location.pathname.substring(1)}`)
      googleCanonicalScriptSchema2.setAttribute('hreflang', "en-us")
      googleCanonicalScriptSchema2.setAttribute('rel', "alternative")
      document.head.appendChild(googleSchemaScript);
      document.head.appendChild(googleCanonicalScriptSchema1);
      document.head.appendChild(googleCanonicalScriptSchema2);

   }, [location.pathname])
   return (
      <>

      </>
   )
}

export default WebSchema
