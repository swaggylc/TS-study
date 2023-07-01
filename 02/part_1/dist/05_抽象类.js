"use strict";
(function () {
    // abstract 关键字用于定义抽象类和其中的抽象方法。
    // 抽象类是不允许被实例化的
    // 抽象类中的抽象方法必须被子类实现
    // 抽象类中的抽象方法不能有具体的实现
    // 抽象类是专门用来被继承的类
    class Animal {
        constructor(name) {
            this.name = name;
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
