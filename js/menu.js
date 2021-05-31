
$(document).ready(function () {

    function js() {


        $('.overlay-navigation ul').on('scroll touchmove mousewheel', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });


        $('.open-overlay').click(function () {
            var overlay_navigation = $('.overlay-navigation'),
                nav_item_1 = $('nav li:nth-of-type(1)'),
                nav_item_2 = $('nav li:nth-of-type(2)'),
                nav_item_3 = $('nav li:nth-of-type(3)'),
                nav_item_4 = $('nav li:nth-of-type(4)'),
                top_bar = $('.bar-top'),
                middle_bar = $('.bar-middle'),
                bottom_bar = $('.bar-bottom');

            overlay_navigation.toggleClass('overlay-active');
            if (overlay_navigation.hasClass('overlay-active')) {
                top_bar.addClass('animate-top-bar');
                middle_bar.addClass('animate-middle-bar');
                bottom_bar.addClass('animate-bottom-bar');
                overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
                nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
                nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
                nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
                nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
            } else {
                top_bar.removeClass('animate-top-bar');
                middle_bar.removeClass('animate-middle-bar');
                bottom_bar.removeClass('animate-bottom-bar');
                overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
                nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
                nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
                nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
                nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
            }

        });
    }

    function out() {
        $('nav li a').click(function () {

            var overlay_navigation = $('.overlay-navigation'),
                nav_item_1 = $('nav li:nth-of-type(1)'),
                nav_item_2 = $('nav li:nth-of-type(2)'),
                nav_item_3 = $('nav li:nth-of-type(3)'),
                nav_item_4 = $('nav li:nth-of-type(4)'),
                top_bar = $('.bar-top'),
                middle_bar = $('.bar-middle'),
                bottom_bar = $('.bar-bottom');

            overlay_navigation.toggleClass('overlay-active');
            top_bar.removeClass('animate-top-bar');
            middle_bar.removeClass('animate-middle-bar');
            bottom_bar.removeClass('animate-bottom-bar');
            overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up');
            nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
            nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
            nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
            nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
        });
    }

    js();
    out();

});