var orc = new Monster("롤 대리기사", 100, 100);
var elf = new Player("페이커", 1000, 150);

var resultScreen;
var resultString = "";

resultString += orc.info(); 
resultString += "\n";
resultString += elf.info();

resultString += "전투 시작";

window.onload = function() {
    
    resultScreen = document.getElementById("result_screen");
    
    let loop = true;
    while(loop) {
        loop = BattleTurn();
    }
}

function BattleTurn() {
    var monsterD = getRandomAttackValue(orc.attack);
    var playerD = getRandomAttackValue(elf.attack);
    
    resultString += orc.info();
    resultString += elf.info();
    resultString += "\n";
    
    resultString += orc.name +"가 "+ elf.name + "에게 " + monsterD + "의 피해를 입혔습니다.\n";
    resultString += elf.name + "가 " + orc.name + "에게 " + playerD + "의 피해를 입혔습니다.\n\n";
    
    elf.hp -= monsterD;
    orc.hp -= playerD;
    
    resultString += orc.info();
    resultString += elf.info();
    resultString += "\n";
    
    if(orc.hp <= 0 && elf.hp > 0) {
        resultString += "페이커 승리\n[2부리그 출신 대리기사, 현직 프로게이머 페이커 선수에게 경험치 100을 주고 사망]\n\n";
        
        elf.xp += orc.xp;
        orc.xp = 0;
        resultString += orc.info();
        resultString += elf.info();
        
        resultScreen.value = resultString;

        return false;
    } 
    if(orc.hp <= 0 && elf.hp <= 0) {
        resultString += "무승부";
        resultScreen.value = resultString;
        return false;
    }
    if(orc.hp > 0 && elf.hp <= 0) {
        resultString += "페이커 패배";
        resultScreen.value = resultString;
        return false;
    }
    resultScreen.value = resultString;
    return true;
}

