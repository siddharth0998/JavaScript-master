// const jokeEl = document.getElementById('joke')
// const jokeBtn = document.getElementById('jokeBtn');

//https://icanhazdadjoke.com

// generateJoke()

function display(){

fetch('https://icanhazdadjoke.com')
.then(function(value){
    return value.json();
}).then(function(value){
   var data = value.results.map(function(value){
        return `<div id="joke" class="joke">${value.joke}</div>`
    }).join("");
    document.getElementById("joke").innerHTML = data;
})
}


function next(){
   display();
}