

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

    var typingBool = false; 
    var typingIdx=0; 
    var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
       typingBool=true; 
       
    var tyInt = setInterval(typing,100); // 반복동작 
    } 
     
    function typing(){ 
       if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
            $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
            typingIdx++; 
        }else{ 
            clearInterval(tyInt); //끝나면 반복종료 
        } 
    }  


})

