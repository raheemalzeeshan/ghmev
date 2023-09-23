$(document).ready(function () {
    $('.main-product-col-left-sliders').slick({
        mobileFirst: true,
        infinite: false,
        arrows: true,
        swipe: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,

    });
});



// Blinking Effect
let blink = document.querySelector('.main-product-limited-deal');

if(blink) {
    setInterval(function() {
        blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
    }, 1000);
}
