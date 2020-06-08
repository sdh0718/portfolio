$(function(){
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoscrolling:true,
        scrollhorizontally:true,
        scrollingSpeed: 1000,
        nagivation: true,
        navigationPosition: 'left',

    });
    
    $.fn.fullpage({
        scrollOverflow: false,
        afterRender: function(){
            $('#video')[0].play();      
        }
    });

    $('.logo').on('click',function(){
        $.fn.fullpage.moveTo(1);
    });
    

});