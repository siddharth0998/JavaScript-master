//https://randomuser.me/api?results=50


var url = 'https://randomuser.me/api?results=50';
var array = [];


fetch(url)
    .then(function (value) {
        return value.json();
    }).then(function (value) {
        array = value;
        var data = value.results.map(function (value) {
            return `<li>
                <img src="${value.picture.large}" alt="Wells" />
                <div class="user-info">
                <h4>${value.name.first} ${value.name.last}</h4>
                <p>${value.location.city} ${value.location.country}</p>
                </div>
                </li>`;
        }).join("");
        document.getElementById("result").innerHTML = data

    })

function displayHtml(array_1) {
    var data_1 = array_1.map(function (value) {
        return `<li>
        <img src="${value.picture.large}" alt="Wells" />
        <div class="user-info">
        <h4>${value.name.first} ${value.name.last}</h4>
        <p>${value.location.city} ${value.location.country}</p>
        </div>
        </li>`;
    });
    document.getElementById("result").innerHTML = data_1.join("");

}


function filterData() {

    var myData_1 = array.results.filter(function (value) {

        if (value.name.first == document.getElementById("filter").value || value.name.last == document.getElementById("filter").value || value.location.city == document.getElementById("filter").value || value.location.country == document.getElementById("filter").value) {
            return true;
        }
    });

    displayHtml(myData_1);

}

