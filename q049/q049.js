
function Cat(name, age, weight, family, color) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.family = family;
    this.color = color;
    this.crying = function() {
        dw("냐오옹");
    }
}

var kitty = new Cat();

kitty.name = "키티";
kitty.age = 1;
kitty.weight = 300;
kitty.family = "코리안숏헤어";
kitty.color = "white";

var yaongi = new Cat("나비", 2, 270, "길고양이", "red");

kitty.crying();
br();
yaongi.crying();
