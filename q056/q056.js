function Monster(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.info = function() {
        return this.name + "[" + hp + "/" + this.hp + "]<br><br>";
    }
}

function Player(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.info = function() {
        return this.name + "[" + hp + "/" + this.hp + "]<br><br><br>";
    }
}

var orc = new Monster("해적왕", 130, 70);
var elf = new Player("루피", 80, 40);

dw(orc.info());
dw(elf.info());

hr();
dw("전투 시작");
hr();

function getRandomAttackValue(attack){						
	attack = attack + 1;    					
	var random = Math.floor(Math.random()*attack);  			
	return random;					
}

// 해적왕 선공
var monsterD = getRandomAttackValue(orc.attack);
elf.hp -= monsterD;

// 루피 공격
var playerD = getRandomAttackValue(elf.attack);
orc.hp -= playerD;

dw("<br> <br> "+ orc.name +"이 "+ elf.name + "에게 " + monsterD + "의 피해를 입혔습니다.<br> <br>");
dw(orc.info());
dw("<br> <br> " + elf.name + "가 " + orc.name + "에게 " + playerD + "의 피해를 입혔습니다.<br> <br>");
dw(elf.info());

