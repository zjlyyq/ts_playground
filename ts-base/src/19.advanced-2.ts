let obj_18 = {
  a: 1,
  b: 2,
  c: 3
}

// 获取某个对象的若干个属性值组成数组
function getValues(obj: any, keys: string[]) {
  return keys.map(key => obj[key]);
}

console.log(getValues(obj_18, ['a', 'b']));   // [1, 2]
console.log(getValues(obj_18, ['e', 'f']));  // [undefined, undefined]

// keyof T —— T的公共属性的字面量属性的联合类型。
interface Obj_18 {
  a: number,
  b: string
}
let key_18: keyof Obj_18;

// T[k] 对象T的属性k所代表的类型。
let value_18: Obj_18['a'];   // value_18 是 number类型


// 泛型约束： T extends U  通过继承某些变量，获得属性


// 获取某个对象的若干个属性值组成数组
function getValues18<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key]);
}

// getValues18(obj_18, ['c', 'e']); // 不能将类型“"e"”分配给类型“"a" | "b" | "c"”