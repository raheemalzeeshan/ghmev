$(document).ready( function() {
    $('.collage-column-slider').slick({
        mobileFirst: true,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    swipe: false
                }
            }
        ]
    });
})