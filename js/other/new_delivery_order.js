function submitNewDelivary()
{
    let first_name=document.getElementById('first_name').value;
    let last_name=document.getElementById('last_name').value;
    let phone_number=document.getElementById('phone').value;

    let user = JSON.parse(window.localStorage.getItem(first_name));

    if (user == undefined || user == null) {
        alert('Does not exist in the system! For entry you must register');
    }
    else if (user.first_name == first_name && user.last_name == last_name && user.phone_number==phone_number) {
        console.log(first_name);
        document.cookie = `first_name=${first_name}; path=/`;
        document.getElementById('new_delivery_form').submit();
    }
    else {
        alert('wrong data, please try again!');
    }
}