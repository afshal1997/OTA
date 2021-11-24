import React from "react";
import { useDispatch } from "react-redux";
import { CHANGE_MODAL } from "../../../Store/Action";

const TabLeadGeneration = () => {
  const dispatch = useDispatch();
  return (
    <div className="pt-3 pb-3">
      <div className="mt-5 row">
        <div className="text-center col-lg-4 mb-5">
          <div className="card PricingCard BrandFont pt-0 ">
            <div className="PackageAndPricing mb-3">
              <h4>BASIC</h4>
              <h3>
                <span>USD -</span>$799
              </h3>
            </div>
            <h6>
              <span>FACEBOOK</span>
            </h6>
            <ul>
              <li>2 Ad Copies</li>
              <li>Lead Forms</li>
              <li>Messenger Leads</li>
              <li>JPEG and PSD</li>
              <li>Campaign Management</li>
            </ul>
            <h6>
              <span>BUDGET</span>
            </h6>
            <ul>
              <li>$500 ( One Platforms )</li>
            </ul>
            <h5 className="mb-4">
              <b>EST. LEADS: 25</b>
            </h5>
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
          <div className="card PricingCard BrandFont pt-0 ActivePricingCard">
            <div className="PackageAndPricing mb-3">
              <h4>STANDARD</h4>
              <h3>
                <span>USD -</span>$2,199
              </h3>
            </div>
            <h6>
              <span>FACEBOOK</span>
            </h6>
            <ul>
              <li>2 Ad Copies</li>
              <li>Lead Forms</li>
              <li>Messenger Leads</li>
              <li>JPEG and PSD</li>
              <li>Campaign Management</li>
            </ul>
            <h6>
              <span>LINKEDIN</span>
            </h6>
            <ul>
              <li>2 Ad Copies</li>
              <li>Lead Forms</li>
              <li>Messenger Leads</li>
              <li>Campaign Management</li>
            </ul>
            <h6>
              <span>BUDGET</span>
            </h6>
            <ul>
              <li> $1500 ( Two platforms )</li>
            </ul>
            <h5 className="mb-4">
              <b>EST. LEADS: 75</b>
            </h5>

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
            <div className="PackageAndPricing mb-3">
              <h4>ADVANCE</h4>
              <h3>
                <span>USD -</span>$3,000
              </h3>
            </div>
            <h6>
              <span>FACEBOOK</span>
            </h6>
            <ul>
              <li>3 Ad Copies</li>
              <li>Lead Forms</li>
              <li>Messenger Leads</li>
              <li>JPEG and PSD</li>
              <li>Campaign Management</li>
            </ul>
            <h6>
              <span>LINKEDIN</span>
            </h6>
            <ul>
              <li>3 Ad Copies</li>
              <li>Lead Forms</li>
              <li>Messenger Leads</li>
              <li>Campaign Management</li>
            </ul>
            <h6>
              <span>BUDGET</span>
            </h6>
            <ul>
              <li> $1500 ( Two platforms )</li>
            </ul>
            <h6>
              <span>GOOGLE PPC</span>
            </h6>
            <ul>
              <li>2 Ad Copy</li>
              <li>Campaign Management</li>
              <li>$1500 ( Two platforms )</li>
            </ul>
            <h6>
              <span>BUDGET</span>
            </h6>
            <ul>
              <li>$2500 ( three platforms )</li>
            </ul>
            <h5 className="mb-4">
              <b>EST. LEADS: 100</b>
            </h5>
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
  );
};

export default TabLeadGeneration;
