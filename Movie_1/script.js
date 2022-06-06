const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
var data = [];

fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1')
  .then(function (value) {
    return value.json();
  }).then(function (value) {
    data = value;
    var myData = value.results.map(function (value) {

      return `<div class="movie">
   
        <img src="${IMG_PATH}/${value.backdrop_path}">
        <div class="movie-info">
      <h3>${value.original_title}</h3>
      <span class="blue">${value.vote_average}</span>
        </div>
        <div class="overview">
      <h3>${value.title}</h3>
      ${value.overview}
    </div>
   
    </div>`

    }).join("");

    document.getElementById("main").innerHTML = myData;

  })

  function display(x) {

    var displayHtml = x.map(function(value){
      return `<div class="movie">
   
      <img src="${IMG_PATH}/${value.backdrop_path}">
      <div class="movie-info">
    <h3>${value.original_title}</h3>
    <span class="blue">${value.vote_average}</span>
      </div>
      <div class="overview">
    <h3>${value.title}</h3>
    ${value.overview}
  </div>
 
  </div>`
    }).join("");
    document.getElementById("main").innerHTML = displayHtml;
  }

  function filter_1() {
    var filterData = data.results.filter(x => x.original_title == document.getElementById("search").value)
    display(filterData);
  }