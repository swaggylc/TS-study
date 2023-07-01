class Dog {
  name: string = "小黑";
  age: number = 3;
  constructor(name: string, age: number) {
    // 在实例方法中，this就表示当前的实例
    // 在构造函数中当前对象就是当前新建的那个对象
    // 可以通过this向新建的对象中添加属性
    this.name = name;
    this.age = age;
  }
  bark() {
    console.log(this.name, "汪汪汪~~~~~");
  }
}

const dog = new Dog('小白', 4);

console.log(dog);
