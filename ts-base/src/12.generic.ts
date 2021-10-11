// 泛型函数
function log<T>(str: T) {
    console.log(typeof str, str)
}

log<number>(12)
log<string>('log')
log([12, 'logging'])

type Log2 = <T>() =>{}
// 泛型接口
interface LogInterface<T> {
    logString: T
}

let logObj: LogInterface<string> = {
    logString: "loging"
}
console.log(logObj)
let logObj2: LogInterface<number> = {
    logString: 12
}
console.log(logObj2)