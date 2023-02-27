
function showContext(element) {

    document.getElementById("home").style.display = "none";
    console.log(String(element));
    var clon = document.getElementById(String(element)).content.cloneNode(true);
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(clon);

}

