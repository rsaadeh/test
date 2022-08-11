(function($){
    "use strict";
    // Preloader
    jQuery(window).on('load',function(){
        jQuery(".site-preloader-wrap").fadeOut(500);
        jQuery("#Portfolio").isotope();

        $('.main-slides').owlCarousel({
            items: 1,
            thumbs: true,
            touchDrag: false,
            mouseDrag: false,
            smartSpeed: 1000,
            thumbsPrerendered: true,
        });

        $(".homepage-slides").on("translate.owl.carousel", function(){
            $(".single-slider-item h1, .single-slider-item .hero-text, .single-slider-item p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slider-item .center-wrap").removeClass("animated fadeInDown").css("opacity", "0");
        });

        $(".homepage-slides").on("translated.owl.carousel", function(){
            $(".single-slider-item h1, .single-slider-item .hero-text, .single-slider-item p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slider-item .center-wrap").addClass("animated fadeInDown").css("opacity", "1");
        });

        // START MENU JS
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.navbar-light').addClass('menu-shrink fixed-top');
            } else {
                $('.navbar-light').removeClass('menu-shrink fixed-top');
            }
        });

        $('.navbar-nav .nav-item a').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });

        $(document).on('click','.navbar-collapse.show',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });

        // END MENU JS

        /*==============================================================*/
        // Reveal on scroll animation
        /*==============================================================*/
        window.sr = ScrollReveal({ reset: true });
        var hero = {
            origin   : "top",
            distance : "24px",
            duration : 1000,
            scale    : 1.05,
        }
        var info = {
            origin   : "left",
            distance : "24px",
            duration : 1000,
            scale    : 1.05,
        }
        var cta = {
            origin   : "right",
            distance : "24px",
            duration : 1000,
            scale    : 1.05,
        }
        sr.reveal(".section-title", hero);
        sr.reveal(".cta-info", info);
        sr.reveal(".cta-img", cta);

        // This will create video popup
        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
             type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // jQuery("#Portfolio").isotope();
        // filter portfolio
        $(".roxy-projects-active li").click(function(){
            $(".roxy-projects-active li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr("data-filter");
            $("#Portfolio").isotope({
                filter: selector,
            });
        });

        //Scroll Top link
        $(window).on('scroll',function(){
            if ($(this).scrollTop() > 100) {
                $('.scrolltop').fadeIn();
            } else {
                $('.scrolltop').fadeOut();
            }
        });
        $('.scrolltop').on('click',function(){
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

        // Pricing Tabs
        $(function(){
            $('.tabs .tabs-button .tabs-filter-button').click(function(){
                $('.tabs .tabs-button .tabs-filter-button, .tabs .tab-content .content ').removeClass('active');
                $(this).addClass('active');
                var index=$(this).index()+1;
                $('.tabs .tab-content .content:nth-child('+index+')').addClass('active');
            });
        });

        // Testimonial Slides
        $(".testimonial-slides").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: false,
            loop: true,
            autoplayHoverPause: true,
            smartSpeed: 1000,
            navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        });

        // Partners Slides
        $(".partners-slides").owlCarousel({
            dots: false,
            autoplay: true,
            loop: true,
            margin:100,
            smartSpeed: 1000,
            nav:true,
            navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });

        // Testimonial Slides
        $(".testimonial-slides").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: false,
            loop: true,
            autoplayHoverPause: true,
            smartSpeed: 1000,
            navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        });
        // Team Slides
        $(".team-slides").owlCarousel({
            dots: false,
            autoplay: true,
            loop: true,
            margin:30,
            nav:true,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    });

}(jQuery));

