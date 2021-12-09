import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Heading from "../../Components/Common/PagesHeadings/Heading";
const ThankYou = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/home");
    }, 5000);
  }, []);
  return (
    <div className="text-primary HomePageBannerFour d-flex justify-content-center align-items-center vh-100">
      <div>
        <Heading Heading="Thankyou for contacting us. We'll get back to you. We will get back to you soon." />
        <div className="col-lg-2 m-auto col-sm-9 col-md-6">
          <Link to="/home" class={`getStarted-btn`}>
            Go To Home Page
          </Link>
        </div>
        <script src="./StatsScript.js" async></script>
      </div>
    </div>
  );
};

export default ThankYou;
