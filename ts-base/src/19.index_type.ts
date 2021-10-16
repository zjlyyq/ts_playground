{
    let obj = {
        a: 1,
        b: 2,
        c: 3
    }

    let getValues = (obj: any, keys: string[]) => {
        return keys.map(key => obj[key])
    }

    let values = getValues(obj, ['a', 'b'])
    console.log(values)
    values = getValues(obj, ['d', 'e'])
    console.log(values)

    // keyof T 索引类型查询运算符
    interface Obj {
        a: number,
        b: string
    }

    let key: keyof Obj = 'a' // key 只能是 'a' 或 'b' -。 等同于字面量联合类型

    // T[k]  --> 索引访问操作符
    let value: Obj['a'] = 1 // value的类型 只能是接口Obj的属性 a 的类型 number

    // T extends U

    let getValuesExactly = <T, K extends keyof T>(obj: T, keys: K[]): T[K][] => {
        return keys.map(key => obj[key])
    }
    values = getValuesExactly(obj, ['a', 'b'])
    console.log(values)
    // values = getValuesExactly(obj, ['d', 'e'])  // 不能将类型“"e"”分配给类型“"a" | "b" | "c"”。
    console.log(values)
}