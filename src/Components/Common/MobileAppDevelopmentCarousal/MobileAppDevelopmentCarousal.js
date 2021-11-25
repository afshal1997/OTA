import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick/lib/slider";
import Image1 from "../../../Assets/Portfolio/AppDevelopment/image1.png";
import Image2 from "../../../Assets/Portfolio/AppDevelopment/image2.png";
import Image3 from "../../../Assets/Portfolio/AppDevelopment/image3.png";
import Image4 from "../../../Assets/Portfolio/AppDevelopment/image4.jpg";
import Image5 from "../../../Assets/Portfolio/AppDevelopment/image5.jpg";


const MobileAppDevelopmentCarousal = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  useEffect(() => {
    if (activeSlide === 4) {
      setActiveSlide(0);
    }
  }, [activeSlide]);
  const settings = {
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    arrows: false,
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (p, n) => setActiveSlide(n + 1),

    appendDots: (dots) => (
      <div className="bg-primary">
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className="app-pagination-dots">{""}</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          beforeChange: (p, n) => setActiveSlide(n),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          beforeChange: (p, n) => setActiveSlide(n),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          beforeChange: (p, n) => setActiveSlide(n),
        },
      },
    ],
  };
  return (
    <div className="mobile-app-development-category">
      <Slider {...settings}>
        {[Image1, Image2, Image3, Image4 ,Image5].map((image, idx) => (
          <div
            key={idx}
            className={
              idx === activeSlide ? "active-app-div" : "non-active-app-div"
            }
          >
            <img src={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MobileAppDevelopmentCarousal;
