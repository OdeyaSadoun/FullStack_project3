import { getLoggedUser } from "./login";

export function addMealToMenu(){
    var req = new FXMLhttpRequest();
    req.open(
        'PUT',
        'server_fulstack3/addMeal',
        {meal : {name:name} , user: {email : getLoggedUser().email }},
        function (response) {
            console.log(response);
            if (response.status === 200) {
                //200 = ok
                var user = response.user;
                if(user != undefined || user != null){
                    //there is user with the email
                    alert('The user already exists in the system! You must log in')
                }
                else{
                    addUser();
                }

                showLoginPage();
            }
        });
    req.send();

}

function searchMeal(){
    var req = new FXMLhttpRequest();
    req.open(
        'GET',
        'server_fulstack3/submitSignup',
        { email: email_signup, password: password_signup, first_name: fname, last_name: lname, phone: phone_signup },
        function (response) {
            console.log(response);
            if (response.status === 200) {
                //200 = ok
                var user = response.user;
                if(user != undefined || user != null){
                    //there is user with the email
                    alert('The user already exists in the system! You must log in')
                }
                else{
                    addUser();
                }

                showLoginPage();
            }
        });
    req.send();

}

function viewAllMeals(){
    var req = new FXMLhttpRequest();
    req.open(
        'PUT',
        'server_fulstack3/submitSignup',
        { email: email_signup, password: password_signup, first_name: fname, last_name: lname, phone: phone_signup },
        function (response) {
            console.log(response);
            if (response.status === 200) {
                //200 = ok
                var user = response.user;
                if(user != undefined || user != null){
                    //there is user with the email
                    alert('The user already exists in the system! You must log in')
                }
                else{
                    addUser();
                }

                showLoginPage();
            }
        });
    req.send();

}

function viewMeal(){
    var req = new FXMLhttpRequest();
    req.open(
        'PUT',
        'server_fulstack3/submitSignup',
        { email: email_signup, password: password_signup, first_name: fname, last_name: lname, phone: phone_signup },
        function (response) {
            console.log(response);
            if (response.status === 200) {
                //200 = ok
                var user = response.user;
                if(user != undefined || user != null){
                    //there is user with the email
                    alert('The user already exists in the system! You must log in')
                }
                else{
                    addUser();
                }

                showLoginPage();
            }
        });
    req.send();

}

function updateMeal(){
    var req = new FXMLhttpRequest();
    req.open(
        'PUT',
        'server_fulstack3/submitSignup',
        { email: email_signup, password: password_signup, first_name: fname, last_name: lname, phone: phone_signup },
        function (response) {
            console.log(response);
            if (response.status === 200) {
                //200 = ok
                var user = response.user;
                if(user != undefined || user != null){
                    //there is user with the email
                    alert('The user already exists in the system! You must log in')
                }
                else{
                    addUser();
                }

                showLoginPage();
            }
        });
    req.send();

}

function deleteMeal(){
    var req = new FXMLhttpRequest();
    req.open(
        'PUT',
        'server_fulstack3/submitSignup',
        { email: email_signup, password: password_signup, first_name: fname, last_name: lname, phone: phone_signup },
        function (response) {
            console.log(response);
            if (response.status === 200) {
                //200 = ok
                var user = response.user;
                if(user != undefined || user != null){
                    //there is user with the email
                    alert('The user already exists in the system! You must log in')
                }
                else{
                    addUser();
                }

                showLoginPage();
            }
        });
    req.send();

}