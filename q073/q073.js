var i;
var p;

window.onload = function() {
    i = document.getElementById("login_id");
    p = document.getElementById("login_pw");
}

function result() {
    if(i.value == "cat" && p.value == "1234") {
        alert("로그인 성공"); 
    } else {
        alert("로그인 실패");
    }
}