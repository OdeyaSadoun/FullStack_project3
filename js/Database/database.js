export class db {

    static loadUsers() {
        let usersFromStroge = JSON.parse(window.localStorage.getItem('users'));
        if (usersFromStroge) {
            return usersFromStroge;
        }
        else {
            window.localStorage.setItem('users', '{}');
            return {};
        }
    }

    static loadMeals() {
        let mealsFromStroge = JSON.parse(window.localStorage.getItem('meals'));
        if (mealsFromStroge) {
            return mealsFromStroge;
        }
        else {
            window.localStorage.setItem('meals', '{}');
            return {};
        }
    }

    static getAllMeals(user_id) {
        var meals = db.loadMeals();
        //console.log(meals);
        var result = [];
        for(var value of Object.values(meals)){     
            console.log(value)
            if (value.user_id == user_id){
                result.push(value);
            }
        }
        return result;
    }

    static getMeal(name, id) {
        let allMeals = this.loadMeals();
        console.log(Object.keys(allMeals).includes(name))
        if (Object.keys(allMeals).includes(name)) {
            var meal = allMeals[name]
            //console.log(meal)
            if(meal.user_id === id){
                return meal;
            }
        }
        return undefined;
    }

    static getUser(email, password) {
        let allusers = this.loadUsers();
        console.log(Object.keys(allusers).includes(email))
        if (Object.keys(allusers).includes(email)) {
            var user = allusers[email]
            //console.log(user)
            if (user.password === password) {
                return user;
            }
        }
        return undefined;
    }

    static addMeal(meal) {
        let exist = this.getMeal(meal.name);
        if (exist) {
            //already exist
            return undefined;
        }
        else {
            let allMeals = this.loadMeals();
            allMeals[meal.name] = meal;
            window.localStorage.setItem('meals', JSON.stringify(allMeals));
            return meal;
        }
    }

    static addUser(user) {
        //const user = user;
        let exist = this.getUser(user.email, user.password);
        if (exist) {
            //already exist
            return undefined;
        }
        else {
            let allUsers = this.loadUsers();
            allUsers[user.email] = user
            window.localStorage.setItem('users', JSON.stringify(allUsers));
            return user;
        }
    }

    //delete
    static deleteUser(user){

        let allusers = this.loadUsers();
        delete allusers[user.email]

        window.localStorage.setItem('users', JSON.stringify(allUsers));
    }
    
    static deleteMeal(name){

        let allMeals = this.loadMeals();
        let meal = allMeals[name];
        console.log('db delete meal: ', meal);
        delete allMeals[name];

        window.localStorage.setItem('meals', JSON.stringify(allMeals));
        return meal;
    }
}
