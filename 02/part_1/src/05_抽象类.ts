(function () {
    // abstract 关键字用于定义抽象类和其中的抽象方法。
    // 抽象类是不允许被实例化的
    // 抽象类中的抽象方法必须被子类实现
    // 抽象类中的抽象方法不能有具体的实现
    // 抽象类是专门用来被继承的类
 abstract class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    // 定义一个抽象方法
    // 抽象方法使用 abstract 开头，没有方法体
    // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
    // 若在子类中没有重写抽象方法，则会报错，除非将子类也定义为抽象类
   abstract sayHello() : void;
  }

  class Dog extends Animal {
    sayHello(): void {
      // super.sayHello();
      console.log("汪汪汪~");
    }
  }

  const dog = new Dog("旺财");
  console.log(dog);

  dog.sayHello();
})();
