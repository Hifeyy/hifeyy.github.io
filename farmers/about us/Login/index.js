
function validate() {
    var em = document.getElementById("email").value;
    var pw = document.getElementById("password").value;

    if ((em == email) && (pw == password)) {
        window.location = "";
        return false;
    }
    else {
        alert ("Login was unsuccessful, please check your username and password");
        return false;
    }

    
       
}