import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const ThankYou = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/home");
    }, 3000);
  }, []);
  return (
    <div className="text-primary">
      Thankyou for contacting us. We'll get back to you
    </div>
  );
};

export default ThankYou;
