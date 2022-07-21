const loginData = () => {

    var obj = {
        email: document.getElementById("form3Example3").value,
        password: document.getElementById("form3Example4").value
    }

    const fetchData = async () => {
        let data = await fetch("http://localhost:4000/accounts/authenticate", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        let jsonData = data.json();
        return jsonData;
    }

    const setData = async () => {
        let getData = await fetchData();
        localStorage.setItem("user", JSON.stringify(getData));
        if (getData.message != undefined) {
            document.getElementById("alertMsg").style.display = "block";
            document.getElementById("alertMsg").innerHTML = "Login failed! invalid email-id or password!";
        }
        else {
            // loadData();
            window.location.href = "/Array/DataTable/9Batch/webPage1.html";
        }
    }
    setData();

}












function setCookie(cname, cvalue, exmins) {
    const d = new Date();
    d.setTime(d.getTime() + (exmins * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
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

    } else {

        user = document.getElementById("form3Example3").value;
        if (user != "" && user != null) {
            setCookie("useremail", user, 20);
        }
    }
}

    // checkCookie();


