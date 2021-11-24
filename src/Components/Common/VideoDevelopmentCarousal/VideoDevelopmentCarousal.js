import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import VideoModal from "../VideoModal/VideoModal";
import LeftImage from '../../../Assets/Portfolio/VideoDevelopment/left-side.jpg'
import RightSide from '../../../Assets/Portfolio/VideoDevelopment/right-side.jpg'
import videodeveplaceholder from '../../../Assets/Portfolio/VideoDevelopment/videodeveplaceholder1.jpg'
const VideoDevelopmentCarousal = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showVideoModal, setVideoModal] = useState(false)
  const [slideToShow, setSlideToShow] = useState(false)
  useEffect(() => {
    setActiveSlide(0)
  }, [])
  const ref = useRef();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    autoplaySpeed: 2000,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],

    beforeChange: (p, n) => setActiveSlide(n),

    appendDots: (dots) => (
      <div className="bg-primary">
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className="video-pagination-dots">{""}</div>,
  };
  return (
    <div className="video-development-category p-5">
      <Slider {...settings}>
        {[LeftImage, videodeveplaceholder, RightSide, videodeveplaceholder].map((slide, idx) => (
          <div
            key={idx}
            className={
              idx === activeSlide ? "active-video-div" : "non-active-video-div"
            }
            style={{ width: "100%", objectFit: "contain" }}
            onClick={() => {
              if (idx === activeSlide) {
                setVideoModal(true)
                setSlideToShow(slide)
              }
            }}
          >
            <img
              width="400"
              ref={idx === activeSlide ? ref : null}
              style={{ width: "100%" }} src={slide}
            />

          </div>
        ))}
      </Slider>
      <VideoModal show={showVideoModal} handleClose={() => { setVideoModal(false) }} image={slideToShow} />
    </div>
  );
};

export default VideoDevelopmentCarousal;
