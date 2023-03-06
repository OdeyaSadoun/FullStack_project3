import * as  loginclient from './login.js'
import * as  signuplient from './signup.js'
import * as  manageclient from './managemaels.js'


document.getElementById('showLoginPage_btn').addEventListener('click', showLoginPage);
document.getElementById('showSignupPage_btn').addEventListener('click', showSignupPage);
// document.getElementById('login_worngChoice').addEventListener('click', showSignupPage);
// document.getElementById('signup_worngChoice').addEventListener('click', showLoginPage);
document.getElementById('button_nav_login').addEventListener('click', showLoginPage);
document.getElementById('button_nav_logout').addEventListener('click', showHomePage);
document.getElementById('button_nav_signup').addEventListener('click', showSignupPage);
document.getElementById('button_nav_menu').addEventListener('click', showMenuPage);
document.getElementById('button_nav_add_meal').addEventListener('click', showAddMealToMenuPage);
document.getElementById('button_nav_update_menu').addEventListener('click', showUpdateMealPage);



window.onload = function () {
    console.log("load page");
    showHomePage();
    console.log("after load page");

};

function hideLogin() {
    document.getElementById('login').style.display = 'none';
}

function hideSignup() {
    document.getElementById('signup').style.display = 'none';
}

function hideMenu() {
    document.getElementById('menu').style.display = 'none';
}

function hideAddMealToMenu() {
    document.getElementById('add_meal_to_menu').style.display = 'none';
}

function hideUpdateMeal() {
    document.getElementById('update_meal').style.display = 'none';
}

function hideMainPage() {
    console.log("hide home");
    document.getElementById('home').style.display = 'none';
}

function showLogin() {
    var clon = document.getElementById('login').content.cloneNode(true);
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(clon);
    document.getElementById('submitbtn_login').addEventListener('click', loginclient.submitLogin);
    document.getElementById('button_nav_login').addEventListener('click', showLoginPage);

}

function showSignup() {
    var clon = document.getElementById('signup').content.cloneNode(true);
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(clon);
    document.getElementById('submitbtn_signup').addEventListener('click', signuplient.submitSignup);
    document.getElementById('button_nav_signup').addEventListener('click', showSignupPage);
    document.getElementById('first_name').addEventListener('change', signuplient.verifyName);
    document.getElementById('last_name').addEventListener('change', signuplient.verifyName);
    document.getElementById('password_signup').addEventListener('change', signuplient.verifyPassword);
    document.getElementById('re_password').addEventListener('change', signuplient.confirmPassword);
}

function showMenu() {
    console.log('menuuu');
    var clon = document.getElementById('menu').content.cloneNode(true);
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(clon);
    document.getElementById('button_nav_menu').addEventListener('click', showMenuPage);

}

function showAddMealToMenu() {
    var clon = document.getElementById('add_meal_to_menu').content.cloneNode(true);
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(clon);
    document.getElementById('button_nav_add_meal').addEventListener('click', showAddMealToMenuPage);
    document.getElementById('submit_add_meal_btn').addEventListener('click', manageclient.addMealToMenu);

}

function showUpdateMeal() {
    var clon = document.getElementById('update_meal').content.cloneNode(true);
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(clon);
    document.getElementById('button_nav_update_menu').addEventListener('click', showUpdateMealPage);

}

function showMain() {
    document.getElementById('home').style.display = 'inline';
    document.body.removeChild(document.body.lastElementChild);
    document.getElementById('button_nav_logout').addEventListener('click', showHomePage);

}

export function showHomePage() {
    console.log("mainpage");
    document.getElementById('button_nav_login').style.display = 'inline';
    document.getElementById('button_nav_signup').style.display = 'inline';
    document.getElementById('button_nav_add_meal').style.display = 'inline';


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

export function showLoginPage() {
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

export function showSignupPage() {
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

export function showMenuPage() {
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

export function showAddMealToMenuPage() {
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

export function showUpdateMealPage() {
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