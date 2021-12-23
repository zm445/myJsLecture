let count = 0;
let resultScreen;

window.onload = function() {
    resultScreen = document.getElementById("result_screen");
}

function battle(){
   
    while(true) {
        
        if(count != 0) {
            break;
        }
        
        let resultString = "";

        if(elf.hp <= 0 && orc.hp <= 0) {      
            resultString += "무승부";
            resultString += elf.info();
            resultString += orc.info();
            br();
            count++;
            break;
        } 
        if(elf.hp <= 0) {      
            resultString += "패배";
            resultString += elf.info();
            resultString += orc.info();
            br();
            count++;
            break;
        } 
        if(orc.hp <= 0) {      
            resultString += "승리";
            resultString += orc.info();
            resultString += elf.info();
            br();
            count++;
            break;
        } 
        
        var monsterD = getRandomAttackValue(orc.attack);
        var playerD = getRandomAttackValue(elf.attack);

        resultString += orc.info();
        resultString += elf.info();
        br();

        elf.hp -= monsterD;
        resultString += orc.name +"이 "+ elf.name + "에게 " + monsterD + "의 피해를 입혔습니다.<br>";
        
        orc.hp -= playerD;
        resultString += elf.name + "가 " + orc.name + "에게 " + playerD + "의 피해를 입혔습니다.<br>";

        resultScreen.value = resultString;
    }
}

