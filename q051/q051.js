dw("전투시작");
br();
br();

function Monster(name, hp, attack) {
    this.name = name;
    this.hp = hp ? hp:0;
    this.attack = attack;
    this.info = function() {
        return "name: " + this.name + "<br>hp: " + this.hp + "<br>attack: " + this.attack + "<br><br>";
    }
}

function Player(name, hp, attack) {
    this.name = name;
    this.hp = hp ? hp:0;
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
elf.hp -= orc.attack;

// 루피 공격
orc.hp -= elf.attack; 

dw(orc.info());
dw(elf.info());






