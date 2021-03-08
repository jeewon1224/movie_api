$(document).ready(function(){

  $(".buttons>button").click(function(){
    //1. 버튼의 인덱스값 불러와서 저장
    var index = $(this).index();
    //2. 전체 패널 삭제
    $(".genre-section>div").hide();
    //3. 삭제된 패널 중 index번째 패널만 보이게 하기
    $(".genre-section>div").eq(index).show();
  });

  //첫번째 탭 강제 클릭 
  // $(".buttons>button").eq(0).trigger("click");
  // $(".genre-section>div").eq(0).show();
  
  $(".all").click(function(){
    
    $(".genre-section>div").show();
  });








  $(".buttons>button").click(function(){
    $('.wrap').css({'height':"100vh"});
  });
  $(".all").click(function(){
    $('.wrap').css({'height':"auto"});
  });
  





  $(".buttons>button").click(function(){
    $(this).addClass("on");
    $(this).siblings().removeClass("on");

    $(".all").click(function(){
      $(".buttons>button").removeClass("on");
    });
  

  });
  
  
  $(".all").click(function(){
    $(this).addClass("on");
    $(".buttons>button").removeClass("on");

    $(".buttons>button").click(function(){
      $(".all").removeClass("on");
    });


  });
  
});