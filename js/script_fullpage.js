$(function(){
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoscrolling:true,
        scrollhorizontally:true,
    });
    
    $.fn.fullpage({
        scrollOverflow: false,
        afterRender: function(){
            $('#video')[0].play();      
        }
    });

});