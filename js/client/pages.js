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

function showLogin() {
    var clon = document.getElementById('login').content.cloneNode(true);
    document.body.appendChild(clon);
}

function showSignup() {
    var clon = document.getElementById('signup').content.cloneNode(true);
    document.body.appendChild(clon);
}

function showMenu() {
    var clon = document.getElementById('menu').content.cloneNode(true);
    document.body.appendChild(clon);
}

function showAddMealToMenu() {
    var clon = document.getElementById('add_meal_to_menu').content.cloneNode(true);
    document.body.appendChild(clon);
}

function showUpdateMeal() {
    var clon = document.getElementById('update_meal').content.cloneNode(true);
    document.body.appendChild(clon);
}

