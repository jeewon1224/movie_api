$(function(){

  let currentPage =1;
const pageNumLength = $(".numBtns button.pageNum").length;


  function getData(page){
    let getDatas=[];

    $.ajax({
      url : 'https://yts.mx/api/v2/list_movies.json?sort_by=year&order_by=desc&limit=10&page=1'+page,
      success : function(data){
        // console.log(data.data.movies);
        for(let i =0; i<data.data.movies.length; i++){
          if(data.data.movies[i].title == ''){
            data.data.movies[i].title = 'No Title';
          }
          let recentHTML = 
          `<div class="recent-movie-wrap">
              <div class="recent-movies">
                <div>
                  <img src="${data.data.movies[i].medium_cover_image}" alt="">
                </div>
                <h3 class="movie-title">${data.data.movies[i].title}</h3>
              </div>
            </div>`;

            getDatas += recentHTML;

        }
        $(".container2").append(getDatas);
      }
    });
    currentPage=page;
    // console.log(typeof(page));

   
  }

  $(".numBtns button.pageNum").click(function(){
    let btnValue = Number($(this).attr('value'));
    // console.log(btnValue);
    $(".recent-movie-wrap").remove();
    $(".loading").show();
    
    getData(btnValue);

    let btnIdx = $(this).index();

    $(".numBtns button").removeClass("active");
    $(".numBtns button").eq(btnIdx).addClass("active");
  });

  function goToPrevNext(a,b){
    if(currentPage==a){
      return false;

    }else{
      $(".recent-movie-wrap").remove();
      getData(b);

      $(".loading").show();
      $(".numBtns button").removeClass("active");
      $(".numBtns button").eq(currentPage).addClass("active");
    }
  }






  $(".numBtns button.prev").click(function(){
    goToPrevNext(1, currentPage-1);
  });

  $(".numBtns button.next").click(function(){
    goToPrevNext(pageNumLength, currentPage+1);




    // if(currentPage==pageNumLength){
    //   return false;
    // }else{
    //   $(".recent-movie-wrap").remove();
    //   getData(currentPage-1);

    //   $(".loading").show();
    //   $(".numBtns button").removeClass("active");
    //   $(".numBtns button").eq(currentPage).addClass("active");
    // }
  });

  $(".numBtns button").eq(1).trigger("click");



  // getData(1);

  $(document).ajaxComplete(function(){
    $(".loading").hide();
  })
});