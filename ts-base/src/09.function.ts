function add1(x: number, y: number) {
    return x + y
}

let add2: (x: number, y: number) => number

type add3 = (x: number, y: number) => number

interface add4 {
    (x: number, y: number): number
}

// 可选参数
function add5(x: number, y?: number) {
    return y? x + y : x
}
add5(1)

// 默认值 必选参数之前必选传，之后的可以不传
function add6(x: number, y = 0, z: number, q = 1) {
    return x + y + z + q
}
console.log(add6(1, undefined, 3))

function add7(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur)
}
console.log(add7(1, 2, 3, 4, 5))

// 函数重载， 要求先定义一系列名称相同的函数声明
function add8(...rest: number[]): number
function add8(...rest: string[]): string
function add8(...rest: any[]): any {
    if (typeof rest[0] === 'number') {
        return rest.reduce((pre, cur) => pre + cur)
    }
    if (typeof rest[0] === 'string') {
        return rest.join('');
    }
}
console.log(add8(1, 2, 3, 4, 5, 6))
console.log(add8('1', '2', '3'))