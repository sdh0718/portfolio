$(function(){
    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        loop:true,
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            800: {
                spaceBetween:20,
                slidesPerView:2.5,
            }
        }
    });


})