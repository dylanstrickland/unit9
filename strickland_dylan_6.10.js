/*
Strickland, Dylan
Javascript for assignment 6.10
create account creation form
 */


// checks if text input is empty, returns boolean
function isEmpty(checkValue){
    return (checkValue === "");
}


document.getElementById("submit").disabled = true;

//checks that all fields have been entered, and password fields match, then enables submit button
document.getElementById("form1").onchange = function(){
    var checkUN = isEmpty(document.getElementById("username").value);
    var checkPW1 = isEmpty(document.getElementById("pw1").value);
    var checkPW2 = (document.getElementById("pw1").value !== document.getElementById("pw2").value);
   document.getElementById("submit").disabled = (checkUN || checkPW1 || checkPW2);
};


document.getElementById("submit").onclick = function() {
    //submits form information to server
}