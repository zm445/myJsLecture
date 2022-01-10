var checked;
var pop;

window.onload = function() {
    checked = document.getElementById("check");
    pop = document.getElementById("popup");
}

function checkBox() {
    if(checked.value == 'closed') {
        pop.style.width = "700px";
        pop.style.height = "700px";
        pop.style.background = "gray";
        pop.style.transitionProperty = "width, height, background";
        pop.style.transitionDuration = "2s";
    }
}