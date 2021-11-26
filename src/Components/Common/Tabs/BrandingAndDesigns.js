import React from "react";
import { useDispatch } from "react-redux";
import { CHANGE_MODAL } from "../../../Store/Action";

const BrandingAndDesigns = () => {
  const dispatch = useDispatch();
  return (
    <div className="pt-3 pb-3">
      <div className="mt-5 row">
        <div className="text-center col-lg-4 mb-5">
          <div className="card PricingCard BrandFont pt-0 ">
            <div className="PackageAndPricing pt-5">
              <h4>Logo Design (simple)</h4>
              <h3>
                <span>USD -</span>$60{" "}
              </h3>
            </div>
            <ul>
              <li>3 original Concepts </li>
              <li>5 Revisions on the Selected one </li>
              <li>100% ownership Rights </li>
              <li>Final Files (JPEG and PSD)</li>
              <li>24 to 48 Hours Turn around time</li>
            </ul>

            <a
              onClick={() => dispatch(CHANGE_MODAL(true))}
              className="PricingApplyNowBtn w-100 p-2"
              href="javascript:void(0)"
            >
              Sign-Up
            </a>
          </div>
        </div>
        <div className="text-center col-lg-4 mb-5">
          <div className="card PricingCard BrandFont pt-0 ActivePricingCard">
            <div className="PackageAndPricing pt-5">
              <h4>Mascot Logo</h4>
              <h3>
                <span>USD -</span>$180{" "}
              </h3>
            </div>
            <ul>
              <li>2 Mascot Logo</li>
              <li>15 Revisions on the selected one</li>
              <li>1 day time delivery</li>
              <li>48 hrs Revision time Delivery</li>
              <li>100% ownership Rights</li>
              <li>Final Files (Ai,Eps,Png,Psd,Jpeg,Pdf)</li>
            </ul>
            <a
              onClick={() => dispatch(CHANGE_MODAL(true))}
              className="PricingApplyNowBtn w-100 p-2"
              href="javascript:void(0)"
            >
              Sign-Up
            </a>
          </div>
        </div>
        <div className="text-center col-lg-4 mb-5">
          <div className="card PricingCard BrandFont pt-0 ">
            <div className="PackageAndPricing">
              <h4>Hand Drawn Sketch Logo (Starting from)</h4>
              <h3>
                <span>USD -</span>$250{" "}
              </h3>
            </div>
            <ul>
              <li>2 Concepts hand drawn </li>
              <li>20 revisions </li>
              <li>3 days delivery time</li>
              <li>3 days revision time</li>
              <li>Final files (Ai,EPS,PNG,PsSD,JPEG,PDF)</li>
            </ul>

            <a
              onClick={() => dispatch(CHANGE_MODAL(true))}
              className="PricingApplyNowBtn w-100 p-2"
              href="javascript:void(0)"
            >
              Sign-Up
            </a>
          </div>
        </div>
        <div className="text-center col-lg-4 mb-5">
          <div className="card PricingCard BrandFont pt-0 ActivePricingCard">
            <div className="PackageAndPricing">
              <h4>Flyer (Single Side Leaflet)</h4>
              <h3>
                <span>USD -</span>$80{" "}
              </h3>
            </div>
            <ul>
              <li>2 Concepts </li>
              <li>Turn around time 48 to 72 hrs </li>
              <li>1 Stock Photo </li>
              <li>10 revisions on Locked Concept</li>
            </ul>
            <a
              onClick={() => dispatch(CHANGE_MODAL(true))}
              className="PricingApplyNowBtn w-100 p-2"
              href="javascript:void(0)"
            >
              Sign-Up
            </a>
          </div>
        </div>
        <div className="text-center col-lg-4 mb-5">
          <div className="card PricingCard BrandFont pt-0 ">
            <div className="PackageAndPricing">
              <h4>Flyer (2 sides Leaflet)</h4>
              <h3>
                <span>USD -</span>$120{" "}
              </h3>
            </div>
            <ul>
              <li>2 Concepts </li>
              <li>Turn Around time 48 to 72 hrs </li>
              <li>3 Stock Photo </li>
              <li>10 revisions on Locked Concept</li>
            </ul>
            <a
              onClick={() => dispatch(CHANGE_MODAL(true))}
              className="PricingApplyNowBtn w-100 p-2"
              href="javascript:void(0)"
            >
              Sign-Up
            </a>
          </div>
        </div>
        <div className="text-center col-lg-4 mb-5">
          <div className="card PricingCard BrandFont pt-0 ActivePricingCard">
            <div className="PackageAndPricing">
              <h4>Brochure (double side front and Back)</h4>
              <h3>
                <span>USD -</span>$80{" "}
              </h3>
            </div>
            <ul>
              <li>2 Concepts </li>
              <li>Turn Around time 48 to 72 hrs </li>
              <li>2 Stock Photo</li>
              <li>10 revisions on Locked Concept</li>
            </ul>
            <a
              onClick={() => dispatch(CHANGE_MODAL(true))}
              className="PricingApplyNowBtn w-100 p-2"
              href="javascript:void(0)"
            >
              Sign-Up
            </a>
          </div>
        </div>
        <div className="text-center col-lg-4 mb-5">
          <div className="card PricingCard BrandFont pt-0 ">
            <div className="PackageAndPricing">
              <h4>Brochure (2 fold)</h4>
              <h3>
                <span>USD -</span>$120{" "}
              </h3>
            </div>
            <ul>
              <li>2 Concepts </li>
              <li>Turn Around time 48 to 72 hrs </li>
              <li>3 Stock Photo </li>
              <li>10 revisions on Locked Concept</li>
            </ul>
            <a
              onClick={() => dispatch(CHANGE_MODAL(true))}
              className="PricingApplyNowBtn w-100 p-2"
              href="javascript:void(0)"
            >
              Sign-Up
            </a>
          </div>
        </div>
        <div className="text-center col-lg-4 mb-5">
          <div className="card PricingCard BrandFont pt-0 ActivePricingCard">
            <div className="PackageAndPricing">
              <h4>Brochure (3 fold)</h4>
              <h3>
                <span>USD -</span>$160{" "}
              </h3>
            </div>
            <ul>
              <li>2 Concepts </li>
              <li>Turn Around time 48 to 72 hrs</li>
              <li>3 Stock Photo</li>
              <li>10 revisions on Locked Concept</li>
            </ul>
            <a
              onClick={() => dispatch(CHANGE_MODAL(true))}
              className="PricingApplyNowBtn w-100 p-2"
              href="javascript:void(0)"
            >
              Sign-Up
            </a>
          </div>
        </div>
        <div className="text-center col-lg-4 mb-5">
          <div className="card PricingCard BrandFont pt-0 ">
            <div className="PackageAndPricing">
              <h4>Standy Design</h4>
              <h3>
                <span>USD -</span>$120{" "}
              </h3>
            </div>
            <ul>
              <li>Complete size design</li>
              <li>Proper Content alignment </li>
              <li>10 revisions on Locked Concept</li>
              <li>HiRes Printable files</li>
            </ul>
            <a
              onClick={() => dispatch(CHANGE_MODAL(true))}
              className="PricingApplyNowBtn w-100 p-2"
              href="javascript:void(0)"
            >
              Sign-Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingAndDesigns;
