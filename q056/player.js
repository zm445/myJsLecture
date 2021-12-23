function Player(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.xp = 0;
    this.info = function() {
        return "["+ this.name + "(" + hp + "/" + this.hp + ") xp("+ this.xp + "/300)]<br>";
    }
}