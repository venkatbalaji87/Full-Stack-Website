/*==============
    SERVICES
===============*/

$(function () {
    new WOW().init();
});


/*==============
    WORK
===============*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image', // it will open all images
        gallery: {
            enabled: true // each and every image will be open as a gallery view.
        },
    });
});


/*==============
    TEAM
===============*/

$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            }
        }
    });
});


/*==============
    TESTIMONIAL
===============*/

$(function () {
    $("#clients-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});


/*==============
    COUNTER
===============*/

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});


/*==============
    CLIENTS
===============*/

$(function () {
    $("#clients-list").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5
            },
            992: {
                items: 6
            }
        }

    });
});


/*==============
    NAVIGATION
===============*/

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //hide
            $("nav").removeClass("pt-top-nav");
            $("#back-to-top").fadeOut();

        } else {
            //show
            $("nav").addClass("pt-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

/*Close Mobile Menu On Click (click,touch -> user defined value)*/
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});
//smooth scrolling menu item
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");

        //add animation to the html & body element
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250);

    });
});




/*==============
    NAVIGATION
===============*/
