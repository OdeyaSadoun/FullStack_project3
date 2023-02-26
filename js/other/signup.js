
function verifyPassword() {

    var pw = document.getElementById('password').value;

    //check empty password field  
    if (pw == "") {
        document.getElementById("message").innerHTML = "No password was entered - must be entered";
        document.getElementById("password").style.borderColor = "red";
        return false;
    }

    //minimum password length validation  
    else if (pw.length < 8) {
        document.getElementById("message").innerHTML = "The length of the password must contain at least 8 characters";
        document.getElementById("password").style.borderColor = "red";
        return false;
    }

    //maximum length of password validation  
    else if (pw.length > 15) {
        document.getElementById("message").innerHTML = "The length of the password can contain no more than 15 characters";
        document.getElementById("password").style.borderColor = "red";
        return false;
    }

    else {
        document.getElementById("message").innerHTML = "The password is correct :)";
        document.getElementById("password").style.borderColor = "green";
    }

    return true;
}

function verifyName() {

    //function to verify the text fields

    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;

    //check empty first name field  
    if (fname == "") {
        document.getElementById("message").innerHTML = "The first name must be filled in";
        document.getElementById("first_name").style.borderColor = "red";
        return false;
    }

    //character data validation  
    if (!isNaN(fname)) {
        document.getElementById("message").innerHTML = "Letters and characters must be entered - not numbers";
        document.getElementById("first_name").value = "";
        document.getElementById("first_name").style.borderColor = "red";
        return false;
    }

    document.getElementById("first_name").style.borderColor = "green";

    //character data validation  
    if (!isNaN(lname)) {
        document.getElementById("message").innerHTML = "Letters and characters must be entered - not numbers";
        document.getElementById("last_name").value = "";
        document.getElementById("last_name").style.borderColor = "red";
        return false;
    }

    document.getElementById("last_name").style.borderColor = "green";
    return true;
}


function confirmPassword() {
    //function to confirm the password
    var pw1 = document.getElementById("password").value;
    var pw2 = document.getElementById("re_password").value;

    if (pw1 !== pw2 || !verifyPassword()) {
        document.getElementById("message").innerHTML = "The password and password verification are not the same - try again";
        document.getElementById("re_password").value = "";
        document.getElementById("re_password").style.borderColor = "red";
        return false;
    }
    else {
        document.getElementById("message").innerHTML = "Wonderful!!!";
        document.getElementById("re_password").style.borderColor = "green";
        return true;
    }
}


function submitReg() {

    let password = document.getElementById('password').value;
    let re_password = document.getElementById('re_password').value;

    let fname = document.getElementById('first_name').value;
    let lname = document.getElementById('last_name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    let userFromStroge = JSON.parse(window.localStorage.getItem(email));

    if (userFromStroge != undefined || userFromStroge != null) {
        alert('The user already exists in the system! You must log in')
        return false;
    }

    if (!password || !fname || !lname || !phone || !email || !re_password) {
        alert('Please fill in all fields for registration!');
        return false;
    }
    else {

        let score = 0;
        const enterGameDate = new Date();
        let actions = [{ time: enterGameDate.toString(), action: "registration" }];
        let cnt = 1;

        const user = { name: fname + " " + lname, phone: phone, email: email, password: password, score: score, actions: actions, counter: cnt };
        console.log(user);
        window.localStorage.setItem(email, JSON.stringify(user));
        document.cookie = `email=${email}; path=/`;

        document.getElementById('reg_form').submit();
    }

}