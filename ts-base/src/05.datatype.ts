// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'
// str = 123

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, '4']

// 元组
let tuple: [number, string] = [0, '1']
let dir1: [number, number] = [0, 0]
let dir2: [number, number][] = [[0, 0], [0,3]]
console.log('dir2', dir2)
tuple.push(2)
console.log('tuple', tuple)
// console.log(tuple[2]); //Tuple type '[number, string]' of length '2' has no element at index '2'

// 函数
// let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b
console.log(compute(1, 1));

// 对象
let obj: { x: number, y: number } = { x: 1, y: 2 }
// let obj: object = {x: 1, y: 2}
let myObj: object = { name: "zjl", age: 24 }
obj.x = 3   // TS2339: Property 'x' does not exist on type 'object'.
// myObj.age = 22

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log("Symbol s1 === Symbol s2",s1 === s2)

// undefined, null
let un: undefined = undefined
let nu: null = null
let num2: number = 0
num2 = undefined
num2 = null

// void
let noReturn = () => {}

// any
let x
x = 1
x = []
x = () => {}

// never
let error = () => {
    throw new Error('error')
}
let endless = () => {
    while(true) {}
}


let ob1:object = {name:'zjl', age: 22}

let ob2:object = {name:'zjl', age: 22, address: "hz"}

console.log(ob1 == ob2)
