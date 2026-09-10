function x() {
  let a = null
  a = 1
  a = 'b'
  return a
}

const a = x() // any
// todo: 这里初始化为null或undefined的变量离开声明所在的作用域后，为什么没有被分配一个具体类型？

function y(x: string) {
  console.log(x)
}
y(a)

let d = [1, { x: 2 }]
let e = [1, { x: 2 }] as const

// 多余属性检查

type Option = {
  baseURL: string
  cacheSize?: number
  tier?: 'prod' | 'dev'
}

class API {
  constructor(private options: Option) {}
}

new API({ baseURL: 'https://api.example.com', cacheSize: 1000 })
type DiskType = {
  type: 'ssd' | 'hdd'
}
// 新鲜的对象字面量类型不能赋值给另一个类型U
// new API({ baseURL: 'https://api.example.com', cacheSize: 1000, disk: { type: 'ssd' } })  // 对象字面量只能指定已知属性，并且“disk”不在类型“Option”中。

// 使用断言
new API({
  baseURL: 'https://api.example.com',
  cacheSize: 1000,
  disk: { type: 'ssd' },
} as Option)

// 将新鲜的对象字面量复制给一个变量后，就变得不新鲜了。就可以赋值给另一个类型U。
let badTier = {
  baseURL: 'https://api.example.com',
  cacheSize: 1000,
  disk: { type: 'ssd' },
}
new API(badTier)
