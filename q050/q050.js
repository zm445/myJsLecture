function Monster(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.infoScreen = function() {
        dw("[" + name + " " + hp + " " + attack + "]<br>");
    }
}

function Player(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.infoScreen = function() {
        dw("[" + name + " " + hp + " " + attack + "]<br>");
    }
}

orc = new Monster("해적왕", 120, 80);
elf = new Player("루피", 80, 40);

orc.infoScreen();
elf.infoScreen();



