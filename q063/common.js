/*
    공통함수들을 모아놓음
*/
function tv(str){    
    var screenString = screenMessageBox.value;
    screenString = screenString + str;
    screenMessageBox.value = screenString;
}
function tvPlayer(str){   
    screenPlayerInfo.value = str;
}
function tvMonster(str){  
    screenMonsterInfo.value = str;
}

function tvTurn(str){    
    screenTurn.value = str;
}

function br(){
    document.write("<br>");
}
function hr(){
    document.write("<hr>");
}