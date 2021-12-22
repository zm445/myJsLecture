var orc = new Monster("해적왕", 130, 70);
var elf = new Player("루피", 80, 40);

hr();
dw(orc.info());
dw(elf.info());

hr();
dw("전투 시작");
hr();

// 해적왕 선공
var monsterD = getRandomAttackValue(orc.attack);
elf.hp -= monsterD;

// 루피 공격
var playerD = getRandomAttackValue(elf.attack);
orc.hp -= playerD;

dw(orc.info());
dw(elf.info());
hr();
dw(orc.name +"이 "+ elf.name + "에게 " + monsterD + "의 피해를 입혔습니다.<br>");
hr();
dw(elf.name + "가 " + orc.name + "에게 " + playerD + "의 피해를 입혔습니다.<br>");
hr();
