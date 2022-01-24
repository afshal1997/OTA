import React from 'react';

const MetaTag = () => {
   let location = useLocation();
   useEffect(() => {
      const metaTag = document.createElement("meta");
      metaTag.createElement('name', "value")
      metaTag.createElement('description', "value")
      metaTag.head.appendChild(metaTag)
   }, [location.pathname])
   return (
      <div>

      </div>
   );
};

export default MetaTag;
