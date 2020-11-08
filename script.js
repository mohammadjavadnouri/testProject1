function respMenuFunc() {
    var x = document.getElementById("headerTopnav");
    if (x.className === "nav") {
        x.className += " responsive";
    } 
    else {
        x.className = "nav";
        }
    }