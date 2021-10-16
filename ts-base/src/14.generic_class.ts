// 泛型类
class Class14<T> {
    run(value: T): T {
        return value;
    }
}

let obj_14 = new Class14<number>();
obj_14.run(1);


interface Length {
    length: number
}
// 泛型约束 de 泛型函数
function log14<T extends Length>(str: T): T {
    console.log(typeof str, str.length);
    return str;
}


// 泛型约束
class LogClass<T extends Length> {
    run(value: T) {
        console.log(value, value.length)
    }
}

new LogClass().run('ddd')

// 支持参数是string和number和bolean的类型的函数 —— 泛型实现

function spec_14<T>(value: T): T {
    return value;
}
// 支持参数是string和number和bolean的类型的函数 —— 联合类型实现
function spec_14_2(value: boolean | string | number) {
    return value;
}