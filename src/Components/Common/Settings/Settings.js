export const TestmonialsSliderSettings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    centerPadding: '0px',
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                initialSlide: 2,
                centerPadding: '0px'
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                initialSlide: 1,
                centerPadding: '0px'
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerPadding: '0px'
            }
        }
    ]
};