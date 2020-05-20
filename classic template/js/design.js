$(function(){
    'use strict';

    //Trigger bx slider plugin
    $('.slider').bxSlider({
        pager: false,
        touchEnabled: false,
        auto: true
    });
        
    //Adjust Header Height

    var myHeader = $('.header');

    myHeader.height($(window).height());

    $(window).resize(function(){

        myHeader.height($(window).height());

        $('.header .bx-wrapper').css('bottom', ($(window).height() - ($('.header .bx-wrapper').height() + $('.header .navbar').height())) / 2);
    });

    //Links Add Active Class

    $('.links li').on('click', function(){

        $(this).addClass('active').siblings().removeClass('active')
    })

        //Trigger nicescroll plugin
        $('html').niceScroll();

        $('.header .bx-wrapper').css('bottom', ($(window).height() - ($('.header .bx-wrapper').height() + $('.header .navbar').height())) / 2);

        $('.links li').click(function(){
            $('html , body').animate({

                scrollTop : $('#' + $(this).data('value')).offset().top

            },1000)
        })

        //Auto Slider Code

        /*$(function mySlider(){
            
            $('.mySlider .active').each(function(){
                
                if(!$(this).is(':last-child')){

                    $(this).delay(3000).fadeOut(1000, function(){

                        $(this).removeClass('active').next().addClass('avtive').fadeIn(1000);

                        mySlider();

                    })
                }else{
                    $(this).delay(3000).fadeOut(1000, function(){

                        $(this).removeClass('active');

                        $('.mySlider div').eq(0).addClass('avtive').fadeIn(1000);

                        mySlider();

                    })
                }
            })
        })

        $('.our-projects ul li').on('click', function(){

            $(this).addClass('active').siblings().removeClass('active')
        })

        $('.our-projects .overlay i').mouseenter(function(){
            $(this).removeClass('far').addClass('fas')
        })

        $('.our-projects .overlay i').mouseleave(function(){
            $(this).removeClass('fas').addClass('far')
        })
*/
        var mixer = mixitup('.gallery');
});