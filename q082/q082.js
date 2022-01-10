var i;
var p;
var loginBox;

window.onload = function() {
    i = document.getElementById("login_id");
    p = document.getElementById("login_pw");
    loginBox = document.getElementById("login");
}

function result() {
    if(i.value == "cat" && p.value == "1234") {
        procLogin();
    } else {
        alert("로그인 실패");
    }
}

function procLogin() {
    loginBox.innerHTML = "<p>" + i.value + "회원님 반갑습니다.</p>";
}







