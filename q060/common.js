/*
    공통함수들을 모아놓음
*/
function tv(str){    // var str; var str = "고양이";
    var screenString = screenMessageBox.value;
    screenString = screenString + str;
    screenMessageBox.value = screenString;
    // document.write(str);
}
function tvPlayer(str){    // var str; var str = "고양이";
    var screenString = screenPlayerInfo.value;
    screenString = screenString + str;
    screenPlayerInfo.value = screenString;
    // document.write(str);
}
function br(){
    document.write("<br>");
}
function hr(){
    document.write("<hr>");
}