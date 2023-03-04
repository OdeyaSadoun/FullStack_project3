export class Database {
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

    static getUser(email){
        let allusers = this.loadUsers;
        if(allusers){
            for(let i = 0; i < allusers.length; i++){
                if (allusers[i].email === email){
                    return JSON.parse(allusers[i]);
                }
            }
            //there is no meal with this name:
            console.log("there is no user with this email");
            return {};
        }
        else{
            return {};
        }
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
}