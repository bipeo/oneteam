$(function(){
    var owl = $('.owl_wrap .owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText: "",
        rtl:true,
        autoplay:true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX'
    });
    $('.play').on('click',function(){
        owl.trigger('autoplay.play.owl',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('autoplay.stop.owl')
    })

    $('.owl_wrap_2 .owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true,
        dots: false,
        loop:true,
        margin: 4,
        nav: false,
        responsiveClass:true,
        responsive:{
            1280:{
                items:3,
            },
            1540: {
                items:4,
            },
            1920:{
                items:5,
            }
        }
    });
});