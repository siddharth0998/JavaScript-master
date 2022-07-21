// ************************validation code start****************************

function resTitle(event) {
    var theEvent = event || window.event;

    var key = theEvent.keyCode || theEvent.which;

    if ((key >= 65 && key <= 90) || (key >= 97 && key <= 122)) {

    }
    else {
        theEvent.returnValue = false;
    }
    console.log(theEvent);
}

function checkTitle(event) {
    var leng = document.getElementById("form3Example0c").value.length;

    if (leng >= 1 && leng <= 5) {
        document.getElementById("title").innerHTML = ""
    }
    else {
        document.getElementById("title").innerHTML = "length should be between 1-5 character"
    }
}

function resFirstName(event) {
    var theEvent = event || window.event;

    var key = theEvent.keyCode || theEvent.which;

    if ((key >= 65 && key <= 90) || (key >= 97 && key <= 122)) {

    }
    else {
        theEvent.returnValue = false;
    }
    console.log(theEvent);
}

function checkFirstName() {
    var leng = document.getElementById("form3Example1c").value.length;

    if (leng >= 2 && leng <= 15) {
        document.getElementById("firstName").innerHTML = ""
    }
    else {
        document.getElementById("firstName").innerHTML = "length should be between 2-15 character"
    }
}

function resLastName(event) {
    var theEvent = event || window.event;

    var key = theEvent.keyCode || theEvent.which;

    if ((key >= 65 && key <= 90) || (key >= 97 && key <= 122)) {

    }
    else {
        theEvent.returnValue = false;
    }
    console.log(theEvent);
}

function checkLastName() {
    var leng = document.getElementById("form3Example2c").value.length;

    if (leng >= 2 && leng <= 15) {
        document.getElementById("lastName").innerHTML = ""
    }
    else {
        document.getElementById("lastName").innerHTML = "length should be between 2-15 character"
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

function resPassword(event) {
    var theEvent = event || window.event;
    var key = theEvent.keyCode || theEvent.which;

    if (key != 32) {

    }
    else {
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

    if (capital > 0 && small > 0 && number > 0 && special > 0 && (data.length >= 6 && data.length <= 16)) {
        document.getElementById("password").innerHTML = ""
    }
    else {
        document.getElementById("password").innerHTML = "password must contain 1 special,1 capital,1 small,1 number character and length should be between 6-16 character"
    }

}

function resConfPassword(event) {
    var theEvent = event || window.event;
    var key = theEvent.keyCode || theEvent.which;

    if (key != 32) {

    }
    else {
        theEvent.returnValue = false;
    }
}

function checkConfPassword(event) {
    var pass = document.getElementById("form3Example4c").value;
    var confPass = document.getElementById("form3Example4cd").value;
    if (pass === confPass) {
        document.getElementById("confirmPassword").innerHTML = "";
    }
    else {
        document.getElementById("confirmPassword").innerHTML = "password do not match!";
    }
}

// ****************************validation code ends*************************


// ****************************local storage code start******************************

function saveData() {

    var tit = document.getElementById("form3Example0c").value;
    var cTitle = document.getElementById("title").innerHTML;

    var fname = document.getElementById("form3Example1c").value;
    var cFName = document.getElementById("firstName").innerHTML;

    var lname = document.getElementById("form3Example2c").value;
    var cLName = document.getElementById("lastName").innerHTML;

    var em = document.getElementById("form3Example3c").value;
    var cEm = document.getElementById("email").innerHTML;

    var psw = document.getElementById("form3Example4c").value;
    var cPsw = document.getElementById("password").innerHTML;

    var conPsw = document.getElementById("form3Example4cd").value;
    var cConPsw = document.getElementById("confirmPassword").innerHTML;

    var checkBox = document.getElementById("form2Example3c");



    if ((tit != "") && (cTitle == "") && (fname != "") && (cFName == "") && (lname != "") && (cLName == "") && (em != "") && (cEm == "") && (psw != "") && (cPsw == "") && (conPsw != "") && (cConPsw == "") && (checkBox.checked == true)) {

        var obj = {
            title: tit,
            firstName: fname,
            lastName: lname,
            email: em,
            password: psw,
            confirmPassword: conPsw,
            acceptTerms: true
        }

         axios.post("http://localhost:4000/accounts/register",obj)
         .then( y => {
            window.location.href = "login.html"
         })
        
    }

}








