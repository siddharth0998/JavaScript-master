
var string =  'Welcome to this Javascript'

var array = string.split(" ")
var str = ''
for(let k = 0; k< array.length; k++ ){
    console.log(array[k]);
    str += reverse(array[k]);
}

function reverse(x) {
    let word = ''
    for(let i= x.length; i>=0; i--){
        console.log(x[i]);
        word += x[i];
    }
    return word;

}
console.log(str);
console.log("reverse: " + reverse('Welcome'));




