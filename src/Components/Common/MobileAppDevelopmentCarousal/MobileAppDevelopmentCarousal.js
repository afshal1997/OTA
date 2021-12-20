import React from "react";
import Slider from "react-slick/lib/slider";
import Image1 from "../../../Assets/Portfolio/AppDevelopment/image1.png";
import Image2 from "../../../Assets/Portfolio/AppDevelopment/image2.png";
import Image3 from "../../../Assets/Portfolio/AppDevelopment/image3.png";
import Image4 from "../../../Assets/Portfolio/AppDevelopment/image4.jpg";
import Image5 from "../../../Assets/Portfolio/AppDevelopment/image5.jpg";

const MobileAppDevelopmentCarousal = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    arrows: false,
    speed: 500,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          centerPadding: "0px",
          infinite: true,
          dots: false
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: "0px",
          initialSlide: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <div className="mobile-app-development-category">
      <Slider {...settings}>
        <div>
          <img src={Image1} alt="Image1" />
        </div>
        <div>
          <img src={Image2} alt="Image2" />
        </div>
        <div>
          <img src={Image3} alt="Image3" />
        </div>
        <div>
          <img src={Image4} alt="Image4" />
        </div>
        <div>
          <img src={Image5} alt="Image5" />
        </div>
      </Slider>
    </div>
  );
};

export default MobileAppDevelopmentCarousal;
