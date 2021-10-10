// 泛型函数
function log<T>(str: T): T {
    console.log(typeof str, str);
    return str;
}

log<number>(12)
log<string>('log')
log([12, 'logging'])  // 运用了类型推断直接传参

// 类型别名
type Log12 = <T>(str: T) => T;
let myLog12: Log12 = log;

// 泛型接口
interface LogInterface<T> {
    logString: T
}

let logObj: LogInterface<string> = {
    logString: "loging "
}
console.log(logObj)
let logObj2: LogInterface<number> = {
    logString: 12
}
console.log(logObj2)

// 泛型接口 —— 指定默认类型为string
interface Log12Interace<T = string> {
    (value: T): T
}

let myLog12_2: Log12Interace = log;
myLog12_2('1');
let myLog12_3: Log12Interace<number> = log;
myLog12_3(1);