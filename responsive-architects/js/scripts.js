$('.menu-button').click(function () {
    $('nav').toggleClass();
});

// Initialize animate on scroll
AOS.init();


//Initialize Tiny Slider
var slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    mouseDrag: true,
});