var i;
var p;

window.onload = function() {
    i = document.getElementById("login_id");
    p = document.getElementById("login_pw");
}

function result() {
    alert("아이디는 " + i.value + "라고 입력하셨고 \n비번은 " + p.value + "라고 입력하셨습니다.");
}