"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("动物在叫~");
        }
    }
    class Dog extends Animal {
        sayHello() {
            // super.sayHello();
            console.log("汪汪汪~");
        }
    }
    const dog = new Dog("旺财");
    console.log(dog);
    dog.sayHello();
})();
