function info(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.infoScreen = function() {
        dw("[" + name + " " + hp + " " + attack + "]<br>");
    }
}


orc = new info("해적왕", 120, 80);

orc.infoScreen();

elf = new info("루피", 80, 40);

elf.infoScreen();



