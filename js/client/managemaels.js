import { getLoggedUser } from "./login.js";
import * as page from "../client/pages.js"
import { FXMLhttpRequest } from '../FXMLHttpRequest/FXMLHttpRequest.js'

export function addMealToMenu() {
    let price = document.getElementById('price').value;
    let name = document.getElementById('name').value;
    let vegetarian = document.getElementById('option1').checked;
    let vegan = document.getElementById('option2').checked;
    let allergic = document.getElementById('option3').checked;

    var req = new FXMLhttpRequest();

    req.onload = function (response) {
        console.log('add meal - client');
        console.log(response);
        if (response.status === 200) {

        }
    };
    req.open(
        'PUT',
        'server_fullstack3/addMeal',
        { meal: { name: name, price: price, vegetarian: vegetarian, vegan: vegan, allergic: allergic }, user: { email: getLoggedUser().email } });
    req.send();

}

function addMeal(meal) {
    const mealsList = document.getElementById('meals_list');
    const mealTemplate = document.getElementById('meal-template');
    const meal_item = mealTemplate.content.cloneNode(true);
    const span_name_meal_in_list = meal_item.getElementById('name_meal_in_list');
    span_name_meal_in_list.textContent = meal.name;
    span_name_meal_in_list.value = meal.name;


    const span_price_meal_in_list = meal_item.getElementById('price_meal_in_list');
    span_price_meal_in_list.textContent = meal.price;
    span_price_meal_in_list.value = meal.price;

    const vegetarian_checkbox = meal_item.getElementById('vegetarian_checkbox');
    vegetarian_checkbox.textContent = meal.vegetarian;
    vegetarian_checkbox.checked =  meal.vegetarian;

    const vegan_checkbox = meal_item.getElementById('vegan_checkbox');
    vegan_checkbox.textContent = meal.vegan;
    vegan_checkbox.checked = meal.vegan;

    const allergic_checkbox = meal_item.getElementById('allergic_checkbox');
    allergic_checkbox.textContent = meal.allergic;
    allergic_checkbox.checked = meal.allergic;

    const view_meal_button = meal_item.getElementById('view_meal_button');


    const update_meal_button = meal_item.getElementById('update_meal_button');


    const delete_meal_button = meal_item.getElementById('delete_meal_button');

    
      
    mealsList.appendChild(meal_item);
}

export function viewAllMeals() {
    var email = getLoggedUser().email;
    var req = new FXMLhttpRequest();
    req.onload = function (response) {
        if (response.status === 200) {
            var meals = response.meals;
            console.log('rec meals: ', meals);
            console.log('meals: ', meals);
            for (const meal of meals) {
                addMeal(meal);
            }
        }
    };
    req.open(
        'GET',
        'server_fullstack3/getAllMeals',
        { user_id: email });
    req.send();

}

function viewMeal() {
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
                if (user != undefined || user != null) {
                    //there is user with the email
                    alert('The user already exists in the system! You must log in')
                }
                else {
                    addUser();
                }

                showLoginPage();
            }
        });
    req.send();

}

function updateMeal() {
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
                if (user != undefined || user != null) {
                    //there is user with the email
                    alert('The user already exists in the system! You must log in')
                }
                else {
                    addUser();
                }

                showLoginPage();
            }
        });
    req.send();

}

function deleteMeal() {
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
                if (user != undefined || user != null) {
                    //there is user with the email
                    alert('The user already exists in the system! You must log in')
                }
                else {
                    addUser();
                }

                showLoginPage();
            }
        });
    req.send();

}