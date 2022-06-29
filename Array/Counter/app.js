let date = new Date('2022-06-30, 00:00:00').getTime();

var count = setInterval(()=>{
    let now = new Date().getTime();
    let difference = date - now;
    let days = Math.floor(difference/(1000*60*60*24));
    let hours = Math.floor((difference % (1000*60*60*24))/(1000*60*60))
    let minutes = Math.floor((difference % (1000*60*60))/(1000*60))
    let seconds = Math.floor((difference % (1000*60))/(1000))

    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

    if(difference <0){
        clearInterval(count);
        document.getElementById("expired").innerHTML = "EXPIRED"
    }

},1000)
