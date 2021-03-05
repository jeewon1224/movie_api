




  $(function(){
    let detailID = document.location.href.split("=")[1];
    // console.log(detailID)
    
    
    let getDetail = [];

    $.ajax({
      url:"https://yts.mx/api/v2/movie_details.json?movie_id="+detailID,
      success:function(data){
        console.log(data);


        
          let detailHTML = `<div class="img_txt">
          <div class="image">
            <img src="${data.data.movie.medium_cover_image}" alt="" class="poster" onError="this.src='/movie_api/img/replace.jpg';">
            
          </div>
          <div class="detailTxt">
            <h3 class="title">${data.data.movie.title}</h3>
            <div class="additional">
              <p class="genre">Genre : ${data.data.movie.genres}</p>
              <p class="rate">Rate : ${data.data.movie.rating}</p>
              <p class="runtime">Runtime : ${data.data.movie.runtime} min</p>
              <p class="year">Released in ${data.data.movie.year}</p>

            </div>
          </div>
        </div>
        <hr>
        <div class="desc">${data.data.movie.description_full}</div>`

                    getDetail += detailHTML;
        
        $(".detailBox").append(getDetail);

        console.log(getDetail);
      }
    });    
  });
  