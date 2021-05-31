
$(document).ready(function () {

    $('#model2 > div:gt(0)').hide();

    setInterval(function () {
        $('#model2 > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#model2');
    }, 3000);


    $('#model > div:gt(0)').hide();

    setInterval(function () {
        $('#model > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#model');
    }, 3000);


    var swiper1 = new Swiper("#swiper1", {
        slidesPerView: 1,
        spaceBetween: 300,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            autoplayDisableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    var swiper2 = new Swiper("#swiper2", {
        slidesPerView: 1,
        spaceBetween: 200,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    $("#swiper1 .swiper-slide").hover(
        function () {
            swiper1.autoplay.stop();
        }, function () {
            swiper1.autoplay.start();
        }
    );





    function VideoList() {

        $("#portWrap").hide();

        $('.port_video, #portWrap, .port_video object').on('scroll touchmove mousewheel', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });


        $("#videoCon1").click(function (e) {
            alert('클릭')
            $('#portVideo1').show();
        });
        $("#videoCon2").click(function (e) {
            $('#portVideo2').show();
        });
        $("#videoCon3").click(function (e) {
            $('#portVideo3').show();
        });
        $("#videoCon4").click(function (e) {
            $('#portVideo4').show();
        });
        $("#videoCon5").click(function (e) {
            $('#portVideo5').show();
        });
        $("#videoCon6").click(function (e) {
            $('#portVideo6').show();
        });


        $("#portVideo1 .CloseIcon").click(function () {
            $("#portWrap").hide();
            var video = $("#portVideo1 iframe").attr("src");
            $("#portVideo1 iframe").attr("src", video);
        });

        $("#portVideo2 .CloseIcon").click(function () {
            $("#portWrap").hide();
            var video = $("#portVideo2 iframe").attr("src");
            $("#portVideo2 iframe").attr("src", video);
        });

        $("#portVideo3 .CloseIcon").click(function () {
            $("#portWrap").hide();
            var video = $("#portVideo3 iframe").attr("src");
            $("#portVideo3 iframe").attr("src", video);
        });

        $("#portVideo4 .CloseIcon").click(function () {
            $("#portWrap").hide();
            var video = $("#portVideo4 iframe").attr("src");
            $("#portVideo4 iframe").attr("src", video);
        });

        $("#portVideo5 .CloseIcon").click(function () {
            $("#portWrap").hide();
            var video = $("#portVideo5 iframe").attr("src");
            $("#portVideo5 iframe").attr("src", video);
        });

        $("#portVideo6 .CloseIcon").click(function () {
            $("#portWrap").hide();
            var video = $("#portVideo6 iframe").attr("src");
            $("#portVideo6 iframe").attr("src", video);
        });


    }

    VideoList();

});

