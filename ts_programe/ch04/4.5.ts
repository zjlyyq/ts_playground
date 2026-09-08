/** 
1.TypeScript 能从函数的类型签名中推导出哪些部分的类型，参数、返回值，还是二者都可以？
> A: 参数和返回值都可以。
*/

/*2. JavaScript 的 arguments 对象是类型安全的吗？如果不是，我们可以采取什么措施？
> 结论：不安全。 原因有两点：
> 1. 类型是 any：在 TypeScript 中，arguments 的类型被定义为 IArguments，它本质上是一个类数组（array-like），其元素类型是 any。这意味着你可以对 arguments[0] 做任何操作（比如当成数字去加减，当成字符串去切片），TypeScript 完全不会检查，因此丧失了类型保护。
> 2. 脱离函数签名：arguments 不受函数定义时参数类型的约束。即使你的函数签名规定只接收两个 number，调用者依然可以传入三个 string 并通过 arguments 获取，而 TypeScript 编译器对此无法在编译时报错（因为 arguments 是运行时动态的）。
> 3. 解决方法：
> 3.1. 使用剩余参数（...args）来代替 arguments。
> 3.2. 使用类型断言（as T[]）来指定 arguments 的类型。
*/
function safe(...args: string[]) {
  // args 是真正的数组，且类型为 string[]
  // TypeScript 会保证传入的每个参数都是 string
  console.log(args[0].toUpperCase()); // 完全类型安全
}
safe('hello'); // 正确
// safe(123); // 编译时报错：Argument of type 'number' is not assignable to parameter of type 'string'.

/**
3. 假如你想预定立即开始的旅行。更新本章前面重载的 reserve 函数（见 4.1.9 节），添加第三个调用签名。这个签名只有目的地，没有开始日期。更新 reserve 的实现，支持这个新增的签名。
*/
type Reserve2 = {
  (destination: string): void;
  (from: Date, destination: string): void;
  (from: Date, to: Date, destination: string): void;
};

let reserve2: Reserve2 = (
  fromOrDestination: Date | string,
  to?: Date | string,
  destination?: string
) => {
  console.log(fromOrDestination, to, destination);
};

let r2 = reserve2('New York');
r2 = reserve2(new Date(), 'New York');
r2 = reserve2(new Date(), new Date(), 'New York');

/**
/*
4. （有难度）更新本章前面实现的 call 函数（使用受限的多态模拟变长参数），让它只支持第二个参数为字符串的函数。如果传入除此以外的函数，在编译时报错。
function fill(length: number, value: string): string[] {
  return Array(length).fill(value);
}

function mycall2<T extends unknown[],  R>(f: (...args: T) => R, ...args: T): R {
  return f(...args);
}
*/

/**
 * 只支持第二个参数为字符串的函数
 */
function mycall3<T extends unknown[], R>(
  f: (p1: any, p2: string, ...args: T) => R,
  p1: any,
  p2: string,
  ...args: T
): R {
  return f(p1, p2, ...args);
}
function mycall4<T extends [unknown, string, ...unknown[]], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args);
}

function fillNumArr(length: number, value: number): number[] {
  return Array(length).fill(value);
}
function fillStrArr(length: number, value: string): string[] {
  return Array(length).fill(value);
}

/**
 mycall3(fillNumArr, 3, 1);
 类型“(length: number, value: number) => number[]”的参数不能赋给类型“(p1: any, p2: string) => number[]”的参数。
  参数“value”和“p2” 的类型不兼容。
    不能将类型“string”分配给类型“number”。
 */
// mycall3(fillNumArr, 3, 1);
/**
 mycall4(fillNumArr, 3, 1);
 类型“(length: number, value: number) => number[]”的参数不能赋给类型“(args_0: unknown, args_1: string, ...args: unknown[]) => number[]”的参数。
  参数“length”和“args_0” 的类型不兼容。
    不能将类型“unknown”分配给类型“number”。
 */
// mycall4(fillNumArr, 3, 1);
mycall3(fillStrArr, 3, 'a');
mycall4(fillStrArr, 3, 'a');

/*
5. 实现一个类型安全的小型断言库 is。先草拟类型。实现之后，可以像下面这样使用：
```ts
// 字符串与字符串比较
is('string', 'otherstring') // false
// 布尔值与布尔值比较
is(true, false) // false
// 数字与数字比较
is(42, 42) // true
// 比较两个不同类型的值应该抛出编译时错误
is(10, 'foo') // Error TS2345: Argument of type '"foo"' is not assignable to parameter of type 'number'.
// （有难度）可以传入任意个参数
is([1], [1, 2], [1, 2, 3]) // false
```
*/

type Is = {
  <T>(a: T, b: T, ...args: T[]): boolean | Error;
};

const is: Is = (a, b, ...args) => {
  if (typeof a === 'string' || typeof a === 'number' || typeof a === 'boolean') {
    return a === b;
  } else if (typeof a === 'object') {
    if (Array.isArray(a)) {
      if (!Array.isArray(b)) {
        return false;
      }
      if (a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        let isEqual = is(a[i], b[i]);
        if (!isEqual) {
          return false;
        }
      }
    }
    for (const key in a) {
      let isEqual = is(a[key], b[key]);
      if (!isEqual) {
        return false;
      }
    }
  }
  for (const arg of args) {
    let isEqual = is(a, arg);
    if (!isEqual) {
      return false;
    }
  }
  return true;
}
console.log(is('string', 'otherstring')); // false
console.log(is(true, false)); // false
console.log(is(42, 42)); // true
// console.log(is(10, 'foo')); // Error TS2345: Argument of type '"foo"' is not assignable to parameter of type 'number'.
console.log(is([1], {a: 1}, [1, 2, 3])); // false
console.log(is([1, 2, 3], [1, 2, 3])); // true

/**
标准答案
function is<T>(a: T, ...b: [T, ...T[]]): boolean {
  return b.every(_ => _ === a)
}
*/

