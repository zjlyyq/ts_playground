// any 类型
const a = 555;
const b: any = [1, 2, 3];
let c = a + b;

// 这里的 a 和 b 被推导为隐式 any
// noImplicitAny: false
function add(a, b) {
  // 这里的 a 和 b 下方会出现浅色点状虚线
  return a + b;
}
c = add(1, 4);
console.log(c);

// boolean 类型
const b1 = true; // 类型为 布尔
const b2 = true; // 类型为 true
const b3: false = false; // 类型为 false

// number 类型
const n1 = 100;
const n2 = 200;
const n3 = 300.5; // 类型为 300.5 的 类型字面量
const n4: 3 = 3; // 类型为 3 的 类型字面量
// n4 = 1 // 不能将类型“1”分配给类型“3”

// bigint 类型
const n5 = 1000n;
const n6 = 2000n;
const n7: number = 2 ** 60; // 类型为 number 怎么没报错?

console.log(2 ** 60); // 1152921504606846976（精确打印）
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// 比较大小
console.log(2 ** 60 > Number.MAX_SAFE_INTEGER); // true（确实超过“安全”线，但值有效）

// 验证是否精确
console.log(2 ** 60 + 100 === 2 ** 60); // true（因为 +100 小于间隔 256）
console.log(2 ** 60 + 256 === 2 ** 60); // false（因为刚好达到下一个精确值 2^60+256）

// object
let o1: { b: number };
// o1 = {}  // 类型 "{}" 中缺少属性 "b"，但类型 "{ b: number; }" 中需要该属性。
// o1 = { b: 100, c: 1 }  // 对象字面量只能指定已知属性，并且“c”不在类型“{ b: number; }”中。

/**
 * 对象字面量
 * @param b 数字属性
 * @param c 字符串属性（可选）
 * @param key 任意多个数字属性（值为 boolean）
 */
const o0: object = { b: 100 };
// console.log(o0.b); // 类型“object”上不存在属性“b”。
let o2: { b: number; c?: string; [key: number]: boolean };
o2 = { b: 100, c: 'hello', 100: true, 200: false };

// 类型别名
type Age = number;
type Man = {
  // 性别
  sex: 'male';
  name: string;
  age: Age;
};

// 并集，交集
type Cat = {
  name: string;
  purrs: boolean;
};
type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type CatOrDogOrBoth = Cat | Dog; // 并集
type CatAndDog = Cat & Dog; // 交集

let catOrDogOrBoth: CatOrDogOrBoth = { name: 'Felix', purrs: true };
catOrDogOrBoth = { name: 'Fido', barks: true, wags: true };
// catOrDogOrBoth = { name: 'Felix', barks: true }; // 不能将类型“{ name: string; barks: true; }”分配给类型“CatOrDogOrBoth”。类型 "{ name: string; barks: true; }" 中缺少属性 "wags"，但类型 "Dog" 中需要该属性。
catOrDogOrBoth = { name: 'Felix', purrs: true, barks: true, wags: true };
// catOrDogOrBoth.purrs;  // 不能直接访问，因为并集类型中可能包含 Dog 类型，而 Dog 类型中没有 purrs 属性
// catOrDogOrBoth.barks;
// catOrDogOrBoth.wags;
if ('purrs' in catOrDogOrBoth) {
  catOrDogOrBoth.purrs;
}

let catAndDog: CatAndDog = { name: 'Felix', purrs: true, barks: true, wags: true };

let cat: Cat & Dog = { name: 'Felix', purrs: true, barks: true, wags: false };
cat.purrs;
cat.barks;
cat.wags;

// array 类型
const arr1: number[] = [1, 2, 3];
const arr2: (number | string)[] = [1, 'hello', 2];

const arr3 = arr2.map((item) => {
  // 类型守卫
  if (typeof item === 'number') {
    return item * 3;
  }
  return item.repeat(3);
});
console.log(arr3);

// tuple 类型: 固定长度的数组，每个元素的类型可以不同, 但是必须按顺序赋值, 必须显示定义，否则会推断出数组。
const tuple1: [number, string, boolean] = [1, 'hello', true]; //
const arr5 = [1, 'hello', true]; // 类型为 number | string | boolean[]

console.log(typeof tuple1); // object

// 元组支持可选
// 火车票价格，不同方向价格可能不同
const trainFares: [number, number?][] = [[3.75], [28.22, 30.1], [3.4, 2.8]];

let moreTrainFares: ([number] | [number, number])[] = [[3.75], [28.22, 30.1], [3.4, 2.8]];
let f1 = moreTrainFares[0][0]; // 类型为 number

let f11 = trainFares[0][0]; // 类型为 number
let f12 = trainFares[0][1]; // 类型为 number | undefined

/**
 不能将类型“[number, (number | undefined)?][]”分配给类型“([number] | [number, number])[]”。
  不能将类型“[number, (number | undefined)?]”分配给类型“[number] | [number, number]”。
    不能将类型“[number, (number | undefined)?]”分配给类型“[number, number]”。
      源不提供目标中位置 1 处所需元素的匹配项。
 */
// let moreTrainFares: ([number] | [number, number])[] = trainFares;

let anotherTrainFares: [number, (number | undefined)?][] = trainFares;

// 只读数组和元组
// 只读数组可能会有性能问题，修改的时候需要先复制，使用Immutable.js等库。

// undefined null void never

function returnsNull() {
  return null;
}
function returnsUndefined() {
  return undefined;
}
function returnsVoid() {}
function neverReturns(): never {
  throw new Error('This function never returns');
}
function e(): never {
  while (true) {
    console.log('hello world');
  }
}
class Pizza {
  addAnchovies() {
    console.log('add anchovies');
  }
}
function addDeliciousFish(pizza: Pizza) {
  pizza.addAnchovies();
}
// addDeliciousFish(null); // 类型“null”的参数不能赋给类型“Pizza”的参数。 只有 strictNullChecks 为 false时，才能赋值。

// 枚举类型
enum Lang {
  English,
  Chinese,
}
let lang: Lang = Lang.English;
lang = Lang.Chinese;
let lang_a = Lang[0];
let lang_d = Lang[4]; // 不存在，但ts允许访问
console.log(lang_d); // undefined

const enum Lang2 {
  English,
  Chinese,
}
// lang_d = Lang2[0]; // 只有使用字符串文本才能访问常数枚举成员。
lang_d = Lang2['0']; // 不存在，但ts允许访问
// lang_d = Lang2.English; // 不能将类型“Lang2”分配给类型“string”。
console.log(lang_d); // undefined
