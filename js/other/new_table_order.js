function submitNewOrder() {

    let email = document.getElementById('email').value;
    let guests = document.getElementById('guests').value;

    let user = JSON.parse(window.localStorage.getItem(email));

    if (user == undefined || user == null) {
        alert('Does not exist in the system! For entry you must register');
    }
    else if (user.email == email && guests >=2) {
        console.log(email);
        document.cookie = `email=${email}; path=/`;
        document.getElementById('new_table_form').submit();
    }
    else {
        alert('cannot order under 2 guests');
    }

}