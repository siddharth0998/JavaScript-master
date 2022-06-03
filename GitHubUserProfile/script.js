// const APIURL = 'https://api.github.com/users/'

// const main = document.getElementById('main')
// const form = document.getElementById('form')
// const search = document.getElementById('search')


var url = 'https://api.github.com/users';
var myData = [];


fetch(url)
    .then(function (value) {
        return value.json();
    }).then(function (value) {

        myData = value;
        
    });


function displayHtml(myData) {
    var data = myData.map(function (value) {
        return `<div class="card">
    <h1>No Profile Find</h1>
</div>

<div class="card">
  <div>
    <img src="${value.avatar_url}" alt="divyesh" class="avatar">
  </div>
  <div class="user-info">
    <h2>${value.id}</h2>
    ${value.bio}
    <ul>
      <li>${value.followers}<strong>Followers</strong></li>
      <li>${value.following}<strong>Following</strong></li>
      <li>${value.public_repos}<strong>Repos</strong></li>
    </ul>

    <div id="repos"></div>
  </div>
</div>`;
    }).join("");

    document.getElementById("main").innerHTML = data;

}


function filter_1() {

    var filterData = myData.filter(function(value){
        if(value.login == document.getElementById("search").value){
            return true;
        }
    })

    displayHtml(filterData);

}
