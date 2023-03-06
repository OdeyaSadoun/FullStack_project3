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

    static getAllMeals(){
        return loadMeals();
    }

    static getMeal(name){
        let allmeals = getAllMeals();
        if(allmeals){
            for(let i = 0; i < allmeals.length; i++){
                if (allmeals[i].name === name){
                    return JSON.parse(allmeals[i]);
                }
            }
            //there is no meal with this name:
            console.log("there is no meal with this name");
            return {};
        }
        else{
            return {};
        }
    }

    static getUser(email, password){
        let allusers = this.loadUsers();
        console.log( Object.keys(allusers).includes(email))
        if (Object.keys(allusers).includes(email)){
            var user = allusers[email]
            console.log(user)
            if (user.password === password){
                return user;
            }
        }
        return undefined;
    }

    static addMeal(meal){
        const ggg = { name: meal.name, price: meal.price, vegetarian: meal.vegetarian, vegan: meal.vegan, allergic: meal.allergic };
        let existmeal = this.getMeal(meal.name);
        if(existmeal){
            //already exist
            return {};
        }
        else{
            let allMeals = this.loadMeals();

            window.localStorage.setItem('meals', '{}');
        }
    }

    static addMeal(meal){
        //const meal = { name: meal.name, price: meal.price, vegetarian: meal.vegetarian, vegan: meal.vegan, allergic: meal.allergic };
        let existmeal = this.getMeal(meal.name);
        if(existmeal){
            //already exist
            return {};
        }
        else{
            let allMeals = this.loadMeals();

            window.localStorage.setItem('meals', '{}');
        }
    }

    static addUser(user){
        //const user = user;
        let exist = this.getUser(user.email, user.password);
        if(exist){
            //already exist
            return undefined;
        }
        else{
            let allUsers = this.loadUsers();
            allUsers[user.email] = user
            window.localStorage.setItem('users', JSON.stringify(allUsers));
            return user;
        }
    }
}