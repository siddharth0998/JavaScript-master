var number = 0;
 let count = setInterval(()=>{  
        document.getElementById("projects").innerHTML = ++number
        if(number == 500){
            document.getElementById("projects").innerHTML = number + "+"
            clearInterval(count);
        }
},0)

var number1 = 0;
let workingCount = setInterval(()=>{
    document.getElementById("working").innerHTML = ++number1
    if(number1 == 17140){
        document.getElementById("working").innerHTML = number1 + "+"
        clearInterval(workingCount);
    }
},0)

var number2 = 0;
let clients = setInterval(()=>{
    document.getElementById("clients").innerHTML = ++number2
    if(number2 == 1500){
        document.getElementById("clients").innerHTML = number2 + "+"
        clearInterval(clients);
    }
},0)
