(function () {
  // 定义一个表示人的类
  class Person {
    /**
     * ts可以在属性前添加属性的修饰符
     * public 修饰的属性可以在任意位置访问（修改）--默认值
     * private 私有属性，私有属性只能在类内部进行访问（修改）
     * protected 受保护的属性，只能在当前类和当前类的子类中访问（修改）
     *
     * getter方法用来读取属性
     * setter方法用来设置属性
     *   它们被称为属性的存取器
     */
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
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
    set Name(name: string) {
      this.name = name;
    }
    get Age() {
      return this.age;
    }
    set Age(age: number) {
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
    protected num: number;
    constructor(num: number) {
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
    constructor(public name: string, public age: number) {}
  }
  const c = new C("孙悟空", 18);
  console.log(c);
})();
