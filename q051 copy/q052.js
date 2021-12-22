dw("전투시작");
br();
br();

function Monster(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.info = function() {
        return "name: " + this.name + "<br>hp: " + this.hp + "<br>attack: " + this.attack + "<br><br>";
    }
}

function Player(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.info = function() {
        return "name: " + this.name + "<br>hp: " + this.ihp + "<br>attack: " + this.attack + "<br><br>";
    }
}

var orc = new Monster("해적왕", 130, 70);
var elf = new Monster("루피", 80, 40);

dw(orc.info());
dw(elf.info());

// 해적왕 선공
elf.hp -= getRandomAttackValue(orc.attack);

// 루피 공격
orc.hp -= getRandomAttackValue(elf.attack)

dw(orc.info());
dw(elf.info());


function getRandomAttackValue(attack){						
	attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로					
	var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴					
	return random;					
}						




