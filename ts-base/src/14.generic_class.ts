interface TypeOf {
    length: number
}
// 泛型约束
class LogClass<T extends TypeOf> {
    run(value: T) {
        console.log(value, value.length)
    }
}

new LogClass().run('ddd')