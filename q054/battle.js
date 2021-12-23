let resultScreen;
let resultString = "";
let count = 0;

window.onload = function() {
    resultScreen = document.getElementById("result_screen");
}

function battle(){
    
    if(count != 0) {
        resultString += "\n\nGANE OVER";
        resultScreen.value = resultString;
        return false;
    }

    if(elf.hp <= 0 && orc.hp <= 0) {      
        resultString += "무승부";
        resultString += elf.info();
        resultString += orc.info();
        count--;
        resultScreen.value = resultString;
        return false;
    } 
    if(elf.hp <= 0) {      
        resultString += "패배";
        resultString += elf.info();
        resultString += orc.info();
        count--;
        resultScreen.value = resultString;
        return false;
    } 
    if(orc.hp <= 0) {      
        resultString += "승리";
        resultString += orc.info();
        resultString += elf.info();
        count--;
        resultScreen.value = resultString;
        return false;
    } 
    
    var monsterD = getRandomAttackValue(orc.attack);
    var playerD = getRandomAttackValue(elf.attack);


    resultString += orc.info();   
    resultString += elf.info();
    resultString += "\n";

    elf.hp -= monsterD;
    resultString += orc.name +"이 "+ elf.name + "에게 " + monsterD + "의 피해를 입혔습니다.\n";
    
    orc.hp -= playerD;
    resultString += elf.name + "가 " + orc.name + "에게 " + playerD + "의 피해를 입혔습니다.\n\n";

    resultScreen.value = resultString;
        
}

