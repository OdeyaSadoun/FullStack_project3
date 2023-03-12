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
document.getElementById('button_nav_search_meal').addEventListener('click', showSearchMealPage);

window.onload = function () {
    console.log("load page");
    showHomePage();
    console.log("after load page");
};


//hide:
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

function hideMainPage() {
    console.log("hide home page");
    document.getElementById('home').style.display = 'none';
}

function hideMeal() {
    console.log("hide view meal");
    var meal = document.getElementById('meal');
    if (meal) {
        document.getElementById('meal').style.display = 'none';
    }
    window.addEventListener('unload', function () {
        const templateTag = document.querySelector('#meal');
        templateTag.style.display = 'none';
    });
}

function hideSearchMeal() {
    const search_element = document.getElementById('search_meal_div');
    if (search_element) {
        search_element.style.display = 'none';
    }
    window.addEventListener('unload', function () {
        const templateTag = document.querySelector('#search_meal');
        templateTag.style.display = 'none';
    });
}

//show:
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
    var menu = document.getElementById('menu');
    menu.classList.remove('hidden');
}

function showAddMealToMenu() {
    var clon = document.getElementById('add_meal_to_menu').content.cloneNode(true);
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(clon);
    document.getElementById('button_nav_add_meal').addEventListener('click', showAddMealToMenuPage);
    document.getElementById('submit_add_meal_btn').addEventListener('click', manageclient.addMealToMenu);
}

function showMain() {
    document.getElementById('home').style.display = 'inline';
    document.body.removeChild(document.body.lastElementChild);
    document.getElementById('button_nav_logout').addEventListener('click', showHomePage);
}

function showSearchMeal() {
    var clon = document.getElementById('search_meal').content.cloneNode(true);
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(clon);
    document.getElementById('button_nav_search_meal').addEventListener('click', showSearchMealPage);
    document.getElementById('search_meal_btn').addEventListener('click', function () {
        manageclient.searchMeal(document.getElementById('search').value);
    });
}

//show pages:
export function showHomePage() {
    document.getElementById('button_nav_login').style.display = 'inline';
    document.getElementById('button_nav_signup').style.display = 'inline';
    document.getElementById('button_nav_logout').style.display = 'none';
    document.getElementById('button_nav_menu').style.display = 'none';
    document.getElementById('button_nav_add_meal').style.display = 'none';
    document.getElementById('button_nav_search_meal').style.display = 'none';

    hideLogin();
    hideSignup();
    hideMenu();
    hideAddMealToMenu();
    hideMeal();
    hideSearchMeal();
    showMain();
}

export function showLoginPage() {
    document.getElementById('button_nav_logout').style.display = 'none';
    document.getElementById('button_nav_menu').style.display = 'none';
    document.getElementById('button_nav_add_meal').style.display = 'none';
    document.getElementById('button_nav_search_meal').style.display = 'none';

    hideMainPage();
    hideSignup();
    hideMenu();
    hideAddMealToMenu();
    hideMeal();
    hideSearchMeal();
    showLogin();
}

export function showSignupPage() {
    document.getElementById('button_nav_logout').style.display = 'none';
    document.getElementById('button_nav_menu').style.display = 'none';
    document.getElementById('button_nav_add_meal').style.display = 'none';
    document.getElementById('button_nav_search_meal').style.display = 'none';

    hideMainPage();
    hideLogin();
    hideMenu();
    hideAddMealToMenu();
    hideMeal();
    hideSearchMeal();
    showSignup();
}

export function showMenuPage() {
    document.getElementById('button_nav_login').style.display = 'none';
    document.getElementById('button_nav_signup').style.display = 'none';
    document.getElementById('button_nav_logout').style.display = 'inline';
    document.getElementById('button_nav_menu').style.display = 'inline';
    document.getElementById('button_nav_add_meal').style.display = 'inline';
    document.getElementById('button_nav_search_meal').style.display = 'inline';

    hideMainPage();
    hideLogin();
    hideSignup();
    hideAddMealToMenu();
    hideMeal();
    hideSearchMeal();
    showMenu();
    manageclient.viewAllMeals();
}

export function showAddMealToMenuPage() {
    document.getElementById('button_nav_login').style.display = 'none';
    document.getElementById('button_nav_signup').style.display = 'none';
    document.getElementById('button_nav_logout').style.display = 'inline';
    document.getElementById('button_nav_menu').style.display = 'inline';
    document.getElementById('button_nav_add_meal').style.display = 'inline';
    document.getElementById('button_nav_search_meal').style.display = 'inline';


    hideMainPage();
    hideLogin();
    hideSignup();
    hideMenu();
    hideMeal();
    hideSearchMeal();
    showAddMealToMenu();
}

function showSearchMealPage() {
    hideMainPage();
    hideLogin();
    hideSignup();
    hideMenu();
    hideAddMealToMenu();
    hideMeal();
    showSearchMeal();
}