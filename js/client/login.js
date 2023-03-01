
function submitLogin() {

    let email_login = document.getElementById('email').value;
    let password_login = document.getElementById('password').value;

    let logged_user = { email: "", password: "", fname: "", lname: "", phone: "" };


    var req = new FXMLhttpRequest();
    req.open(
        'GET',
        'server_fulstack3/submitLogin',
        { email: email_login, password: password_login },
        function (response) {
            console.log(response);
            if (response.status === 200) {
                //200 = ok
                var user = response.user;
                logged_user = {
                    email: user.email,
                    password: user.password,
                    fname: user.first_name,
                    lname: user.last_name,
                    phone: user.phone
                };

                console.log('show menu')
                showHomePage();
            }
        });
    req.send();


    // let user = JSON.parse(window.localStorage.getItem(email));

    // if (user == undefined || user == null) {
    //     alert('Does not exist in the system! For entry you must register');
    // }
    // else if (user.email == email && user.password == password) {
    //     console.log(email);
    //     document.cookie = `email=${email}; path=/`;
    //     document.getElementById('login_form').submit();
    // }
    // else {
    //     alert('wrong username or password');
    // }

}
