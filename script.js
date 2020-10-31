function myFunction() {
    var x = document.getElementById("headerTopnav");
    if (x.className === "navClass") {
        x.className += " responsive";
    } 
    else {
        x.className = "navClass";
        }
    }