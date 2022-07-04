const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


function myDisplayInfo()
{
    fetch(APIURL+search.value).then(function(value) {

        return value.json();
    }).then(function(value) {

        var data = null;

        console.log(value);



        if(value.message == undefined)
        {

         data = ` <div class="card">
        <div>
          <img src="${value.avatar_url}" alt="divyesh" class="avatar">
        </div>
        <div class="user-info">
          <h2>${value.id}</h2>
            ${value.bio}
          <ul>
            <li>${value.followers} <strong>Followers</strong></li>
            <li>${value.following} <strong>Following</strong></li>
            <li>${value.public_repos} <strong>Repos</strong></li>
          </ul>
    
          <div id="repos"></div>
        </div>
      </div>
  `

        }
        else
        {   

            data = ` <div class="card">
            <h1>${value.message}</h1>
        </div>`

        }
        main.innerHTML = data;
        
    })
    
    ;


}


