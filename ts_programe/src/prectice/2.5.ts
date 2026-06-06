// 编写出无法被推导的类型
const proxy1 = new Proxy({x : 1}, {
  get(target, prop, receiver) {
    console.log(`accessed property: ${String(prop)}`)
    return Reflect.get(target, prop, receiver)
  },
  set(target, prop, value, receiver) {
    console.log(`set property: ${String(prop)} = ${value}`)
    return Reflect.set(target, prop, value, receiver)
  }
})

// ❌ TS 推导不出 cb 的参数类型
function greet(cb: (name: string) => void) {
  cb("hello")
}
// 调用时 TS 不知道 name 是什么
greet((name) => console.log(name.toUpperCase())) // name: any ❌


// 2. 变量先声明后赋值
let result;        // 推导为 any
// ... 复杂逻辑 ...
result = { x: 1 }; // 不会回溯修正 result 的类型


// 3. 复杂的 Proxy / 包装器
const raw = { x: 1, y: "hello" }
const proxy = new Proxy(raw, { 
    get(target, prop, receiver) {
       if (prop === 'x') {
          return 'xxx';
       } else {
         return Reflect.get(target, prop, receiver);
       }
    },
 })
// typeof proxy === typeof raw ✅ 这个可以
// 但如果你想让 proxy 的返回类型动态变化（如自动转 string），TS 做不到
console.log(`proxy.x = ${proxy.x}`);


// 4. 递归类型 / 深层嵌套
// TS 有递归深度限制，复杂递归会报 "type instantiation is excessively deep"
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
}

// 5. 运行时动态构造的 key
const key = Math.random() > 0.5 ? "a" : "b";
const obj = { a: 1, b: 2 };
console.log(`dynamic key is ${key} obj[key] = ${obj[key]}`)
obj[key] // ❌ Element implicitly has an 'any' type
