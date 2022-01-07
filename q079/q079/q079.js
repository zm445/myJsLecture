var i;
var p;
var loginBox;

var inputId;
var inputPw;
var inputPw2;

var inputName;
var inputBirth;
var sex;
var inputEmail;
var inputPhoneNum;
var num_integer

var resultString = "";

window.onload = function() {
    i = document.getElementById("login_id");
    p = document.getElementById("login_pw");
    loginBox = document.getElementById("login");

    inputId = document.getElementById("input_id");
    inputPw = document.getElementById("input_pw");
    inputPw2 = document.getElementById("input_pw2");
    
    inputName = document.getElementById("input_name");
    inputBirth = document.getElementById("input_birth");
    sex = document.getElementById("sex-select");
    inputEmail = document.getElementById("input_email");
    inputPhoneNum = document.getElementById("input_phone_num");
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

function sign_up() {   
    
    if(sign_up_id() && sign_up_pw() && sign_up_name() && sign_up_birth() && sign_up_sex && sign_up_phone_num()){
        alert(resultString);
        alert("회원가입 성공!");
    } else {
        alert("회원가입 실패");
    }
   
}

function sign_up_id() {
    resultString = "";

    resultString += "id: "+ inputId.value + "\n";

    if(inputId.value.length != 0) {
        if(inputId.value.length >= 2 && inputId.value.length <= 6) {
            return true;
        } else {
            alert("2글자이상 6글자 이하로 입력하세요");
            return false;
        }
    } else {
        alert("아이디를 입력하세요");
        return false;
    }
}

function sign_up_pw() {
    resultString += "pw1: " + inputPw.value + "\n" + "pw2: " + inputPw2.value + "\n";

    if(inputPw.value.length != 0 || inputPw2.value.length != 0) {
        if(inputPw.value == inputPw2.value) {
            return true;
        } else {
            alert("비밀번호가 일치하지 않습니다")
            return false;
        }
    } else {
        alert("비밀번호를 입력하세요");
        return false;
    }
}

function sign_up_name() {
    resultString += "name: " + inputName.value + "\n";

    if(inputName.value.length != 0) {
        return true;
    } else {
        alert("이름을 입력하세요");
        return false;
    }
}

function sign_up_birth() {
    resultString += "birth: " + inputBirth.value + "\n";

    if(inputBirth.value.length != 0) {
        return true;
    } else {
        alert("생년월일을 선택하세요");
        return false;
    }
}

function sign_up_sex() {
    resultString += "sex: " + sex.value + "\n";

    if(sex.value.length != 0){
        return true;
    } else {
        alert("성별을 선택하세요");
        return false;
    }
}

function sign_up_phone_num() {
    resultString += "phone num: " + inputPhoneNum.value + "\n";
    
    
    if(inputPhoneNum.value.length != 0) {
        return true;
    } else {
        alert("휴대폰 번호를 입력하세요");
        return false;
    }
}








