import React from 'react'
import { useDispatch } from 'react-redux'
import { CHANGE_MODAL } from '../../../Store/Action'

const VideoAnimation = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <div className="pt-3 pb-3">
                <div className="mt-5 row">
                    <div className="text-center col-lg-4 mb-5">
                        <div className="card PricingCard BrandFont pt-0 ">
                            <div className="PackageAndPricing VideoAnimationTabsHeight">
                                <h4>2D Character</h4>
                                <h3>
                                    <span>USD -</span>$400 <small>/30 Seconds</small>{" "}
                                </h3>
                                ($1300/2 minutes)
                            </div>
                            <ul>
                                <li>Concept & Script Writing</li>
                                <li>Upto 5 Revisions</li>
                                <li>Themes</li>
                                <li>Story Board</li>
                                <li>Animation</li>
                            </ul>
                            <h6><span>Add On For $100</span></h6>
                            <ul>
                                <li>Professional voice over and VFX</li>
                                <li>Unlimited Revisions</li>
                            </ul>
                            <a
                                className="PricingApplyNowBtn w-100 p-2"
                                onClick={() => dispatch(CHANGE_MODAL(true))}
                                href="javascript:void(0)"
                            >
                                Sign-Up
                            </a>
                        </div>
                    </div>
                    <div className="text-center col-lg-4 mb-5">
                        <div className="card PricingCard BrandFont pt-0 ActivePricingCard">
                            <div className="PackageAndPricing VideoAnimationTabsHeight">
                                <h4>Motion Graphics</h4>
                                <h3>
                                    <span>USD -</span>$300 <small>/30 Seconds</small>{" "}
                                </h3>
                                ($1000/2minute)
                            </div>
                            <ul>
                                <li>Concept & Script Writing</li>
                                <li>Upto 5 Revisions</li>
                                <li>Themes</li>
                                <li>Story Board</li>
                                <li>Animation</li>
                            </ul>
                            <h6><span>Add On For $100</span></h6>
                            <ul>
                                <li>Professional voice over and VFX</li>
                                <li>Unlimited Revisions</li>
                            </ul>
                            <a
                                className="PricingApplyNowBtn w-100 p-2"
                                onClick={() => dispatch(CHANGE_MODAL(true))}
                                href="javascript:void(0)"
                            >
                                Sign-Up
                            </a>
                        </div>
                    </div>
                    <div className="text-center col-lg-4 mb-5">
                        <div className="card PricingCard BrandFont pt-0 ">
                            <div className="PackageAndPricing VideoAnimationTabsHeight">
                                <h4>White Board Animation</h4>
                                <h3>
                                    <span>USD -</span>$300 <small>/30 seconds</small>{" "}
                                </h3>
                                ($2000/2 minutes)
                            </div>
                            <ul>
                                <li>Concept & Script Writing</li>
                                <li>Upto 5 Revisions</li>
                                <li>Themes</li>
                                <li>Story Board</li>
                                <li>Animation</li>

                            </ul>
                            <h6><span>Add On For $100</span></h6>
                            <ul>
                                <li>Professional voice over and VFX</li>
                                <li>Unlimited Revisions</li>
                            </ul>
                            <a
                                className="PricingApplyNowBtn w-100 p-2"
                                onClick={() => dispatch(CHANGE_MODAL(true))}
                                href="javascript:void(0)"
                            >
                                Sign-Up
                            </a>
                        </div>
                    </div>
                    <div className="text-center col-lg-4 mb-5">
                        <div className="card PricingCard BrandFont pt-0 ActivePricingCard">
                            <div className="PackageAndPricing VideoAnimationTabsHeight">
                                <h4>Screencast</h4>
                                <h3>
                                    <span>USD -</span>$300 <small>/30 Seconds</small> {" "}
                                </h3>
                                ($1000/2 minutes)
                            </div>
                            <ul>
                                <li>Concept & Script Writing</li>
                                <li>Upto 5 Revisions</li>
                                <li>Themes</li>
                                <li>Story Board</li>
                                <li>Animation</li>
                            </ul>
                            <h6><span>Add On For $100</span></h6>
                            <ul>
                                <li>Professional voice over and VFX</li>
                                <li>Unlimited Revisions</li>
                            </ul>
                            <a
                                className="PricingApplyNowBtn w-100 p-2"
                                onClick={() => dispatch(CHANGE_MODAL(true))}
                                href="javascript:void(0)"
                            >
                                Sign-Up
                            </a>
                        </div>
                    </div>
                    <div className="text-center col-lg-4 mb-5">
                        <div className="card PricingCard BrandFont pt-0 ">
                            <div className="PackageAndPricing VideoAnimationTabsHeight">
                                <h4>Live Video Editing</h4>
                                <h3>
                                    <span>USD -</span>$349{" "}
                                </h3>
                            </div>
                            <ul>
                                <li>Concept & Script Writing</li>
                                <li>Upto 5 Revisions</li>
                                <li>Themes</li>
                                <li>Story Board</li>
                                <li>Animation</li>
                            </ul>
                            <h6><span>Add On For $100</span></h6>
                            <ul>
                                <li>Professional voice over and VFX</li>
                                <li>Unlimited Revisions</li>
                            </ul>
                            <a
                                className="PricingApplyNowBtn w-100 p-2"
                                onClick={() => dispatch(CHANGE_MODAL(true))}
                                href="javascript:void(0)"
                            >
                                Sign-Up
                            </a>
                        </div>
                    </div>
                    <div className="text-center col-lg-4 mb-5">
                        <div className="card PricingCard BrandFont pt-0 ActivePricingCard">
                            <div className="PackageAndPricing VideoAnimationTabsHeight">
                                <h4>Stock Animation</h4>
                                <h3>
                                    <span>USD -</span>$300 <small>/30 Seconds</small> {" "}
                                </h3>
                                ($1000/2 minute)
                            </div>
                            <ul>
                                <li>Concept & Script Writing</li>
                                <li>Upto 5 Revisions</li>
                                <li>Themes</li>
                                <li>Story Board</li>
                                <li>Animation</li>
                            </ul>
                            <h6><span>Add On For $100</span></h6>
                            <ul>
                                <li>Professional voice over and VFX</li>
                                <li>Unlimited Revisions</li>
                            </ul>
                            <a
                                className="PricingApplyNowBtn w-100 p-2"
                                onClick={() => dispatch(CHANGE_MODAL(true))}
                                href="javascript:void(0)"
                            >
                                Sign-Up
                            </a>
                        </div>
                    </div>
                    <div className="text-center col-lg-4 mb-5">
                        <div className="card PricingCard BrandFont pt-0 ">
                            <div className="PackageAndPricing VideoAnimationTabsHeight">
                                <h4>3D Animation</h4>
                                <h3>
                                    <span>USD -</span>$600 <small>/30 Seconds</small> {" "}
                                </h3>
                                ($2000/2 minutes)
                            </div>
                            <ul>
                                <li>Concept & Script Writing</li>
                                <li>Upto 5 Revisions</li>
                                <li>Themes</li>
                                <li>Story Board</li>
                                <li>Animation</li>
                            </ul>
                            <h6><span>Add On For $100</span></h6>
                            <ul>
                                <li>Professional voice over and VFX</li>
                                <li>Unlimited Revisions</li>
                            </ul>
                            <a
                                className="PricingApplyNowBtn w-100 p-2"
                                onClick={() => dispatch(CHANGE_MODAL(true))}
                                href="javascript:void(0)"
                            >
                                Sign-Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoAnimation
