let t1 = [1, true]  // (number | boolean)[]  // 数组类型
let t2 = [1, 'hello'] as const  // readonly [1, "hello"] // 只读元组

// t2[1] = 3  //  无法为“1”赋值，因为它是只读属性。  

function tuple<T extends unknown[]>(...ts: T): T {
  return ts
}

let t3 = tuple(1, 'hello') // [number, string]
const t4 = tuple(1, 'hello') // [number, string]
t4[1] = 'world'