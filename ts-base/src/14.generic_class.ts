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