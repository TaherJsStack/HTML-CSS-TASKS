$(document).ready(function() {
    'use strict';

    // hide spinner loader 
    $('.spinner-loader').hide()

    // set background to navbar on scroll
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        $('.navbar').toggleClass('bg-scroll', scroll >= 100);
    });

    // reviews OwlCarousel
    $('.reviews .owl-carousel').owlCarousel({
        loop: true,
        autoPlay: true,
        margin: 1,
        nav: true,
        items: 1,
        dots: true,
        dotsData: true,
        autoplay: true,
        autoplayTimeout: 3000,
        SmartSpeed: 5000
    })

    // recipes OwlCarousel
    $('.recipes .owl-carousel').owlCarousel({
        loop: true,
        margin: 5,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })

    // client OwlCarousel
    $('.client .owl-carousel').owlCarousel({
        loop: true,
        margin: 5,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        SmartSpeed: 5000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })

    // brand slider OwlCarousel
    $('.brand-slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 5,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })

    // reviews OwlCarousel
    var isCompleted = 0;
    $(window).scroll(function() {
        if (isCompleted == 0 && $(this).scrollTop() >= 1300) {
            $('.counter').each(function() {
                var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: "swing",
                    step: function(func) {
                        $(this).text(parseFloat(func).toFixed(size));
                    }
                });
            });
            isCompleted = 1;
        }
    });

    // reviews OwlCarousel
    $('.video-modal').on('hidden.bs.modal', function() {
        var video = $(this).find("iframe").attr("src");
        $(this).find("iframe").attr("src", "");
        $(this).find("iframe").attr("src", video);
    });

    // reviews OwlCarousel
    $(".nav-item").on("click", ()=> {
        if ($('.navbar-collapse').hasClass('show')) {
            $(".navbar-toggler").trigger( "click" );
        }
    })

});

