<<<<<<< HEAD
import { FXMLhttpRequest } from "../fxmlhttprequest.js";
export class server{

    static name(params) {
        
    }
    handle(FXMLhttpRequest ) 
    {
        console.log(server.my_url + ' received ', FXMLhttpRequest.body, ' with method ', FXMLhttpRequest.method);
        var resource = FXMLhttpRequest.url.substring(server.my_url.length, FXMLhttpRequest.url.length)
        if (FXMLhttpRequest.method === 'GET') {
            this.handle_GET(resource, FXMLhttpRequest.body);
        }
        else if (FXMLhttpRequest.method === 'POST') {   
            this.handle_POST(resource, FXMLhttpRequest.body);
        }
        else if (FXMLhttpRequest.method === 'PUT') {
            this.handle_PUT(resource, FXMLhttpRequest.body);
        }
        else if (FXMLhttpRequest.method === 'DELETE') {
            this.handle_DELETE(resource, FXMLhttpRequest.body);
        }
        FXMLhttpRequest.status = 4;
    }
    /*
    static handle_GET(resource, body, on_ready_callback){
        
        var options = []

        
        options.push(["/SignIn", function (resource, body, on_ready_callback){
            // do this and that
            // get user 
            var user = Database.getUser(body.username, body.password)
            // if user exists
            if (user !== undefined) {
                console.log('user exists', user)

                var response = {status: 200,
                    user: user}
               on_ready_callback(response);
            }
            else {
                console.log('server: user does not exist')
                var response = {status: 404,
                    user: undefined}
                on_ready_callback(response);
            }
            // call on_ready_callback when done
            
        }]);

        
        

        options.push(["/GetTasks", function (resource, body, on_ready_callback){
            // do this and that
            // get user 
            
            // if user exists
            var Tasks = Database.getMissions(body.userId);
            if (Tasks !== undefined) {
                var tasks_list = []
                for (var i = 0; i < Tasks.length; i++){
                    tasks_list.push({title : Tasks[i].text, id : Tasks[i].id, done : Tasks[i].done});
                }
                var response = {status: 200, userId : body.userId,
                    tasks : tasks_list }
                on_ready_callback(response);
            }
            // call on_ready_callback when done
            
        }]);

        server.go_over_options(options, resource, body, on_ready_callback);
    }*/
=======
import { FXMLhttpRequest } from "../FXMLHttpRequest/FXMLHttpRequest.js";
import { db } from "../Database/database.js";

export class server {

    static my_url = 'server_fullstack3';

    static handle(FXMLhttpRequest, respons_func) {

        var resource = FXMLhttpRequest.url.substring(server.my_url.length, FXMLhttpRequest.url.length)

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
        if (resource === 'getAllMeals') {
            let allMeals = db.getAllMeals();
            if (allMeals) {
                let response = { status: 200, meals: allMeals };
                respons_func(response);
            }
            else {
                let response = { status: 404, meals: undefined };
                respons_func(response);
            }
        }
    }
    static handle_PUT(resource, body, respons_func) {
        if (resource === 'addMeal') {
            var meal = db.getMeal(body.name);
            var response = {}
            // if user exists
            if (meal !== undefined) {
                console.log('meal already exists');
                response = { status: 404, meal: undefined };
                respons_func(response);
            }
            else {
                console.log('add meal to db');
                const meal = { name: meal.name, price: meal.price, vegetarian: meal.vegetarian, vegan: meal.vegan, allergic: meal.allergic };
                db.addMeal(meal);
                var meal_after_addition = db.getMeal(body.email, body.password);
                console.log(meal);
                response = {
                    status: 200,
                    meal: { name: meal_after_addition.name, price: meal_after_addition.price, vegetarian: meal_after_addition.vegetarian, vegan: meal_after_addition.vegan, allergic: meal_after_addition.allergic }
                }
                respons_func(response);
            }
        }
        else if (resource === 'addUser') {
            var user = db.getUser(body.email, body.password);
            var response = {}
            // if user exists
            if (user !== undefined) {
                console.log('user already exists');
                response = { status: 404, user: undefined };
                respons_func(response);
            }
            else {
                console.log('user does not exist, signing up');
                const user = { first_name: body.fname, last_name: body.lname, phone: body.phone, email: body.email, password: body.password };
                db.addUser(user);
                var user_after_addition = db.getUser(body.email, body.password);
                console.log(user);
                response = {
                    status: 200,
                    user: { phone: user_after_addition.phone, first_name: user_after_addition.fname, last_name: user_after_addition.lname }
                }
                respons_func(response);
            }

        }

    }
    static handle_POST(resource, body, respons_func) {
        if (resource === 'getUser') {
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
        if (resource === 'deleteUser') {
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
        else if (resource === 'deleteMeal') {
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


>>>>>>> dfe31c9d3215c61fbb033ecc4178100ae5979cad
}