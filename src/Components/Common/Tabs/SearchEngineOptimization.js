import React from "react";
import { useDispatch } from "react-redux";
import { CHANGE_MODAL } from "../../../Store/Action";
import GetStarted from "../Buttons/GetStarted";

const SearchEngineOptimization = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="pt-3 pb-3">
        <div className="mt-5 row">
          <div className="text-center col-lg-4 mb-5">
            <div className="card PricingCard BrandFont pt-0 ">
              <div className="PackageAndPricing">
                <h4>BASIC</h4>
                <h3>
                  <span>USD -</span>$199 <small>/ mo</small>{" "}
                </h3>
              </div>
              <ul>
                <li>Keywords Optimization ( 15 )</li>
                <li>SEO Research</li>
                <li>On Page Optimization ( 10 )</li>
                <li>Link Building ( 24 )</li>
                <li>Guest Blog Links ( 01 )</li>
                <li>Search Engine Submissions ( 03 )</li>
                <li>Blogs Social Bookmarking ( 10 )</li>
                <li>Classified Submissions ( 10 )</li>
                <li>Local Optimization ( 01 )</li>
                <li>Local Business Listings ( 01 )</li>
                <li>Video Optimization</li>
              </ul>
              <GetStarted buttonText='Sign-Up' buttonClass='PricingApplyNowBtn w-100 p-2' />

            </div>
          </div>
          <div className="text-center col-lg-4 mb-5">
            <div className="card PricingCard BrandFont pt-0 ActivePricingCard">
              <div className="PackageAndPricing">
                <h4>STANDARD</h4>
                <h3>
                  <span>USD -</span>$399 <small>/ mo</small>{" "}
                </h3>
              </div>
              <ul>
                <li>Keywords Optimization ( 30 )</li>
                <li>SEO Research</li>
                <li>On Page Optimization ( 25 )</li>
                <li>Link Building ( 47 )</li>
                <li>Guest Blog Links ( 02 )</li>
                <li>Search Engine Submissions ( 05 )</li>
                <li>Blogs Social Bookmarking ( 20 )</li>
                <li>Classified Submissions ( 20 )</li>
                <li>Local Optimization ( 02 )</li>
                <li>Local Business Listings ( 02 )</li>
                <li>Video Optimization</li>

              </ul>
              <GetStarted buttonText='Sign-Up' buttonClass='PricingApplyNowBtn w-100 p-2' />

            </div>
          </div>
          <div className="text-center col-lg-4 mb-5">
            <div className="card PricingCard BrandFont pt-0 ">
              <div className="PackageAndPricing">
                <h4>PREMIUM</h4>
                <h3>
                  <span>USD -</span>$999 <small>/ mo</small>{" "}
                </h3>
              </div>
              <ul>
                <li>Keywords Optimization ( 80 )</li>
                <li>SEO Research</li>
                <li>On Page Optimization ( 60 )</li>
                <li>Content Writing</li>
                <li>Link Building ( 100 )</li>
                <li>Guest Blog Links ( 04 )</li>
                <li>Search Engine Submissions ( 12 )</li>
                <li>Blogs Social Bookmarking ( 54 )</li>
                <li>Classified Submissions ( 30 )</li>
                <li>Local Optimization ( 05 )</li>
                <li>Local Business Listings ( 05 )</li>
                <li>Video Optimization</li>
                <li>PPT Creation</li>

              </ul>
              <GetStarted buttonText='Sign-Up' buttonClass='PricingApplyNowBtn w-100 p-2' />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEngineOptimization;
