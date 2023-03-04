import * as page from "../client/pages.js"
import {FXMLhttpRequest} from '../FXMLHttpRequest/FXMLHttpRequest.js'

document.getElementById('first_name').addEventListener('change', verifyName);
document.getElementById('last_name').addEventListener('change', verifyName);
document.getElementById('password_signup').addEventListener('change', verifyPassword);
document.getElementById('re_password').addEventListener('change', confirmPassword);



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

export function submitSignup() {

    let password_signup = document.getElementById('password').value;
    let re_password_signup = document.getElementById('re_password').value;

    let fname = document.getElementById('first_name').value;
    let lname = document.getElementById('last_name').value;
    let phone_signup = document.getElementById('phone').value;
    let email_signup = document.getElementById('email').value;


    if (!password_signup || !fname || !lname || !phone_signup || !email_signup || !re_password_signup) {
        alert('Please fill in all fields for registration!');
        return false;
    }

    var req = new FXMLhttpRequest();

    req.onload = function (response) {
        console.log(response);
        if (response.status === 200) {
            //200 = ok
            var user = response.user;
            if(user != undefined || user != null){
                //there is user with the email
                alert('The user already exists in the system! You must log in')
                page.showLoginPage();
            }
            else{
                logged_user = {
                    email: email_signup,
                    password: password_signup,
                    fname: user.first_name,
                    lname: user.last_name,
                    phone: user.phone
                };
            }

            page.showLoginPage();
        }
    }

    req.open(
        'PUT',
        'server_fullstack3/addUser',
        { email: email_signup, password: password_signup, first_name: fname, last_name: lname, phone: phone_signup },
        );
    req.send();

}