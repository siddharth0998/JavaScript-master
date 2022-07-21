const loginData = () => {

    var obj = {
        email: document.getElementById("form3Example3").value,
        password: document.getElementById("form3Example4").value
    }

    const fetchData = async () => {
        let data = await axios.post("http://localhost:4000/accounts/authenticate", obj);
        return data;
    }

    const setData = async () => {
        let getData = await fetchData();
        localStorage.setItem("user", JSON.stringify(getData.data));
        
        if (getData.message != undefined) {
            document.getElementById("alertMsg").style.display = "block";
            document.getElementById("alertMsg").innerHTML = "Login failed! invalid email-id or password!";
        }
        else {
            window.location.href = "/Array/DataTable/9Batch/webPage1.html"
        }
    }

    setData();




}

