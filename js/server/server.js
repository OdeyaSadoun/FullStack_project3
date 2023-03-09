import { FXMLhttpRequest } from "../FXMLHttpRequest/FXMLHttpRequest.js";
import { db } from "../Database/database.js";

export class server {

    static my_url = 'server_fullstack3';

    static handle(FXMLhttpRequest, respons_func) {

        var resource = FXMLhttpRequest.url.substring(server.my_url.length, FXMLhttpRequest.url.length);
        console.log('requested: ', resource);

        if (FXMLhttpRequest.method === 'GET') {
            this.handle_GET(resource, FXMLhttpRequest.body, respons_func);
        }
        else if (FXMLhttpRequest.method === 'POST') {
            this.handle_POST(resource, FXMLhttpRequest.body, respons_func);
        }
        else if (FXMLhttpRequest.method === 'PUT') {
            this.handle_PUT(resource, FXMLhttpRequest.body, respons_func);
        }
        else if (FXMLhttpRequest.method === 'DELETE') {
            this.handle_DELETE(resource, FXMLhttpRequest.body, respons_func);
        }
        FXMLhttpRequest.status = 4;
    }


    static handle_GET(resource, body, respons_func) {
        if (resource === '/getAllMeals') {
            var allMeals = db.getAllMeals(body.user_id);
            if (allMeals) {
                var response = { status: 200, meals: allMeals };
                respons_func(response);
            }
            else {
                var response = { status: 404, meals: undefined };
                respons_func(response);
            }
        }
    }
    static handle_PUT(resource, body, respons_func) {
        if (resource === '/addMeal') {
            var meal = db.getMeal(body.meal.name);
            var response = {}
            // if user exists
            if (meal !== undefined) {
                console.log('meal already exists');
                response = { status: 404, meal: undefined };
                respons_func(response);
            }
            else {
                console.log('add meal to db');
                var rec_meal = body.meal
                rec_meal['user_id'] = body.user.email
                var meal_after_addition = db.addMeal(rec_meal);
                console.log(meal_after_addition);
                response = {
                    status: 200,
                    meal: { name: meal_after_addition.name, price: meal_after_addition.price, vegetarian: meal_after_addition.vegetarian, vegan: meal_after_addition.vegan, allergic: meal_after_addition.allergic }
                }
                respons_func(response);
            }
        }
        else if (resource === '/addUser') {
            var response = {}



            console.log('user does not exist, signing up');
            const user = { first_name: body.fname, last_name: body.lname, phone: body.phone, email: body.email, password: body.password };
            var returned_user = db.addUser(user);
            // if user exists
            if (!returned_user) {
                response = {
                    status: 404,
                    user: undefined
                };
            } else {
                var user_after_addition = db.getUser(body.email, body.password);
                console.log(user);
                response = {
                    status: 200,
                    user: { phone: user_after_addition.phone, first_name: user_after_addition.fname, last_name: user_after_addition.lname }
                }
            }
            respons_func(response);


            }
        }


    static handle_POST(resource, body, respons_func) {
    if (resource === '/getUser') {
        let user = db.getUser(body.email, body.password);
        let response = {};
        if (user) {
            response = { status: 200, user: { last_name: user.last_name, first_name: user.first_name, phone: user.phone } };
            respons_func(response);
        }
        else {
            let response = { status: 404, user: undefined };
            respons_func(response);
        }
    }
}
    static handle_DELETE(resource, body, respons_func) {
    if (resource === '/deleteUser') {
        let user = db.deleteUser(body.email);
        if (user) {
            response = { status: 200, user: { last_name: user.last_name, first_name: user.first_name, phone: user.phone } };
            respons_func(response);
        }
        else {
            let response = { status: 404, user: undefined };
            respons_func(response);
        }
    }
    else if (resource === '/deleteMeal') {
        let meal = db.deleteMeal(body.name);
        if (meal) {
            response = { status: 200, meal: { name: meal.name, price: meal.price, vegetarian: meal.vegetarian, vegan: meal.vegan, allergic: meal.allergic } };
            respons_func(response);
        }
        else {
            let response = { status: 404, meal: undefined };
            respons_func(response);
        }
    }
}


}