$(document).ready(function () {
  $('.main-image-slider').slick({
    mobileFirst: true,
    infinite: false,
    slidesToShow: 1.3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
          swipe: false
        }
      }
    ]
  });
})