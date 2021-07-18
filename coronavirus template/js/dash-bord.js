$(function(){

    var ss = [55, 33]

    $('.buttons-group-1 .ar-Preview-btn').on('click', function(){

        window.location = "en-page.html";
    })

    $('.buttons-group-1 .log-out-btn').on('click', function(){

        window.location = "login.html";
    })

    $('.buttons-group-2 .btn').on('click', function(){

        $(this).addClass('active').siblings().removeClass('active')
    })

    $('.col-1 .btn').on('click', function(){

        $('#' + $(this).data('enter')).animate({width:'toggle'},350).css('display', 'block');

    })
    
 
    $('.save-edits').on('click', function(){

        location.reload()
        
    })

    $('.news').on('click', function(){

        location.reload();
        
        window.location = "dash-bord-2.html";
    })

    $('.data-edit').on('click', function(){

        location.reload();
        
        window.location = "dash-bord.html";
    })

    
})