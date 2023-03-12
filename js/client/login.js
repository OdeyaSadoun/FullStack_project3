import * as page from "../client/pages.js"
import { FXMLhttpRequest } from '../FXMLHttpRequest/FXMLHttpRequest.js'

let logged_user = { email: "", password: "", fname: "", lname: "", phone: "" };

export function submitLogin() {

    //A function for logging in after entering a username and password.
    //If the user is in the DB, he goes to the main page,
    // which is the dishes of that user's restaurant.

    let email_login = document.getElementById('email_login').value;
    let password_login = document.getElementById('password_login').value;

    var req = new FXMLhttpRequest();

    req.onload = function (response) {
        if (response.status === 200) {
            var user = response.user;
            logged_user = {
                email: email_login,
                password: password_login,
                fname: user.first_name,
                lname: user.last_name,
                phone: user.phone
            };

            page.showMenuPage();
        }
        else {
            //if the user isnt exist
            alert('there is no user with this mail and password- you mast sign up');
            page.showSignupPage();
        }
    };
    req.open(
        'POST',
        'server_fullstack3/getUser',
        { email: email_login, password: password_login });
    req.send();
}

export function getLoggedUser() {
    return logged_user;
}
