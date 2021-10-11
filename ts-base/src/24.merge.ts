// 接口合并
interface A {
    a: number
}

interface A {
    b: number
}
{
    let x: A = {
        a: 1,
        b: 3
    }
}
/**
 * 函数和命名空间的合并
 * 命名空间导出的属性相当于函数的属性
 */
function Lib(str: string) {
    console.log(str)
}

namespace Lib {
    export let version = '1.0'
}
Lib('wdnmd')
console.log(Lib.version)

/**
 * 类和命名空间的合并
 * 命名空间导出的属性相当于类的静态属性
 */
class C {}
namespace C {
    export let state = 1
}
console.log('state = ', C.state)

/**
 * 枚举和命名空间的合并
 * 命名空间导出的属性相当于枚举的成员
 */
namespace Color {
    export let pickColor = () => {
        console.log('red')
    }
}
enum Color {
    Red,
    Blue,
    Green
}
Color.pickColor()