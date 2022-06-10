// const jokeEl = document.getElementById('joke')
// const jokeBtn = document.getElementById('jokeBtn');

//https://icanhazdadjoke.com

// generateJoke()

function display() {

    fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json',
        },
    })
        .then(function (value) {
            //console.log(value.json());
            return value.json();
        }).then(function (value) {
            console.log(value);
            document.getElementById("joke").innerHTML = value.joke;
        })
}

display()


function next() {
    
    display();
}