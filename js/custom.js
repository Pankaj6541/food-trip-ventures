$(document).ready(function () {
    var one = $('#one');
    var two = $('#two');
    var three = $('#three');
    var four = $('#four');
    one.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots:false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 5000,
        animateOut: true,
        animateIn: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    two.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        // autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 8000,
        // animateOut: true,
        // animateIn: true,
        responsive: {
            0: {
                items: 1,
                nav:false,
                dots:true
            },
            600: {
                items: 3,
                nav:false,
                dots:true
            },
            1000: {
                items: 3,

            }
        }
    });
     three.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        // autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 8000,
        // animateOut: true,
        // animateIn: true,
        responsive: {
            0: {
                items: 1,
                nav:false,
                dots:true
            },
            600: {
                items: 3,
                nav:false,
                dots:true
            },
            1000: {
                items: 3,

            }
        }
    });
      four.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        // autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 8000,
        // animateOut: true,
        // animateIn: true,
        responsive: {
            0: {
                items: 1,
                nav:false,
                dots:true
            },
            600: {
                items: 3,
                nav:false,
                dots:true
            },
            1000: {
                items: 3,

            }
        }
    });
});