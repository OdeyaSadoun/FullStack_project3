import * as  loginclient from './login.js'
import * as  signuplient from './signup.js'
import * as  manageclient from './managemaels.js'


document.getElementById('showLoginPage_btn').addEventListener('click', showLoginPage);
document.getElementById('showSignupPage_btn').addEventListener('click', showSignupPage);
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
    const login_element = document.getElementById('login_section');
    if (login_element) {
        login_element.style.display = 'none';
    }
}

function hideSignup() {
    document.getElementById('signup').style.display = 'none';
}

function hideMenu() {
    var menu = document.getElementById('menu');
    menu.classList.add('hidden');
    const mealsList = document.getElementById('meals_list');
    const mealsElems = mealsList.querySelectorAll('li');
    mealsElems.forEach(meal => {
        mealsList.removeChild(meal);
    })
}

function hideAddMealToMenu() {
    const add_elem = document.querySelector('.add_meal_div');
    if (add_elem) {
        add_elem.style.display = 'none';

    }
}

function hideUpdateMeal() {
    document.getElementById('update_meal').style.display = 'none';
}

function hideMainPage() {
    console.log("hide home page");
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
    console.log('show menu');
    var menu = document.getElementById('menu')
    menu.classList.remove('hidden');
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
    console.log("show home page");
    document.getElementById('button_nav_login').style.display = 'inline';
    document.getElementById('button_nav_signup').style.display = 'inline';
    document.getElementById('button_nav_add_meal').style.display = 'inline';

    document.getElementById('button_nav_logout').style.display = 'none';
    document.getElementById('button_nav_menu').style.display = 'none';
    document.getElementById('button_nav_add_meal').style.display = 'none';
    document.getElementById('button_nav_update_menu').style.display = 'none';

    hideLogin();
    hideSignup();
    hideMenu();
    hideAddMealToMenu();
    hideUpdateMeal();

    showMain();
}

export function showLoginPage() {
    console.log("show login page");

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
    console.log("show signup page");

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
    console.log("show menu page");

    document.getElementById('button_nav_login').style.display = 'none';
    document.getElementById('button_nav_signup').style.display = 'none';

    document.getElementById('button_nav_logout').style.display = 'inline';
    document.getElementById('button_nav_menu').style.display = 'inline';
    document.getElementById('button_nav_add_meal').style.display = 'inline';
    document.getElementById('button_nav_update_menu').style.display = 'inline';

    hideMainPage();
    hideLogin();
    hideSignup();
    hideAddMealToMenu();
    hideUpdateMeal();

    showMenu();
    manageclient.viewAllMeals();
    console.log('end show menu page');
}

export function showAddMealToMenuPage() {
    console.log("show add meal to page");

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
    hideUpdateMeal();

    showAddMealToMenu();
}

export function showUpdateMealPage() {
    console.log("show update page");

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