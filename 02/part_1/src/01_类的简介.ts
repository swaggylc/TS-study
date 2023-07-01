// 使用class关键字定义类
class Person {
  // 定义属性
  name: string = "孙悟空"; //实例属性，需要通过对象的实例去访问
  age: number = 18;
  readonly sex: string = "男"; //只读属性，无法修改
  static height: number = 1.88; //静态属性，通过类去访问
  // 定义方法
  sayHello() {
    console.log("hello 大家好");
  }
}

// 创建一个Person类的对象
const person = new Person();
console.log(person);
