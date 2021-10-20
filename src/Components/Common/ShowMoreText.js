import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ShowMoreText = ({ children }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <p>{showMore && <>{children}</>}</p>
      <div className="blogPageContent">
        <Button
          className="read-more-less--more text-light"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          Read more ▼
        </Button>
      </div>
    </div>
  );
};

export default ShowMoreText;
