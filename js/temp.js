

$(function(){
    $('#skill .about_list li:nth-child(1)').click(function(){
        $(this).addClass('active');
        $('#skill .pro01').css('opacity','1');
    });

    $('#skill .about_list li:nth-child(2)').click(function(){
        $(this).addClass('active');
        $('#skill .pro02').css('opacity','1');
    });

    $('#skill .about_list li:nth-child(3)').click(function(){
        $(this).addClass('active');
        $('#skill .pro03').css('opacity','1');
    });

    $('#skill .about_list li:nth-child(4)').click(function(){
        $(this).addClass('active');
        $('#skill .pro04').css('opacity','1');
    });

    $('#skill .about_list li:nth-child(5)').click(function(){
        $(this).addClass('active');
        $('#skill .pro05').css('opacity','1');
    });


    $('#skill .about_list>li').mouseleave(function(){
        $(this).removeClass('active');
        $('#skill .progress').css('opacity','0');
    });


})

