var inputId;
var inputPw;
var inputPw2;
var inputM;
var inputTel;

var resultString;

window.onload = function() {
    inputId = document.getElementById("input_id");
    inputPw = document.getElementById("input_pw");
    inputPw2 = document.getElementById("input_pw2");
    inputM = document.getElementById("input_m");
    inputTel = document.getElementById("input_tel");
}

function sign_up() {

    run();

}

function exit() {
    alert("취소하기 버튼은 장식용입니다, 참고해 주세요.");
}

function sing_up_id() {
    resultString = "";
    
    resultString += "아이디: " + inputId.value + "\n";
    
}
function sing_up_pw() {
    resultString += "비번: " + inputPw.value + "\n";
}
function sing_up_pw2() {
    resultString += "확인된 비번: " + inputPw2.value + "\n";
}
function sign_up_m() {
    resultString += "이메일: " + inputM.value + "\n";
}
function sing_up_tel() {
    resultString += "전화번호: " + inputTel.value + "\n";
}

function run() {
    
    sing_up_id();
    sing_up_pw();
    sing_up_pw2();
    sign_up_m();
    sing_up_tel();
    
    alert(resultString);
}