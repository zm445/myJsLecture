function Player(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.info = function() {
        return "[" + this.name + "(" + hp + "/" + this.hp + ")]";
    }
}