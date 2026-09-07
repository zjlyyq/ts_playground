function squareOf(x: number): number {
  return x * x;
}

// 演示 Array、Function、Constructor 类型可以传入 Object 入参的函数
// 在 TypeScript 中，object 类型表示非原始类型，Array、Function、Class 实例都兼容 object

// 接受 object 参数的函数
function processObject(obj: object): void {
  console.log(`类型: ${typeof obj}, 值:`, obj);
}

// 示例 1: Array 传入 object 参数
const arr: number[] = [1, 2, 3];
processObject(arr); // ✅ Array 是 object 的子类型

// 示例 2: Function 传入 object 参数
const fn: () => void = () => console.log('hello');
processObject(fn); // ✅ Function 是 object 的子类型

// 示例 3: Constructor (Class 实例) 传入 object 参数
class Person {
  constructor(
    public name: string,
    public age: number
  ) {}
}
const person = new Person('Alice', 30);
processObject(person); // ✅ Class 实例是 object 的子类型

// 示例 4: 元组 (Tuple) 传入 object 参数
const tuple: [string, number] = ['Alice', 30];
processObject(tuple); // ✅ 元组是 Array 的特殊形式，也是 object 的子类型

// 示例 5: 普通对象
const obj = { x: 10, y: 20 };
processObject(obj); // ✅ 普通对象

// 验证 object 类型不接受原始类型
// processObject(123);      // ❌ Error: number 不是 object
// processObject('hello');  // ❌ Error: string 不是 object
// processObject(true);     // ❌ Error: boolean 不是 object
