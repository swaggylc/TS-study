"use strict";
// 使用class关键字定义类
class Person {
    constructor() {
        // 定义属性
        this.name = "孙悟空"; //实例属性，需要通过对象的实例去访问
        this.age = 18;
        this.sex = "男"; //只读属性，无法修改
    }
    // 定义方法
    sayHello() {
        console.log("hello 大家好");
    }
}
Person.height = 1.88; //静态属性，通过类去访问
// 创建一个Person类的对象
const person = new Person();
console.log(person);
