var imgCat;
var btn;

var show = false;

window.onload = function() {
    imgCat = document.getElementById("cat");
    btn = document.getElementById("btn");
    btn.addEventListener("click", popup);
}

function popup() {
    if(show == false) {
        imgCat.style.display = "block";
        show = true;
    } else {
        imgCat.style.display = "none";
        show = false;
    }
}