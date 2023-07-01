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
        constructor(name, age) {
            // 如果在子类中写了构造函数，在子类的构造函数中必须对父类的构造函数进行调用
            // super 就表示父类
            super(name);
            this.age = age;
        }
        sayHello() {
            // super.sayHello();
            console.log("汪汪汪~");
        }
    }
    const dog = new Dog("旺财", 3);
    console.log(dog);
    dog.sayHello();
})();
