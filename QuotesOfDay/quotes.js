//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {
        'author': 'Jim Rohn',
        'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {
        'author': 'Epictetus',
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        'author': 'Frank Sinatra',
        'quote': 'The best revenge is massive success.'
    },
    {
        'author': 'Wayne Gretzy',
        'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {
        'author': 'Nelson Mandela',
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
        'author': 'Elbert Hubbard',
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

// var data = Math.random();
// console.log(data);

function display() {
    var ran = Math.floor(Math.random() * 10);
    console.log(ran)
    if (ran >= arrayOfQuotes.length) {
        ran = ran- 4;
        document.getElementById("authorOutput").innerHTML = arrayOfQuotes[ran].author;
        document.getElementById("quoteOutput").innerHTML = arrayOfQuotes[ran].quote;
    }
    else {
        document.getElementById("authorOutput").innerHTML = arrayOfQuotes[ran].author;
        document.getElementById("quoteOutput").innerHTML = arrayOfQuotes[ran].quote;
    }
}

function generateQuote() {
  
    display();
}