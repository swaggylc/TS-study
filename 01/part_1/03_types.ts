// 也可以直接使用字面量进行类型声明

let num: 10;
num = 10;

// num=11; // 报错

// 可以使用 | 来连接多个类型（联合类型）
let c: number | string | boolean;
c = 10;
c = "hello";
c = true;

// any类型可以赋值为任意类型,一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
let d: any; //显式的any类型声明

// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）

let s: string;
s = d; //any类型的变量可以赋值给任意变量

// unknown表示未知类型的值,是一个类型安全的any
let e: unknown; //unknown类型的变量不能直接赋值给其他变量

// 类型断言，可以用来告诉解析器变量的实际类型
s = e as string;
s = <string>e;

// void用来表示空值，以函数为例，就表示没有返回值的函数
function fn(): void {
    // return null;     报错
    // return undefined;    报错
    // return 123;      报错
}

// never表示永远不会返回结果，永远没有值
function fn2(): never {
    throw new Error("报错了！"); // 抛出异常，函数没有返回值
}