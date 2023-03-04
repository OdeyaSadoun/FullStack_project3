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
}