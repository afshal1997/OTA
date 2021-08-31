export const TestmonialsSliderSettings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                initialSlide: 1
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