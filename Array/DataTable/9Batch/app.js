function resUserName(event) {
    var theEvent = event || window.event;

    var key = theEvent.keyCode || theEvent.which;

    if ((key >= 65 && key <= 90) || (key >= 97 && key <= 122) || (key >= 48 && key <= 57)) {

    }
    else {
        theEvent.returnValue = false;
    }
    console.log(theEvent);
}

function checkUserName() {
    var leng = document.getElementById("form3Example1c").value.length;

    var data = document.getElementById("form3Example1c").value;
    var c = 0;
    var j = 0;

    for (let i = 0; i < data.length; i++) {
        var ascii1 = data.charCodeAt(i);
        if ((ascii1 >= 65 && ascii1 <= 90) || (ascii1 >= 97 && ascii1 <= 122)) {
            ++c;
        }
        else if (ascii1 >= 48 && ascii1 <= 57) {
            ++j;
        }
    }

    if ((c > 0 && j > 0) && (leng >= 5 && leng <= 15)) {
        document.getElementById("userName").innerHTML = ""
    }
    else {
        document.getElementById("userName").innerHTML = "username should be alphanumeric and between 5-15 character"
    }
}

function resEmail(event) {
    var theEvent = event || window.event;
    var key = theEvent.keyCode || theEvent.which;
    if ((key >= 65 && key <= 90) || (key >= 97 && key <= 122) || (key >= 48 && key <= 57) || (key == 64 || key == 46)) {

    }
    else {
        theEvent.returnValue = false;
    }
}

function checkEmail(event) {
    var data = document.getElementById("form3Example3c").value;
    var special = 0;
    for (let i = 0; i < data.length; i++) {
        var ascii = data.charCodeAt(i);
        if (ascii == 64 || ascii == 46) {
            ++special;
        }
    }

    if (data.charCodeAt(0) == 64 || (!(data.charAt(data.length - 4) == '.' || data.charAt(data.length - 3) == '.')) || (data.charAt(data.indexOf('.') - 1) == '@') || special != 2) {
        document.getElementById("email").innerHTML = "invalid email"
    }
    else if (data.length >= 6 && data.length <= 255) {
        document.getElementById("email").innerHTML = ""
    }
    else {
        document.getElementById("email").innerHTML = "invalid email"
    }
}

function resPassword(event){
    var theEvent = event || window.event;
    var key = theEvent.keyCode || theEvent.which;

    if(key != 32){

    }
    else{
        theEvent.returnValue = false;
    }
}

function checkPassword(event) {

    var data = document.getElementById("form3Example4c").value;

    var capital = 0;
    var small = 0;
    var number = 0;
    var special = 0;
    for (let i = 0; i < data.length; i++) {
        var ascii = data.charCodeAt(i);

        if (ascii >= 65 && ascii <= 90) {
            ++capital;
        }
        else if (ascii >= 97 && ascii <= 122) {
            ++small;
        }
        else if (ascii >= 48 && ascii <= 57) {
            ++number;
        }
        else if ((ascii >= 32 && ascii <= 47) || (ascii >= 58 && ascii <= 64) || (ascii >= 91 && ascii <= 96) || (ascii >= 123 && ascii <= 126)) {
            ++special;
        }
    }

    if(capital>0 && small >0 && number >0 && special >0 && (data.length >=6 && data.length<=16)){
        document.getElementById("password").innerHTML = ""
    }
    else{
        document.getElementById("password").innerHTML = "password must contain 1 special,1 capital,1 small,1 number character and length should be between 6-16 character"
    }

}

function resConfPassword(event){
    var theEvent = event || window.event;
    var key = theEvent.keyCode || theEvent.which;

    if(key != 32){

    }
    else{
        theEvent.returnValue = false;
    }
}

function checkConfPassword(event){
    var pass = document.getElementById("form3Example4c").value;
    var confPass= document.getElementById("form3Example4cd").value;
    if( pass === confPass){
        document.getElementById("confirmPassword").innerHTML = "";
    }
    else{
        document.getElementById("confirmPassword").innerHTML = "password do not match!";
    }
}

function resZipCode(event){
    var theEvent = event || window.event;
    var key = theEvent.keyCode || theEvent.which;
    var data = document.getElementById("form3Example5c").value;
    

    if(key >= 48 && key <= 57 && data.length < 6){

    }
    else{
        theEvent.returnValue = false;
    }
    console.log(data);
    
}

function checkZipCode(event){
    var data1 = document.getElementById("form3Example5c").value;

    if(data1.length == 6){
        document.getElementById("zipCode").innerHTML = ""
    }
    else{
        document.getElementById("zipCode").innerHTML = "invalid zipcode"
    }
}

function checkAddress(event){
    var data = document.getElementById("form3Example6c").value;

    if(data.length > 255){
        document.getElementById("address").innerHTML = "max length is 255 character"
    }
    else{
        document.getElementById("address").innerHTML = ""
    }
}