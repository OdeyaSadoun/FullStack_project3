import * as  pages from './pages.js';


document.getElementById('name').addEventListener('change', verifyName);
document.getElementById('price').addEventListener('change', verifyPrice);
document.getElementById('submit_add_meal_btn').addEventListener('click', addMealToMenu);

function verifyPrice()
{
    var meal_price = document.getElementById("price").value;

    if (meal_price == "") {
        document.getElementById("message").innerHTML = "The name must be filled in";
        document.getElementById("price").style.borderColor = "red";
        return false;
    }

    if(isNaN(meal_price))
    {
        document.getElementById("message").innerHTML= "the price must be numbers"
        document.getElementById("price").style.borderColor = "red";
        return false;
    }

    if(meal_price>999)
    {
        document.getElementById("message").innerHTML= "please enter lower cost"
        document.getElementById("price").style.borderColor = "red";
        return false;
    }

    document.getElementById("name").style.borderColor = "green";
    return true;
}

function verifyName() {

    //function to verify the text fields

    var name = document.getElementById("name").value;

    //check empty first name field  
    if (name == "") {
        document.getElementById("message").innerHTML = "The name must be filled in";
        document.getElementById("name").style.borderColor = "red";
        return false;
    }

    //character data validation  
    if (!isNaN(name)) {
        document.getElementById("message").innerHTML = "Letters and characters must be entered - not numbers";
        document.getElementById("name").value = "";
        document.getElementById("name").style.borderColor = "red";
        return false;
    }

    document.getElementById("name").style.borderColor = "green";
    return true;
}

function addMealToMenu(){
    // get the params from the html file
    let name_meal= document.getElementById('name').value;
    let price_meal= document.getElementById('price').value;
    let option1_meal= document.getElementById('option1').value;
    let option2_meal= document.getElementById('option2').value;
    let option3_meal= document.getElementById('option3').value;

    // check the required fields
    if (!name_meal || !price_meal ) {
        alert('Please fill in the required fields');
        return false;
    }
    //new request
    var req = new FXMLhttpRequest();

    req.onload = function (response) {
        console.log(response);
        if (response.status === 200) {
            //200 = ok
            var meal = response.meal;
            if(meal != undefined || meal != null){
                //this meal exist in the data base
                alert('The meal already exists in the system!')
                page.addMealToMenu();
            }
            else{
                logged_meal = {
                    name: name_meal,
                    price: price_meal,
                    option1: meal.option1_meal,
                    option2: meal.option2_meal,
                    option3: meal.option3_meal
                };
            }

            page.addMealToMenu();
        }
    }

    req.open(
        'PUT',
        'server_fullstack3/addMeal',
        { name: name_meal,
            price: price_meal,
            option1: option1_meal,
            option2: option2_meal,
            option3: option3_meal},
        );
    req.send();

}

function searchMeal(){
    let name_meal= document.getElementById('name').value;
    let logged_meal = { name: "", price: "", option1: "", option2: "", option3: "" };

 
    var req = new FXMLhttpRequest();

    req.onload = function (response) {
        console.log('loaded');
        console.log(response);
        if (response.status === 200) {
            //200 = ok
            var meal = response.meal;
            logged_meal = {
                name: name_meal, 
                price: meal.price, 
                option1: meal.option1,
                 option2: meal.option2, 
                 option3: meal.option3
            };

            console.log('submitmeal');
            updateMeal(meal);
        }
        else{
            console.log('this meal is not exist');
        }
    };
    req.open(
        'POST',
        'server_fullstack3/getMeal',
        { name:name_meal });
    req.send();

}
// open the update page with the current information about the meal
function updateMeal(meal){
    pages.showUpdateSingleMealPage();

     document.getElementById('name').value= meal.name;
     document.getElementById('price').value= meal.price;
     document.getElementById('option1').value= meal.option1;
     document.getElementById('option2').value= meal.option2;
     document.getElementById('option3').value= meal.option3;



}
// delete the current meal and add the new meal
function submitMeal(){

    let name_meal= document.getElementById('name').value;
    let price_meal= document.getElementById('price').value;
    let option1_meal= document.getElementById('option1').value;
    let option2_meal= document.getElementById('option2').value;
    let option3_meal= document.getElementById('option3').value;

    //new request
    var req = new FXMLhttpRequest();

    req.onload = function (response) {
        console.log(response);
        if (response.status === 200) {
            //200 = ok  
            //change the data to the update       
                logged_meal = {
                    name: name_meal,
                    price: price_meal,
                    option1: meal.option1_meal,
                    option2: meal.option2_meal,
                    option3: meal.option3_meal
                };
            
            
            page.showMenu();
        }
        else
        {
            alert('The meal is not exists in the system!')
            pages.showMenu();
        }
    }

    req.open(
        'PUT',
        'server_fullstack3/addMeal',
        { name: name_meal,
            price: price_meal,
            option1: option1_meal,
            option2: option2_meal,
            option3: option3_meal},
        );
    req.send();

}

function viewAllMeals(){
    

    var req = new FXMLhttpRequest();

    req.onload = function (response) {
        console.log(response);
        if (response.status === 200) {
            //200 = ok
            const meals= new Array();
             meals = response.meals;
            if(meals != undefined || meals != null){
                //this meal exist in the data base
                alert('There are no meals in the system')
                page.showHomePage();
            }
            else{
                logged_meals= meals;
                document.getElementById('menu_meals').value=meals;
            }

            page.showHomePage();
        }
    }
    req.open(
        'POST',
        'server_fullstack3/getAllMeals');
    req.send();

}

function deleteMeal(){
    let name_meal =document.getElementById("name");
    var req = new FXMLhttpRequest();
    
    req.onload = function (response) {
        console.log(response);
        if (response.status === 200) {
            //200 = ok
            var meal = response.meal;
            if(meal.name===name_meal){
                 response.meal=null;
            }
            else{
                alert("the meal is not exist")
            }

            page.showHomePage();
        }
    }
    req.open(
        'POST',
        'server_fullstack3/getMeal', { name:name_meal });
    req.send();

}

/*
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

}*/


/*
function getallmeals()
{
    var req = new FXMLhttpRequest();
    req.open("GET", "meals.html");
    req.send();
    document.getElementById("all_meals").innerText= req.innerText;

}*/