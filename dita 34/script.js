function validation() {

    var name = document.getElementById("name").value;
    var valid_name_regex = /^[A-Za-z]+$/;

    var username = document.getElementById("username").value;
    var valid_username_regex = /^[a-z0-9]+$/;  

    var email = document.getElementById("email").value;
    var valid_email_regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    var password = document.getElementById("password").value;
    var valid_password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/; 

    var valid = true;

    
    if (!name.match(valid_name_regex)) {
        document.getElementById("name_error").style.visibility = "visible";
        valid = false;
    } else {
        document.getElementById("name_error").style.visibility = "hidden";
    }

    
    if (!username.match(valid_username_regex)) {
        document.getElementById("username_error").style.visibility = "visible";
        valid = false;
    } else {
        document.getElementById("username_error").style.visibility = "hidden";
    }

    
    if (!email.match(valid_email_regex)) {
        document.getElementById("email_error").style.visibility = "visible";
        valid = false;
    } else {
        document.getElementById("email_error").style.visibility = "hidden";
    }

    
    if (!password.match(valid_password_regex)) {
        document.getElementById("password_error").style.visibility = "visible";
        document.getElementById("password_error").innerText = 
            "Password must contain: 1 uppercase, 1 lowercase, 1 symbol, min 6 characters";
        valid = false;
    } else {
        document.getElementById("password_error").style.visibility = "hidden";
    }

    return valid;
}
