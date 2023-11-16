$(function() {

    /**
     * loading page windo on load
     * it in start working automaticli
     * the code in index page
     */
    $(window).load(function() {
        $('#spinner').fadeOut(1000, function() {
            // $(this).parent().fadeOut();
        })
    });

    $('#up').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 600);
    });



    // =====================================
    /**
     * it hide text content from text eara
     * the code is in about us page
     */

    var textarea = $('.textarea');

    $(textarea).focus(function() {
        $(this).attr('text', $(this).text());
        $(this).text(' ');


    }).keyup(function() {
        var textVal = $(this).val();

        if (textVal.length >= 500) {
            $('.charNum').html('<span>You have Done </span>');
        } else {
            var i = 500;
            var g = ' <span> You have 500 char</span>';
            $('.charNum').html(i - textVal.length + g);
        }

    }).blur(function() {
        $(this).text($(this).attr('text'));
    });











    // ==============================
    /**
     * 
     */
    var focusOn = $('.focus');

    $(focusOn).on('focus', function() {
        $(this).attr("placeholder-data", $(this).attr('placeholder'));
        $(this).attr("placeholder", ' ');
    }).blur(function() {
        $(this).attr('placeholder', $(this).attr("placeholder-data"))
    })



});

// =====================================
/**
 * the AROW beside 
 * this arow make you back to up again
 * the code is in all page 
 * and it have the page scroll top hight
 */
$(window).scroll(function() {
    var up = $('#up');

    // console.log($(this).scrollTop());

    if ($(this).scrollTop() >= 600) {
        up.fadeIn(1000);
        // console.log('function');
    } else {
        up.fadeOut(1000);
    }

});