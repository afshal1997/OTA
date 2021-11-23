import React, { useRef, useState } from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";

const videoMp4 = "https://www.w3schools.com/html/mov_bbb.mp4";
const videoOgg = "https://www.w3schools.com/html/mov_bbb.ogg";
const VideoDevelopmentCarousal = () => {
  const [activeSlide, setActiveSlide] = useState(3);
  const ref = useRef();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    beforeChange: (p, n) => setActiveSlide(n),

    appendDots: (dots) => (
      <div className="bg-primary">
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className="video-pagination-dots">{""}</div>,
  };
  return (
    <div className="video-development-category">
      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map((slide, idx) => (
          <div
            key={idx}
            className={
              idx === activeSlide ? "active-video-div" : "non-active-video-div"
            }
            style={{ width: "100%", objectFit: "contain" }}
          >
            <video
              width="400"
              ref={idx === activeSlide ? ref : null}
              style={{ width: "100%" }}
            >
              <source src={videoMp4} type="video/mp4" />
              <source src={videoOgg} type="video/ogg" />
            </video>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoDevelopmentCarousal;
