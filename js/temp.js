

$(function(){
    $('#skill .about_list>li').click(function(){
        $(this).addClass('active');
    });
    $('#skill .about_list>li').mouseleave(function(){
        $(this).removeClass('active');
    });
    
})

