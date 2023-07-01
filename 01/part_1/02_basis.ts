// 声明一个变量a,同时指定它的类型为number
let a: number;
// a的类型设置为number，在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
// a = 'hello'; // 此行代码会报错，因为变量a的类型是number，不能赋值字符串
let b: string;
b = "hello";
// b = 123; // 此行代码会报错，因为变量b的类型是string，不能赋值数字

// ts可以编译成任意版本的js文件     默认：ts==>es3

// 声明完变量直接赋值
// let c: boolean = false;

// 如果变量的声明和赋值是同时进行的，ts可以自动对变量进行类型检测

// JS中的函数不考虑参数的类型和个数的
// 但TS中的函数必须考虑参数的类型和个数,如果不一致则会报错
// 也能指定返回值的类型

function sum(a: number, b: number): number {
  return a + b;
}
