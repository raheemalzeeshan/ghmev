$(document).ready(function () {
    $('.carousel-sliders').slick({
        mobileFirst: true,
        infinite: false,
        arrows: true,
        swipe: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 565,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
            }
        ]
    });
});