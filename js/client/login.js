import * as page from "../client/pages.js"
import {FXMLhttpRequest} from '../FXMLHttpRequest/FXMLHttpRequest.js'


export function submitLogin() {

    let email_login = document.getElementById('email_login').value;
    let password_login = document.getElementById('password_login').value;

    let logged_user = { email: "", password: "", fname: "", lname: "", phone: "" };

 
    var req = new FXMLhttpRequest();

    req.onload = function (response) {
        console.log('login- go to server');
        console.log(response);
        if (response.status === 200) {
            //200 = ok
            var user = response.user;
            logged_user = {
                email: email_login,
                password: password_login,
                fname: user.first_name,
                lname: user.last_name,
                phone: user.phone
            };

            console.log('submitlogin');
            page.showMenuPage();
        }
    };
    req.open(
        'POST',
        'server_fullstack3/getUser',
        { email: email_login, password: password_login });
    req.send();


}
