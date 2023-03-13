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
            page.showMenuPage();
        }
    };
    req.open(
        'POST',
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
    const old_meal_name = meal.name;
    // console.log('old:' , old_meal_name);

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
    // console.log(view_meal_button);
    view_meal_button.addEventListener('click', function(){
        viewMeal(span_name_meal_in_list.value);
    });

    const update_meal_button = meal_item.getElementById('update_meal_button');
    update_meal_button.addEventListener('click',function(){
        updateMeal(old_meal_name);
    });


    const delete_meal_button = meal_item.getElementById('delete_meal_button');
    delete_meal_button.addEventListener('click',function(){
        deleteMeal(span_name_meal_in_list.value);
    });
   
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

function showOneMeal(meal){
    const mealsList = document.getElementById('meals_list');
    const mealsElems = mealsList.querySelectorAll('li');
    mealsElems.forEach(meal => {
        mealsList.removeChild(meal);
    });

    var clon = document.getElementById('meal').content.cloneNode(true);

    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(clon);
    
    document.getElementById('name_meal').innerHTML = meal.name;
    document.getElementById('price_meal').innerHTML = meal.price;
    document.getElementById('vegetarian_checkbox_meal').innerHTML = meal.vegetarian;
    document.getElementById('vegan_checkbox_meal').innerHTML = meal.vegan;
    document.getElementById('allergic_checkbox_meal').innerHTML = meal.allergic;
}

function viewMeal(name) {
    console.log('viewmeal');
    var email = getLoggedUser().email;
    var req = new FXMLhttpRequest();
    req.onload = function (response) {
        if (response.status === 200) {
            var meal = response.meal;

            console.log('rec meal: ', meal);
            showOneMeal(meal);
        }
    };
    req.open(
        'GET',
        'server_fullstack3/getMeal',
        { meal: {name: name}, user: {id: email} });
        console.log(req);
    req.send();
}

export function searchMeal(name){
    viewMeal(name);
}

function getMeal(name){
    console.log('viewmeal');
    var email = getLoggedUser().email;
    var req = new FXMLhttpRequest();
    req.onload = function (response) {
        if (response.status === 200) {
            var meal = response.meal;
            return meal;
        }
    };
    req.open(
        'GET',
        'server_fullstack3/getMeal',
        { meal: {name: name}, user: {id: email} });
        console.log(req);
    req.send();
}

function updateMeal(name) {
    console.log('update meal- client');

//const mealsList = document.getElementById('meals_list');
const mealTemplate = document.getElementById('meal-template');
    const meal_item = mealTemplate.content.cloneNode(true);    console.log(meal);
    let price = document.getElementById('price_meal_in_list').value;
    let newname = document.getElementById('name_meal_in_list').value;
    let vegetarian = document.getElementById('vegetarian_checkbox').checked;
    let vegan = document.getElementById('vegan_checkbox').checked;
    let allergic = document.getElementById('allergic_checkbox').checked;
    console.log(price,newname,vegetarian,vegan,allergic);

console.log('new name: ', newname)

    var req = new FXMLhttpRequest();

    req.onload = function (response) {
        console.log('update meal - client');
        console.log(response);
        if (response.status === 200) {
            const mealsList = document.getElementById('meals_list');
            const mealsElems = mealsList.querySelectorAll('li');
            mealsElems.forEach(meal => {
                mealsList.removeChild(meal);
            });
            page.showMenuPage();
        }
    };

    req.open(
        'PUT',
        'server_fullstack3/updateMeal',
        { meal: { oldname: name, newname: newname, price: price, vegetarian: vegetarian, vegan: vegan, allergic: allergic }, user: { email: getLoggedUser().email } });
    req.send();
}

function deleteMeal(name) {
    console.log('name- delete meal- client', name);
    var req = new FXMLhttpRequest();

    req.onload = function (response) {
        if (response.status === 200) {
            console.log('delete meal succes');
            alert('delete meal: '+ name);
            const mealsList = document.getElementById('meals_list');
            const mealsElems = mealsList.querySelectorAll('li');
            mealsElems.forEach(meal => {
                mealsList.removeChild(meal);
            });
            page.showMenuPage();
        }
    };
    req.open(
        'DELETE',
        'server_fullstack3/deleteMeal',
        { meal: {name: name}});
    req.send();
}