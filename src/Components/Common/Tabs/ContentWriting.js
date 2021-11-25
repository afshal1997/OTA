import React from "react";
import { useDispatch } from "react-redux";
import { CHANGE_MODAL } from "../../../Store/Action";

const ContentWriting = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="pt-3 pb-3">
        <div className="mt-5 row">
          <div className="text-center col-lg-4 mb-5">
            <div className="card PricingCard BrandFont pt-0 ActivePricingCard">
              <div className="PackageAndPricing">
                <h4>Article/Blog Writing</h4>
                <h3>
                  <span>USD -</span>$25 <small>/ Page</small>{" "}
                </h3>
              </div>
              <ul>
                <li>Engaging, Product-Focused Content</li>
                <li>72 Hours Turnaround Time</li>
                <li>Professional Marketing Campaigns</li>
                <li>100% Plagiarism Free</li>
                <li>Unlimited Revisions</li>
                <li>Written On Specific Keywords</li>
                <li>Proofing & Editing By Experts</li>
              </ul>
              <a
                className="PricingApplyNowBtn w-100 p-2"
                href="javascript:void(0)"
                onClick={() => dispatch(CHANGE_MODAL(true))}
              >
                Outsource Now
              </a>
            </div>
          </div>
          <div className="text-center col-lg-4 mb-5">
            <div className="card PricingCard BrandFont pt-0 ">
              <div className="PackageAndPricing">
                <h4>Web Page Copy</h4>
                <h3>
                  <span>USD -</span>$50 <small>/ Page</small>{" "}
                </h3>
              </div>
              <ul>
                <li>Product-Focused Content</li>
                <li>72 Hours Turnaround Time</li>
                <li>Marketing Campaigns</li>
                <li>100% Plagiarism Free</li>
                <li>Unlimited Revisions</li>
                <li>Copyrights</li>
                <li>According To Exact Content</li>
                <li>Proofing & Editing By Experts</li>
              </ul>
              <a
                className="PricingApplyNowBtn w-100 p-2"
                href="javascript:void(0)"
                onClick={() => dispatch(CHANGE_MODAL(true))}
              >
                Outsource Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWriting;
