"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        // // 定义方法，用来获取name属性
        // getName() {
        //   return this.name;
        // }
        // // 定义方法，用来设置name属性
        // setName(name: string) {
        //   this.name = name;
        // }
        // setAge(age: number) {
        //   age >= 0 ? (this.age = age) : null;
        // }
        // ts中设置getter方法的方式
        get Name() {
            return this.name;
        }
        // ts中设置setter方法的方式
        set Name(name) {
            this.name = name;
        }
        get Age() {
            return this.age;
        }
        set Age(age) {
            age >= 0 ? (this.age = age) : null;
        }
    }
    const person = new Person("孙悟空", 18);
    /**
     * 现在的属性是在对象中设置的，属性可以任意的被修改
     *    属性可以任意被修改将会导致对象中的数据变得非常不安全
     *
     */
    //   person.name = "猪八戒";
    //   person.age = -28;
    //   person.setAge(-28);
    //   person.Name="猪八戒";
    //   console.log(person.Name);
    console.log(person);
    //  console.log(person.getName());
    //  person.setName("猪八戒");
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    console.log(b, b.test());
    class C {
        // 可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C("孙悟空", 18);
    console.log(c);
})();
