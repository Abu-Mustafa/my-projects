$(document).ready( function(){
    // Trigger nicescroll plugin

    $("body").niceScroll({
        cursorcolor:"aquamarine",
        cursorwidth:"16px"
      });

    // Change header height

    $('div').height(($(window).height()));
});
