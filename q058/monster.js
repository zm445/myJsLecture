function Monster(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.xp = 100;

    this.info = function() {
        return "["+ this.name + "(" + hp + "/" + this.hp + ") xp: "+ this.xp + " ]";
    }
}