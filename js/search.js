$(function () {
  let searchValue = document.location.href.split("=")[1];
  let decodeValue = decodeURI(searchValue);
  
  $('.movie_con').masonry({
    // options
    itemSelector: '.movie_box',
    columnWidth: '.item-sizer',
    // columnWidth: 20,
    percentPosition: true,
   
  });
  


  $.ajax({
    type: "POST",
    url: "/movie_api/data/api.php",
    data: {
      search_value: decodeValue,
    },
    success: function (data) {
      let obj = JSON.parse(data);
      console.log(obj);
      //console.log(obj.items);

      if (obj.items.length == 0) {
        alert("데이터가 없습니다.");
        location.href = "/movie_api/index.html";
      }

      let itemContents = [];
      $.each(obj.items, function (i, item) {
        console.log(item.link);
        // let itemHTML = `<div class="movie_box">
        //                   <h2>${item.title}</h2>
        //                   <img src="${item.image}" alt="" />
        //                   <p>감독 :${item.director}</p>
        //                   <p>개봉 :${item.pubDate}</p>
        //                   <p>평점 :${item.userRating}</p>
        //                   <a href="#">더보기</a>
        //                 </div>`;
        
        let itemHTML = `<div class="movie_box">
                          <div>
                            <div class="img-box">
                              <img src="${item.image}" alt="" />
                            </div>
                            <div class="item-txt">
                              <h2>${item.title}</h2>
                              <p class="director">감독 : ${item.director}</p>
                              <p class="date">개봉 : ${item.pubDate}</p>
                              <p class="rate">평점 : ${item.userRating}</p>
                              <a href="${item.link}">더보기</a>
                            </div>
                          </div>
                        </div>`;
        

                        
        itemContents.push($(itemHTML).get(0));
      });
      $(".movie_con").append(itemContents);

      $(".movie_con").imagesLoaded(function() {
        $(".movie_con").masonry('appended', itemContents);
      });
    },
  });






});