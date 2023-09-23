$(document).ready(function (){
    $('.thumbnail-slides').slick({
        mobileFirst: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000
      });
})