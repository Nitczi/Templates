function email() {
    const url = new URLSearchParams(document.location.search);
    const email = url.get("email");
    
    const moddiv = document.querySelector('.go-gmail');
    moddiv.innerHTML = email;
}

function showp() {
    var pss = document.getElementById("password-box");

    if (pss.type === "password") {
        pss.type = "text";
    } else {
        pss.type = "password";
    }
    }

email()
