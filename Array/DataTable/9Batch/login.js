const loginData = () => {

    // var lSEmail = localStorage.getItem("email");
    // var lSPassword = localStorage.getItem("password");

    // var email = document.getElementById("form3Example3").value;
    // var password = document.getElementById("form3Example4").value;

    // if(lSEmail === email && lSPassword === password){
    //     window.location.href = "webPage1.html"
    // }
    // else{
    //     document.getElementById("alertMsg").style.display = "block";
    //     document.getElementById("alertMsg").innerHTML = "Login failed! invalid email-id or password!";
    // }
    // }



    var obj = {
        email: document.getElementById("form3Example3").value,
        password: document.getElementById("form3Example4").value
    }

    fetch("http://localhost:4000/accounts/authenticate", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(y => y.json()).then(y => {
        //console.log(y);
        localStorage.setItem("user", JSON.stringify(y));
        if (y.message != undefined) {
            document.getElementById("alertMsg").style.display = "block";
            document.getElementById("alertMsg").innerHTML = "Login failed! invalid email-id or password!";
        }
        else {
            window.location.href = "/Array/DataTable/9Batch/webPage1.html"
        }
    })

    function setCookie(cname, cvalue, exmins) {
        const d = new Date();
        d.setTime(d.getTime() + (exmins *60 *1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    function getCookie(cname) {
        // debugger;
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
    
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    
    function checkCookie() {
    
        let user = getCookie("useremail");
        if (user != "") {
            // alert("Welcome again " + user);
        } else {
            // user = prompt("Please enter your name:", "");
            user = document.getElementById("form3Example3").value;
            if (user != "" && user != null) {
                setCookie("useremail", user, 20);
            }
        }
    }

    checkCookie();
}

