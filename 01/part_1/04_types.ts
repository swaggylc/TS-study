// object 表示一个js对象
let obj: object;
obj = {};
obj = function () {};

// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值,属性名:属性值}，在属性名后面加上?表示属性是可选的
let obj2: { name: string; age?: number };
let b: { name: string; age: number }; //对象b有name和age两个属性，属性值分别为string和number

//对象c有name属性，还可以有任意多个属性，属性名为字符串,属性值为任意类型
let c: { name: string; [propName: string]: any };

// 设置函数结构的类型声明
// 语法：(形参:类型,形参:类型...) => 返回值
let d: (a: number, b: number) => number;
d = function (n1: number, n2: number) {
  return n1 + n2;
};

// 数组的类型声明
// 类型[],Array<类型>
let e: string[]; //表示字符串数组
e = ["a", "b", "c"];

let f: number[]; //表示数值数组
f = [1, 2, 3];

// Array<类型>
let g: Array<number>; //表示数值数组

// 元组，元组就是固定长度的数组,固定类型，固定长度
// 语法：[类型,类型,类型]
let h: [string, string];
h = ["hello", "world"];

// enum 枚举
// 语法：enum 枚举名{枚举值1=枚举值,枚举值2=枚举值...}
enum Gender {
  Male,
  Female,
}

let i: { name: string; gender: 0 | 1 };
i = {
  name: "孙悟空",
  gender: Gender.Male,
};

// console.log(i.gender === Gender.Male);

// & 表示同时
let j: { name: string } & { age: number };
j = { name: "孙悟空", age: 18 };

// 类型的别名
// type myType=string
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
k = 1;
//k=6;  //报错，k只能是1-5中的一个




