(function () {
  // 定义一个表示动物的类
  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    sayHello() {
      console.log("动物在叫~");
    }
  }

  // 定义一个表示狗的类, 该类继承自 Animal
  // Animal被称为父类, Dog被称为子类
  // 用继承后, 子类将会拥有父类所有的方法和属性
  // 通过继承可以将多个类中共有的代码写在一个父类中, 这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
  class Dog extends Animal {
    run() {
      console.log(`${this.name}在跑~`);
    }
    // 在子类中可以重写父类的方法
    sayHello() {
      console.log("汪汪汪~");
    }
  }
  // 定义一个表示猫的类, 该类继承自 Animal
  class Cat extends Animal {}

  const dog = new Dog("旺财", 3);
  console.log(dog);
  dog.sayHello();
  dog.run();
})();
