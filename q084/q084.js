var imgCat;
var btn;

window.onload = function() {
    imgCat = document.getElementById("cat");
    btn = document.getElementById("btn");
    btn.addEventListener("click", popup);
}

function popup() {
    imgCat.style.display = "block";
}