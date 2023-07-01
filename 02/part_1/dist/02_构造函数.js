"use strict";
class Dog {
    constructor(name, age) {
        this.name = "小黑";
        this.age = 3;
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this.name, "汪汪汪~~~~~");
    }
}
const dog = new Dog('小白', 4);
console.log(dog);
