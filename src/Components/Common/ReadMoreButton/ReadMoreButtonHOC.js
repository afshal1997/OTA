import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

const ReadMoreButtonHOC = ({ children  }) => {
  return (
    <div className="blogPageContent">
      <ReactReadMoreReadLess
        charLimit={400}
        readMoreText={"Read more ▼"}
        readLessText={"Read less ▲"}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less"
      >
        {children}
      </ReactReadMoreReadLess>
    </div>
  );
};

export default ReadMoreButtonHOC;
