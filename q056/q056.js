var orc = new Monster("브론즈", 100, 100);
var elf = new Player("CARPE", 10000, 62);

dw(orc.info());
dw(elf.info());

hr();
dw("전투 시작");
hr();


let loop = true;
while(loop) {
    loop = BattleTurn();
}

function BattleTurn() {
    var monsterD = getRandomAttackValue(orc.attack);
    var playerD = getRandomAttackValue(elf.attack);

    dw(orc.info());
    dw(elf.info());
    hr();

    dw(orc.name +"가 "+ elf.name + "에게 " + monsterD + "의 피해를 입혔습니다.<br>");
    dw(elf.name + "가 " + orc.name + "에게 " + playerD + "의 피해를 입혔습니다.<br>");

    elf.hp -= monsterD;
    orc.hp -= playerD;

    dw(orc.info());
    dw(elf.info());
    hr();

    if(orc.hp <= 0 && elf.hp > 0) {
        dw("승리<br>");

        elf.xp += orc.xp;
        orc.xp = 0;
        dw(orc.info());
        dw(elf.info());
    
        return false;
    } 
    if(orc.hp <= 0 && elf.hp <= 0) {
        dw("무승부");
        return false;
    }
    if(orc.hp > 0 && elf.hp <= 0) {
        dw("패배");
        return false;
    }
    return true;
}