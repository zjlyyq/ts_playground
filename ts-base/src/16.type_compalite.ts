// 当一个类型Y可以被赋值给另一个类型X时，我们就说类型X兼容类型Y
// X兼容Y ：X(目标类型) = Y(源类型)


let s: string = 'a'
s = null

{   
    // 接口兼容性
    interface a {
        a: any
        b: any
    }
    interface b {
        a: any
        b: any
        c: any
    }

    let x: a = {a: 1, b: 1}
    let y: b = {a: 1, b: 2, c: 3}
    x = y
    // y = x as b
    console.log(x, y, x === y)
}

{
    // 函数兼容性
    // 1) 参数个数
    let funx = (p1: number, p2: number) => {}
    let funy = (p1: number) => {}
    funx = funy
    // funy = funx

    // 2) 可选参数和剩余参数
    
}