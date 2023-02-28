window.onload = function () {
    console.log("load page");
    showHomePage();
    console.log("after load page");

};

function hideLogin(){
    document.getElementById('login').style.display = 'none';
}

function hideSignup(){
    document.getElementById('signup').style.display = 'none';
}

function hideMenu(){
    document.getElementById('menu').style.display = 'none';
}

function hideAddMealToMenu(){
    document.getElementById('add_meal_to_menu').style.display = 'none';
}

function hideUpdateMeal(){
    document.getElementById('update_meal').style.display = 'none';
}

function hideMainPage(){
    console.log("hide home");
    document.getElementById('home').style.display = 'none';
}

function showLogin() {
    var clon = document.getElementById('login').content.cloneNode(true);
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(clon);
}

function showSignup() {
    var clon = document.getElementById('signup').content.cloneNode(true);
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(clon);
}

function showMenu() {
    console.log('menuuu');
    var clon = document.getElementById('menu').content.cloneNode(true);
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(clon);
}

function showAddMealToMenu() {
    var clon = document.getElementById('add_meal_to_menu').content.cloneNode(true);
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(clon);
}

function showUpdateMeal() {
    var clon = document.getElementById('update_meal').content.cloneNode(true);
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(clon);
}

function showMain(){
    document.getElementById('home').style.display = 'inline';
    document.body.removeChild(document.body.lastElementChild);
}

function showHomePage(){
    console.log("mainpage");
    document.getElementById('button_nav_login').style.display = 'inline';
    document.getElementById('button_nav_signup').style.display = 'inline';


    document.getElementById('button_nav_logout').style.display = 'none';
    document.getElementById('button_nav_menu').style.display = 'none';
    // document.getElementById('button_nav_add_meal').style.display = 'none';
    document.getElementById('button_nav_update_menu').style.display = 'none';

    hideLogin();
    hideSignup();
    hideMenu();
    hideAddMealToMenu();
    hideUpdateMeal();

    showMain();
}

function showLoginPage(){
    console.log("loginpage");

    document.getElementById('button_nav_logout').style.display = 'none';
    document.getElementById('button_nav_menu').style.display = 'none';
    document.getElementById('button_nav_add_meal').style.display = 'none';
    document.getElementById('button_nav_update_menu').style.display = 'none';

    hideMainPage();
    hideSignup();
    hideMenu();
    hideAddMealToMenu();
    hideUpdateMeal();

    showLogin();
}

function showSignupPage(){
    console.log("signuppage");

    document.getElementById('button_nav_logout').style.display = 'none';
    document.getElementById('button_nav_menu').style.display = 'none';
    document.getElementById('button_nav_add_meal').style.display = 'none';
    document.getElementById('button_nav_update_menu').style.display = 'none';

    hideMainPage();
    hideLogin();
    hideMenu();
    hideAddMealToMenu();
    hideUpdateMeal();

    showSignup();
}

function showMenuPage(){
    console.log("menupage");

    document.getElementById('button_nav_login').style.display = 'none';
    document.getElementById('button_nav_signup').style.display = 'none';

    console.log('none');

    document.getElementById('button_nav_logout').style.display = 'inline';
    document.getElementById('button_nav_menu').style.display = 'inline';
    document.getElementById('button_nav_add_meal').style.display = 'inline';
    document.getElementById('button_nav_update_menu').style.display = 'inline';
    console.log('display');

    hideMainPage();
    hideLogin();
    hideSignup();
    hideAddMealToMenu();
    hideUpdateMeal();

    showMenu();
    console.log('end menu');
}

function showAddMealToMenuPage(){
    console.log("addmealpage");

    document.getElementById('button_nav_login').style.display = 'none';
    document.getElementById('button_nav_signup').style.display = 'none';


    document.getElementById('button_nav_logout').style.display = 'inline';
    document.getElementById('button_nav_menu').style.display = 'inline';
    document.getElementById('button_nav_add_meal').style.display = 'inline';
    document.getElementById('button_nav_update_menu').style.display = 'inline';

    console.log('displaaaaaaayyyy');
    hideMainPage();
    hideLogin();
    hideSignup();
    hideMenu();
    hideUpdateMeal();

    showAddMealToMenu();
}

function showUpdateMealPage(){
    console.log("signuppage");

    document.getElementById('button_nav_login').style.display = 'none';
    document.getElementById('button_nav_signup').style.display = 'none';


    document.getElementById('button_nav_logout').style.display = 'inline';
    document.getElementById('button_nav_menu').style.display = 'inline';
    document.getElementById('button_nav_add_meal').style.display = 'inline';
    document.getElementById('button_nav_update_menu').style.display = 'inline';

    hideMainPage();
    hideLogin();
    hideSignup();
    hideMenu();
    hideAddMealToMenu();

    showUpdateMeal();
}


