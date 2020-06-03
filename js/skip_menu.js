$(function(){
    $('.skip_menu>li>a').focus(function(){
        $(this).parent().css('top',0);
    });
    $('.skip_menu>li>a').focusout(function(){
        $(this).parent().css('top','-100%');
    });
})