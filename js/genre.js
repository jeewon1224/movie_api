$(function(){

  function getGenre(gen, box, slideId){
    let getGenres = [];
    $.ajax({
      url:'https://yts.mx/api/v2/list_movies.json?genre='+gen+'&page=1&limit=15',
      success:function(data){
        console.log(data);

        for(let i=0; i<data.data.movies.length; i++){
          let genreHTML = `<div class="slide-box">
                            <div>
                              <img src="${data.data.movies[i].medium_cover_image}" alt="">
                              <div class="slide-txt">
                                <h3>${data.data.movies[i].title}</h3>
                                <p class="rating">Rating : ${data.data.movies[i].rating}</p>
                              </div>
                              <a href="/movie_api/detail.html?id=${data.data.movies[i].id}">Details</a>
                            </div>
                          </div>`

                          getGenres += genreHTML;


        }

        $(box).append(getGenres);




        $(slideId).lightSlider({
      
          item:5,
          slideMove:1,
          auto:true,
          loop:true,
          speed:400
        });  
      }
    });

  }
  
  getGenre('action', '.action-contents' , '#actionSlide');
  getGenre('romance', '.romance-contents' , '#romanceSlide');
  getGenre('drama', '.drama-contents' , '#dramaSlide');

  
});