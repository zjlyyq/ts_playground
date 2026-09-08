// =============================================
// 情况 1：泛型在调用签名内部（完整写法，大括号）
// 绑定时机：每次调用 filter1 时动态绑定 T
// 特点：同一个变量，每次调用可以处理不同类型
// =============================================
type AnnotatedFilter1 = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}

const filter1: AnnotatedFilter1 = (arr, fn) => arr.filter(fn);

// 调用时动态绑定：本次 T 是 number
const res1_number = filter1([1, 2, 3, 4], x => x > 2);
// 调用时动态绑定：本次 T 是 string（与上次完全独立）
const res1_string = filter1(['a', 'b', 'c'], s => s === 'b');

console.log('情况1:', res1_number, res1_string); // [3,4] ['b']


// =============================================
// 情况 2：泛型在类型别名 Filter2<T> 上（完整写法，大括号）
// 绑定时机：声明变量（添加 :Filter2<number>）时锁定 T
// 特点：一旦锁定为 number，就永远只能处理 number[]
// =============================================
type AnnotatedFilter2<T> = {
    (array: T[], f: (item: T) => boolean): T[]
}

// 声明时锁死 T 为 number
const filter22: AnnotatedFilter2<number> = (arr, fn) => arr.filter(fn);

const res2 = filter22([10, 20, 30], x => x > 15); // ✅ 只能是 number[]
// const res2_error = filter2(['a', 'b'], s => s === 'a'); // ❌ 若取消注释会报错

console.log('情况2:', res2); // [20, 30]


// =============================================
// 情况 3：泛型在调用签名内部（简写箭头函数，无大括号）
// 绑定时机：同情况1，每次调用 filter3 时动态绑定 T
// 特点：写法更简洁，但泛型行为与情况1完全一致
// =============================================
type AnnotatedFilter3 = <T>(array: T[], f: (item: T) => boolean) => T[]

const filter3: AnnotatedFilter3 = (arr, fn) => arr.filter(fn);

const res3_number = filter3([1, 2], n => n === 1); // 本次 T 是 number
const res3_boolean = filter3([true, false], b => b); // 本次 T 是 boolean

console.log('情况3:', res3_number, res3_boolean); // [1] [true]


// =============================================
// 情况 4：泛型在类型别名 Filter4<T> 上（简写箭头函数，无大括号）
// 绑定时机：同情况2，声明变量（:Filter4<string>）时锁定 T
// 特点：一旦锁定为 string，就永远只能处理 string[]
// =============================================
type AnnotatedFilter4<T> = (array: T[], f: (item: T) => boolean) => T[]

// 声明时锁死 T 为 string
const filter4: AnnotatedFilter4<string> = (arr, fn) => arr.filter(fn);

const res4 = filter4(['x', 'y', 'z'], s => s === 'x'); // ✅ 只能是 string[]
// const res4_error = filter4([1, 2, 3], n => n > 0); // ❌ 若取消注释会报错

console.log('情况4:', res4); // ['x']


// =============================================
// 情况 5：具名函数声明（function 关键字）
// 绑定时机：同情况1和3，每次调用 filter5 时动态绑定 T
// 特点：最自然的函数写法，TS 会根据实参自动推导 T
// =============================================
function filter5<T>(array: T[], f: (item: T) => boolean): T[] {
    return array.filter(f);
}

const res5_number = filter5([1, 2, 3], n => n % 2 === 0); // T 是 number
const res5_string = filter5(['a', 'b', 'c'], s => s > 'a'); // T 是 string

console.log('情况5:', res5_number, res5_string); // [2] ['b','c']


// =============================================
// 总结观察（取消注释即可测试类型报错）
// =============================================
// 情况1/3/5（动态）：同一个函数变量，可以灵活处理多种类型，推荐用于工具函数。
// 情况2/4（静态）：声明时必须指定类型，之后只能处理单一类型，推荐用于特定仓储类。

// 以上为Deepseek的总结 