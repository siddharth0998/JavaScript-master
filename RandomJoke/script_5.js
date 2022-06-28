const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn');

//https://icanhazdadjoke.com

fetch("https://icanhazdadjoke.com",{
    headers: {
        Accept: 'application/json',
       
      },
}).then(y=>y.json()).then(y=> {
    console.log(y);
})

generateJoke()

