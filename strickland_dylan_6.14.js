/* 
Strickland, Dylan
Assignment 6.14 javascript file
controls visibility of elements based on focus events
 */


document.getElementById("name").onfocus = function(){
    document.getElementById("lblName").style.display = "inline";
};
document.getElementById("userEmail").onfocus = function(){
    document.getElementById("lblEmail").style.display = "inline";
};

document.getElementById("profile").onfocus = function(){
    document.getElementById("lblProfile").style.display = "inline";
};

document.getElementById("name").onblur = function(){
    document.getElementById("lblName").style.display = "none";
};

document.getElementById("userEmail").onblur = function(){
    document.getElementById("lblEmail").style.display = "none";
};
document.getElementById("profile").onblur = function(){
    document.getElementById("lblProfile").style.display = "none";
};
