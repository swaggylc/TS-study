"use strict";
(function () {
    // 定义类时，可以使类去实现一个接口
    // 实现接口就是使类满足接口的要求，类中必须包含接口中声明的所有属性和方法
    // 实现接口使用 implements 关键字
    // 一个类可以实现多个接口，用逗号隔开
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("大家好~");
        }
    }
    const obj = {
        name: "孙悟空",
        age: 18,
        gender: "男",
    };
    console.log(obj);
})();
