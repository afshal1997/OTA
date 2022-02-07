import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ShowMoreText = ({ children }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <p>{showMore && <>{children}</>}</p>
      <div className="blogPageContent col-3">
        <Button
          className="read-more-less--more text-light getStarted-btn"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {!showMore ? 'Read More ▼' : 'Show Less ▲' }
        </Button>
      </div>
    </div>
  );
};

export default ShowMoreText;
