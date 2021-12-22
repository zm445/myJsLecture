function Monster(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.infoScreen = function() {
        dw("[" + name + " " + hp + " " + attack + "]<br>");
    }
}

function player(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.infoScreen = function() {
        dw("[" + name + " " + hp + " " + attack + "]<br>");
    }
}

orc = new Monster("해적왕", 120, 80);

orc.infoScreen();

elf = new player("루피", 80, 40);

elf.infoScreen();



