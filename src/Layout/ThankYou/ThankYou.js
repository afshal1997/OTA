import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Heading from "../../Components/Common/PagesHeadings/Heading";

const ThankYou = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/home");
    }, 3000);
  }, []);
  return (
    <div
      className="text-primary HomePageBannerFour d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div>
        <Heading Heading="Thankyou for contacting us. We'll get back to you. We will get back to you soon." />
        <div className="col-2 m-auto">
          <Link to="/home" class={`getStarted-btn`}>
            Go To Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
