$(function(){

    //start 문서준비
    navMenu();
    //end 문서준비
  
    // start 버거메뉴이벤트
    $('#open_nav_btn').click(function(){
      $('.nav>ul').css('display','block');
    });
    $('#close_nav_btn').click(function(){
      $('.nav>ul').css('display','none');
    });
    // end 버거메뉴이벤트
  
    // start 리사이즈이벤트
    $(window).resize(function(){
      navMenu();
    });
    //end 리사이즈이벤트
    
    //start 네비게이션변환함수
    function navMenu(){
      var winWidth=$(window).width();
      if(winWidth>=801){
        $('.nav>ul').css('display','flex');
        $('#open_nav_btn').css('display','none');
      }else{
        $('.nav>ul').css('display','none');
        $('#open_nav_btn').css('display','block');
      }
    }
    //end 네비게이션변환함수
  })