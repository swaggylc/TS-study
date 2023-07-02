## TS学习

#### 变量声明

##### 直接声明

// *声明一个变量a,同时指定它的类型为number*

*let* a*:* *number*;

// *a的类型设置为number，在以后的使用过程中a的值只能是数字*

a = 10;

a = 33;

// *a = 'hello'; // 此行代码会报错，因为变量a的类型是number，不能赋值字符串*

*let* b*:* *string*;

b = "*hello*";

// *b = 123; // 此行代码会报错，因为变量b的类型是string，不能赋值数字*



// *ts可以编译成任意版本的js文件   默认：ts==>es3*



// *声明完变量直接赋值*

// *let c: boolean = false;*



// *如果变量的声明和赋值是同时进行的，ts可以自动对变量进行类型检测*



// *JS中的函数不考虑参数的类型和个数的*

// *但TS中的函数必须考虑参数的类型和个数,如果不一致则会报错*

// *也能指定返回值的类型*



*function* *sum*(*a**:* *number*, *b**:* *number*)*:* *number* {

 *return* a + b;

}

##### 字面量声明

// *也可以直接使用字面量进行类型声明*



*let* num*:* 10;

num = 10;



// *num=11; // 报错*



// *可以使用 | 来连接多个类型（联合类型）*

*let* c*:* *number* | *string* | *boolean*;

c = 10;

c = "*hello*";

c = *true*;



// *any类型可以赋值为任意类型,一个变量设置类型为any后相当于对该变量关闭了TS的类型检测*

// *使用TS时，不建议使用any类型*

*let* d*:* *any*; //*显式的any类型声明*



// *声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）*



*let* s*:* *string*;

s = d; //*any类型的变量可以赋值给任意变量*



// *unknown表示未知类型的值,是一个类型安全的any*

*let* e*:* *unknown*; //*unknown类型的变量不能直接赋值给其他变量*



// *类型断言，可以用来告诉解析器变量的实际类型*

s = e *as* *string*;

s = <*string*>e;



// *void用来表示空值，以函数为例，就表示没有返回值的函数*

*function* *fn*()*:* *void* {

  // *return null;   报错*

  // *return undefined;   报错*

  // *return 123;    报错*

}



// *never表示永远不会返回结果，永远没有值*

*function* *fn2*()*:* *never* {

  *throw* *new* *Error*("*报错了！*"); // *抛出异常，函数没有返回值*

}

##### 复杂数据类型的声明

// *object 表示一个js对象*

*let* obj*:* object;

obj = {};

*obj* = *function* () {};



// *{} 用来指定对象中可以包含哪些属性*

// *语法：{属性名:属性值,属性名:属性值}，在属性名后面加上?表示属性是可选的*

*let* obj2*:* { *name**:* *string*; *age**?:* *number* };

*let* b*:* { *name**:* *string*; *age**:* *number* }; //*对象b有name和age两个属性，属性值分别为string和number*



//*对象c有name属性，还可以有任意多个属性，属性名为字符串,属性值为任意类型*

*let* c*:* { *name**:* *string*; [*propName**:* *string*]*:* *any* };



// *设置函数结构的类型声明*

// *语法：(形参:类型,形参:类型...) => 返回值*

*let* *d**:* (*a**:* *number*, *b**:* *number*) *=>* *number*;

*d* = *function* (*n1**:* *number*, *n2**:* *number*) {

 *return* n1 + n2;

};



// *数组的类型声明*

// *类型[],Array<类型>*

*let* e*:* *string*[]; //*表示字符串数组*

e = ["*a*", "*b*", "*c*"];



*let* f*:* *number*[]; //*表示数值数组*

f = [1, 2, 3];



// *Array<类型>*

*let* g*:* *Array*<*number*>; //*表示数值数组*



// *元组，元组就是固定长度的数组,固定类型，固定长度*

// *语法：[类型,类型,类型]*

*let* h*:* [*string*, *string*];

h = ["*hello*", "*world*"];



// *enum 枚举*

// *语法：enum 枚举名{枚举值1=枚举值,枚举值2=枚举值...}*

*enum* Gender {

 Male,

 Female,

}



*let* i*:* { *name**:* *string*; *gender**:* 0 | 1 };

i = {

 *name*: "*孙悟空*",

 *gender*: Gender.Male,

};



// *console.log(i.gender === Gender.Male);*



// *& 表示同时*

*let* j*:* { *name**:* *string* } & { *age**:* *number* };

j = { *name*: "*孙悟空*", *age*: 18 };



// *类型的别名*

// *type myType=string*

*type* myType = 1 | 2 | 3 | 4 | 5;

*let* k*:* *myType*;

k = 1;

//*k=6;  //报错，k只能是1-5中的一个*

#### 类的简介

```js
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

```

#### 构造函数

```js
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

```

#### 继承

#### super

#### 抽象类等

#### ~~~~

