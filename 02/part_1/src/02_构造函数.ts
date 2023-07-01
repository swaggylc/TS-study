class Dog {
  name: string = "小黑";
  age: number = 3;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  bark() {
    console.log(this.name, "汪汪汪~~~~~");
  }
}

const dog = new Dog('小白', 4);

console.log(dog);
