$(function(){

    $('html').niceScroll({
        cursorcolor: "#74b978",
        cursorwidth: "8px",
        horizrailenabled:false
    });

    $(window).resize(function(){
        $('.info-side .lang-toggle').css('top', ($(window).height() - $('.info-side .lang-toggle').height()) / 2);

    })
    
    $('.info-side .lang-toggle').css('top', ($(window).height() - $('.info-side .lang-toggle').height()) / 2);

    $('.img-side .nav li').on('click', function(){

        $(this).addClass('active').siblings().removeClass('active')
    })

    $('.side-menu .nav li').on('click', function(){

        $('.side-menu').slideUp()
    })

    $('.side-menu .nav li').on('hover', function(){

        $(this).addClass('active').siblings().removeClass('active')

    })

    $('.info-side .ar-lang-toggle').css('top', ($(window).height() - $('.info-side .ar-lang-toggle').height()) / 2);

    $(window).resize(function(){
        $('.info-side .ar-lang-toggle').css('top', ($(window).height() - $('.info-side .ar-lang-toggle').height()) / 2);

    })

    $('.info-side .lang-toggle a, .info-side .ar-lang-toggle a').on('click', function(){

        $(this).addClass('active').siblings().removeClass('active')
    })
    
    $('.nav li, .info-side .clickable').click(function(){
        $('html , body').animate({

            scrollTop : $('#' + $(this).data('value')).offset().top

        },1000,function(){
                if(100 <= scrollY <= 200){
                        $('.home').addClass('active').siblings().removeClass('active')
                        
                        
                }
            
        })
    })
    
    $('.img-side i').click(function(){

        
        $('.side-menu').slideToggle().css({
            'display':'flex',
            'justifyContent' : 'center',
            'alignItems' : 'center'
        })

        $(this).toggleClass('fa-bars').toggleClass('fa-times')

        $('.info-side .ar-lang-toggle').fadeToggle()

        $('.info-side .lang-toggle').fadeToggle()
    })
    
})